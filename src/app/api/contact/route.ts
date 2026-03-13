import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// --- HTML escaping to prevent XSS in email templates ---
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// --- Validation helpers ---
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-()]+$/;

function validateInputs(name: string, email: string, phone: string, message: string): string | null {
  if (!name || !email || !phone || !message) {
    return "All fields are required.";
  }
  if (name.length > 100) return "Name must be 100 characters or less.";
  if (email.length > 254 || !EMAIL_RE.test(email)) return "Please enter a valid email address.";
  if (phone.length > 20 || !PHONE_RE.test(phone)) return "Please enter a valid phone number.";
  if (message.length > 5000) return "Message must be 5000 characters or less.";
  return null;
}

// --- In-memory rate limiter ---
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Cleanup old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap) {
      if (now - value.timestamp > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    }
  }

  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.timestamp > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return true;
  }
  return false;
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { name, email, phone, message } = await request.json();

    // Validate inputs
    const validationError = validateInputs(name, email, phone, message);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // Sanitize all user inputs for HTML email
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      replyTo: email,
      to: process.env.SMTP_EMAIL,
      subject: `New Contact from Dreamlytix — ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #374151; width: 100px;">Name:</td>
              <td style="padding: 10px; color: #1f2937;">${safeName}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 10px; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 10px; color: #1f2937;">
                <a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 10px; color: #1f2937;">
                <a href="tel:${safePhone}" style="color: #2563eb;">${safePhone}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
            This email was sent from the Dreamlytix contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

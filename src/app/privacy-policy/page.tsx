import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Dreamlytix",
  description: "Dreamlytix Privacy Policy — how we collect, use, and protect your data. Software solutions trusted by 150+ businesses.",
  alternates: {
    canonical: "https://dreamlytix.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 10, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              Dreamlytix (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website at dreamlytix.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Contact Form Data:</strong> When you submit our contact form, we collect your name, email address, phone number, and message content.
              </li>
              <li>
                <strong>Usage Data:</strong> We may automatically collect information about how you access and use the website, including your IP address, browser type,
                pages visited, and time spent on pages.
              </li>
              <li>
                <strong>Cookies:</strong> We use essential cookies to ensure the proper functioning of our website. We do not use tracking or advertising cookies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve and optimize our website experience</li>
              <li>Send you relevant information about our services (only if you have opted in)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Services</h2>
            <p>
              Our website may use third-party services such as hosting providers (Vercel), analytics tools, and email delivery services (Nodemailer). These services may
              have access to your information only to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Retention</h2>
            <p>
              We retain your contact form submissions for up to 12 months to follow up on inquiries. After this period, data is securely deleted unless retention is
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Withdraw consent for data processing at any time</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:contact@dreamlytix.com" className="text-blue-600 hover:underline">
                contact@dreamlytix.com
              </a>{" "}
              or call us at{" "}
              <a href="tel:+919933606242" className="text-blue-600 hover:underline">
                +91 99336 06242
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

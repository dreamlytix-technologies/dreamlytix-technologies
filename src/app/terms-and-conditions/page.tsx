import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Dreamlytix Terms & Conditions — rules and guidelines for using our services.",
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Terms &amp; Conditions</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 10, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Dreamlytix website (dreamlytix.com), you accept and agree to be bound by these Terms &amp; Conditions. If you do not agree to
              these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Services</h2>
            <p>
              Dreamlytix provides school management software, website development, admin panel development, and mobile application development services for educational
              institutions. The specific scope, deliverables, and timelines for any project will be defined in a separate service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, images, and software — is the property of Dreamlytix and is protected by applicable
              intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>You agree to provide accurate and truthful information when using our contact form or any other interactive features.</li>
              <li>You agree not to use our website for any unlawful purpose or in any way that could damage, disable, or impair the website.</li>
              <li>You are responsible for maintaining the confidentiality of any account credentials provided to you.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Payment Terms</h2>
            <p>
              Payment terms for our services will be outlined in individual project agreements. Unless otherwise specified, payments are due within 15 days of invoice
              date. Late payments may incur additional charges as specified in the service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Dreamlytix shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising
              out of or related to your use of our website or services. Our total liability shall not exceed the amount paid by you for the specific service giving rise
              to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Disclaimer</h2>
            <p>
              Our website and services are provided &quot;as is&quot; without any warranties, express or implied. We do not guarantee that the website will be
              uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Governing Law</h2>
            <p>
              These Terms &amp; Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to
              the exclusive jurisdiction of the courts in Murshidabad, West Bengal, India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms &amp; Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued
              use of the website after any changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Us</h2>
            <p>
              If you have questions about these Terms &amp; Conditions, please contact us at{" "}
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

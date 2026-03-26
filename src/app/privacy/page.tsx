import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name} — how we collect, use, and protect your personal data.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <ScrollReveal animation="fade" direction="up">
          <span className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-primary">
            Legal
          </span>
        </ScrollReveal>

        <ScrollReveal animation="fade" direction="up" delay={0.1}>
          <h1 className="mt-6 text-4xl font-bold text-text-heading sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-text-body">
            Last updated: 26 March 2026
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade" direction="up" delay={0.2} amount={0.05}>
          <div className="mt-12 space-y-8 text-text-body leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-text-heading">
                1. Introduction
              </h2>
              <p className="mt-3">
                MYT (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a
                stand-alone apartment management platform for self-managed
                residential communities in India. This Privacy Policy explains
                how we collect, use, store, and protect your personal data when
                you use our mobile application and related services.
              </p>
              <p className="mt-3">
                This policy is compliant with the Digital Personal Data
                Protection (DPDP) Act, 2023 of India.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                2. Data We Collect
              </h2>
              <p className="mt-3">We collect the following personal data:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Phone number</strong> — for account creation and OTP
                  authentication
                </li>
                <li>
                  <strong>Full name and display name</strong> — to identify you
                  within your apartment community
                </li>
                <li>
                  <strong>Email address</strong> — optional, for account
                  recovery and notifications
                </li>
                <li>
                  <strong>Emergency contact details</strong> — name, phone, and
                  relationship for safety purposes
                </li>
                <li>
                  <strong>Flat and apartment information</strong> — flat number,
                  block, resident type (owner/tenant), residing status
                </li>
                <li>
                  <strong>Financial data</strong> — maintenance payments,
                  balances, and transaction history related to your apartment
                </li>
                <li>
                  <strong>Communications</strong> — notices, announcements,
                  polls, and community chat messages you send
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                3. How We Use Your Data
              </h2>
              <p className="mt-3">Your personal data is used to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Authenticate your identity via phone OTP</li>
                <li>
                  Provide apartment management features (maintenance tracking,
                  communications, resident directory)
                </li>
                <li>
                  Display your name and flat details to other members of your
                  apartment community
                </li>
                <li>
                  Send you notifications about apartment activities (payments
                  due, notices, requests)
                </li>
                <li>
                  Process and record financial transactions related to your
                  apartment
                </li>
                <li>Improve our services and fix technical issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                4. Data Sharing
              </h2>
              <p className="mt-3">
                We do <strong>not</strong> sell your personal data to third
                parties.
              </p>
              <p className="mt-3">Your data is shared only in these cases:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Within your apartment community</strong> — your name,
                  flat number, and role are visible to other members of the same
                  apartment
                </li>
                <li>
                  <strong>Service providers</strong> — we use Supabase
                  (database/auth), Google Cloud (AI parsing for onboarding), and
                  standard notification services (SMS, email, push) to operate
                  the platform
                </li>
                <li>
                  <strong>Legal requirements</strong> — if required by Indian law
                  or a court order
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                5. Data Storage & Security
              </h2>
              <p className="mt-3">
                Your data is stored on secure cloud infrastructure. We use
                encryption in transit (HTTPS/TLS), JWT-based authentication, and
                role-based access controls to protect your data. Only authorised
                personnel have access to production systems.
              </p>
              <p className="mt-3">
                Financial records and chat messages are retained even after
                account deletion to maintain apartment accounting integrity.
                Personal identifiers are anonymised in such cases.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                6. Your Rights (DPDP Act 2023)
              </h2>
              <p className="mt-3">Under the DPDP Act, you have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Access</strong> — view all personal data we hold about
                  you (available in the My Profile section of the app)
                </li>
                <li>
                  <strong>Correction</strong> — update or correct your personal
                  data at any time via Edit Profile
                </li>
                <li>
                  <strong>Erasure</strong> — permanently delete your account and
                  all associated personal data via Delete Account in the app.
                  Your phone number is fully released and you may re-register.
                </li>
                <li>
                  <strong>Withdraw consent</strong> — you may stop using the app
                  and delete your account at any time
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                7. Data Retention
              </h2>
              <p className="mt-3">
                Your personal data is retained as long as your account is
                active. Upon account deletion:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Personal identifiers (name, phone, email) are permanently
                  erased
                </li>
                <li>
                  Financial records are retained with anonymised references
                  (&quot;Deleted User&quot;) for apartment accounting purposes
                </li>
                <li>Chat messages are retained with anonymised author details</li>
                <li>
                  Authentication records are permanently deleted, freeing your
                  phone number
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                8. Children&apos;s Privacy
              </h2>
              <p className="mt-3">
                MYT is not intended for use by individuals under 18 years of
                age. We do not knowingly collect personal data from children.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                9. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated &quot;Last
                updated&quot; date. Continued use of the app after changes
                constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                10. Contact Us
              </h2>
              <p className="mt-3">
                For any questions or concerns about this Privacy Policy or your
                personal data, contact us at:
              </p>
              <p className="mt-3">
                <a
                  href="mailto:hello@myt.community"
                  className="font-semibold text-primary hover:underline"
                >
                  hello@myt.community
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms & Conditions for ${SITE.name} — rules and guidelines for using our platform.`,
};

export default function TermsPage() {
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
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm text-text-body">
            Last updated: 26 March 2026
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade" direction="up" delay={0.2}>
          <div className="mt-12 space-y-8 text-text-body leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-text-heading">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3">
                By accessing or using the MYT mobile application (&quot;the
                App&quot;), you agree to be bound by these Terms & Conditions.
                If you do not agree to these terms, please do not use the App.
              </p>
              <p className="mt-3">
                MYT is operated by MYT (&quot;we&quot;, &quot;our&quot;, or
                &quot;us&quot;), a platform for self-managed residential
                communities in India.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                2. Eligibility
              </h2>
              <p className="mt-3">
                You must be at least 18 years of age and a resident of India to
                use MYT. By using the App, you represent that you meet these
                requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                3. Account & Authentication
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Accounts are created using your Indian mobile phone number via
                  OTP verification
                </li>
                <li>
                  You are responsible for maintaining the security of your device
                  and phone number
                </li>
                <li>
                  One phone number corresponds to one account. You may belong to
                  multiple apartments with the same account.
                </li>
                <li>
                  You agree to provide accurate information during registration
                  and keep your profile up to date
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                4. Apartment Communities
              </h2>
              <p className="mt-3">
                MYT allows apartment administrators to create and manage
                residential communities. By joining an apartment on MYT:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Your name, flat number, and role (admin/resident/tenant) will
                  be visible to other members of that apartment
                </li>
                <li>
                  Apartment administrators can manage members, finances, and
                  communications for their community
                </li>
                <li>
                  You agree to use the platform respectfully and in accordance
                  with your apartment community&apos;s rules
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                5. Financial Features
              </h2>
              <p className="mt-3">
                MYT provides tools for tracking maintenance payments, balances,
                and financial records:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  MYT is a <strong>record-keeping tool</strong>, not a payment
                  processor. We do not process, hold, or transfer money.
                </li>
                <li>
                  Financial data entered by administrators reflects their
                  records. MYT does not verify the accuracy of financial entries.
                </li>
                <li>
                  Disputes regarding maintenance payments should be resolved
                  between residents and their apartment administration
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                6. User Conduct
              </h2>
              <p className="mt-3">You agree not to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Use the App for any unlawful purpose or in violation of any
                  applicable laws
                </li>
                <li>
                  Send spam, abusive, or harassing messages through community
                  chat or notices
                </li>
                <li>
                  Attempt to gain unauthorised access to other users&apos;
                  accounts or apartment data
                </li>
                <li>
                  Impersonate another person or provide false information
                </li>
                <li>
                  Interfere with or disrupt the App&apos;s functionality or
                  infrastructure
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                7. Roles & Permissions
              </h2>
              <p className="mt-3">
                MYT uses a role-based permission system (admin, resident,
                non-resident, watchman). Each role has specific capabilities:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Administrators</strong> can manage members, finances,
                  communications, and apartment settings
                </li>
                <li>
                  <strong>Residents</strong> can view information, make payments,
                  raise requests, and participate in community activities
                </li>
                <li>
                  Actions are restricted based on your assigned role. Attempting
                  to bypass permission controls is a violation of these terms.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                8. Account Deletion
              </h2>
              <p className="mt-3">
                You may delete your account at any time from the My Profile
                section of the App. Upon deletion:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Your personal data (name, phone, email) will be permanently
                  erased
                </li>
                <li>
                  You will be removed from all apartment communities
                </li>
                <li>
                  Financial records will be retained in anonymised form for
                  apartment accounting integrity
                </li>
                <li>
                  Your phone number will be released and can be used to create a
                  new account
                </li>
              </ul>
              <p className="mt-3">
                If you are the sole administrator of an apartment with other
                residents, you will be asked to assign another admin before
                deletion can proceed.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                9. Intellectual Property
              </h2>
              <p className="mt-3">
                The MYT App, including its design, features, and content, is
                owned by us and protected by applicable intellectual property
                laws. You may not copy, modify, distribute, or reverse-engineer
                any part of the App.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                10. Limitation of Liability
              </h2>
              <p className="mt-3">
                MYT is provided &quot;as is&quot; without warranties of any
                kind. To the maximum extent permitted by law:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  We are not liable for any disputes between residents and their
                  apartment administration
                </li>
                <li>
                  We are not responsible for the accuracy of financial data
                  entered by users
                </li>
                <li>
                  We are not liable for any loss or damage arising from use of
                  the App, including data loss due to technical failures
                </li>
                <li>
                  Our total liability shall not exceed the amount paid by you to
                  us in the 12 months preceding the claim (if any)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                11. Changes to Terms
              </h2>
              <p className="mt-3">
                We may update these Terms & Conditions from time to time.
                Changes will be posted on this page with an updated &quot;Last
                updated&quot; date. Continued use of the App after changes
                constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                12. Governing Law
              </h2>
              <p className="mt-3">
                These terms are governed by and construed in accordance with the
                laws of India. Any disputes arising from these terms shall be
                subject to the exclusive jurisdiction of the courts in
                Hyderabad, Telangana, India.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-heading">
                13. Contact Us
              </h2>
              <p className="mt-3">
                For any questions about these Terms & Conditions, contact us at:
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

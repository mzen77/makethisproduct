import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 1, 2025">
      <h2>Information We Collect</h2>
      <p>
        We collect information you provide directly to us, including your name,
        email address, and any other information you choose to provide when you
        create an account, subscribe to our newsletter, vote on concepts, or
        contact us.
      </p>
      <p>
        We automatically collect certain information when you visit our site,
        including your IP address, browser type, operating system, referring
        URLs, and information about how you interact with our site.
      </p>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve our services</li>
        <li>Send you technical notices and support messages</li>
        <li>Respond to your comments and questions</li>
        <li>
          Track and analyze trends, usage, and activities in connection with our
          services
        </li>
        <li>
          Aggregate voting data to measure demand signals for product concepts
        </li>
      </ul>

      <h2>Newsletter &amp; Email</h2>
      <p>
        If you subscribe to our newsletter, we will use your email address to
        send you concept updates and curated digests at the frequency you
        selected. You can unsubscribe at any time by clicking the unsubscribe
        link in any email we send. We use Resend as our email service provider.
      </p>

      <h2>Cookies</h2>
      <p>
        We use cookies and similar tracking technologies to collect and track
        information and to improve and analyze our service. Cookies are files
        with a small amount of data that are sent to your browser from a website
        and stored on your device.
      </p>
      <p>
        We use session cookies to operate our service and preference cookies to
        remember your settings. We also use analytics cookies via PostHog to
        understand how visitors interact with our site.
      </p>

      <h2>Affiliate Links &amp; Third Parties</h2>
      <p>
        Some pages on our site contain affiliate links to real products that are
        similar to or inspired by our concepts. When you click these links and
        make a purchase, we may earn a small commission at no extra cost to you.
        These links are clearly disclosed on every page where they appear.
      </p>
      <p>
        We do not sell, trade, or otherwise transfer your personal information to
        third parties. This does not include trusted third parties who assist us
        in operating our website, conducting our business, or serving our users,
        so long as those parties agree to keep this information confidential.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain your personal information for as long as your account is active
        or as needed to provide you with our services. If you wish to cancel your
        account or request that we no longer use your information, please contact
        us at the email address below. We will retain and use your information as
        necessary to comply with our legal obligations, resolve disputes, and
        enforce our agreements.
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to processing of your data</li>
        <li>Request data portability</li>
        <li>Withdraw consent at any time where we rely on consent</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us using the details
        provided below. We will respond to your request within 30 days.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our service is not directed to children under the age of 13. We do not
        knowingly collect personal information from children under 13. If we
        learn that we have collected personal information from a child under 13,
        we will take steps to delete such information as soon as possible.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this privacy policy from time to time. We will notify you
        of any changes by posting the new privacy policy on this page and
        updating the &ldquo;Last updated&rdquo; date. You are advised to review
        this privacy policy periodically for any changes.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this privacy policy, please contact us at{" "}
        <a href="mailto:privacy@makethisproduct.com">
          privacy@makethisproduct.com
        </a>
        .
      </p>
    </LegalLayout>
  );
}

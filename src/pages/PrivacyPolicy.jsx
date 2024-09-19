import React from 'react'
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <section className="page-header">
        <div className="row">
          <div className="col">
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </section>
      <section className="privacy-content">
        <div className="row">
          <div className="col">
            <p>
              At <a href="/">wedibration.com</a>, we are committed to protecting
              your privacy and ensuring a safe online experience. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              information when you visit our website and use our services.
            </p>
            <h4>1. Information We Collect</h4>
            <p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> We may collect personal
                  information that you provide to us when you register on our
                  website, book a vendor, or contact us. This information may
                  include your name, email address, phone number, and wedding
                  details.
                </li>
                <li>
                  <strong>Payment Information:</strong> When you make a booking,
                  we collect payment information such as credit card numbers and
                  billing addresses. This information is processed securely
                  through our payment gateway.
                </li>
                <li>
                  <strong>Usage Data:</strong> We collect information about your
                  interactions with our website, including IP addresses, browser
                  types, pages viewed, and the time and date of visits. This
                  data helps us improve our services and user experience.
                </li>
                <li>
                  <strong>Cookies:</strong> We use cookies and similar
                  technologies to enhance your browsing experience. You can
                  manage your cookie preferences through your browser settings.
                </li>
              </ul>
            </p>
            <h4>2. How We Use Your Information</h4>
            <p>
              <ul>
                <li>
                  <strong>Service Provision:</strong> We use your personal
                  information to provide, maintain, and improve our services,
                  process transactions, and communicate with you.
                </li>
                <li>
                  <strong>Personalization:</strong> We may use your information
                  to personalize your experience, such as suggesting vendors
                  based on your preferences.
                </li>
                <li>
                  <strong>Marketing:</strong> With your consent, we may send you
                  promotional emails and updates about our services. You can
                  opt-out of these communications at any time.
                </li>
                <li>
                  <strong>Analytics:</strong> We use usage data to analyze
                  trends, monitor the performance of our website, and enhance
                  our services.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> We may use your information
                  to comply with legal obligations and protect our rights and
                  interests.
                </li>
              </ul>
            </p>
            <h4>3. Sharing Your Information</h4>
            <p>
              <ul>
                <li>
                  <strong>Vendors:</strong> When you book a vendor through our
                  platform, we share your information with the selected vendor
                  to facilitate the booking process.
                </li>
                <li>
                  <strong>Service Providers:</strong> We may share your
                  information with third-party service providers who assist us
                  in operating our website and delivering our services, such as
                  payment processors and marketing agencies.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your
                  information if required by law or in response to valid
                  requests by public authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of our business, your information may be
                  transferred as part of the transaction.
                </li>
              </ul>
            </p>
            <h4>4. Data Security</h4>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              disclosure, alteration, or destruction. Despite our efforts, no
              security measures are completely secure, and we cannot guarantee
              the absolute security of your information.
            </p>
            <h4>5. Your Rights</h4>
            <p>
              <ul>
                <li>
                  <strong>Access:</strong> You have the right to access the
                  personal information we hold about you and request a copy.
                </li>
                <li>
                  <strong>Correction:</strong> You can request the correction of
                  inaccurate or incomplete personal information.
                </li>
                <li>
                  <strong>Deletion:</strong> You may request the deletion of
                  your personal information, subject to certain exceptions.
                </li>
                <li>
                  <strong>Objection:</strong> You can object to the processing
                  of your personal information under certain circumstances.
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> If you have provided
                  consent for the processing of your information, you can
                  withdraw it at any time.
                </li>
              </ul>
            </p>
            <p>
              To exercise your rights, please contact us using the information
              provided below.
            </p>
            <h4>6. Third-Party Links</h4>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these
              websites. We encourage you to review their privacy policies before
              providing any personal information.
            </p>
            <h4>7. Changes to This Policy</h4>
            <p>
              We may update this Privacy Policy from time to time. The revised
              policy will be posted on this page with the effective date.
              Continued use of our services constitutes your acceptance of the
              updated policy.
            </p>
            <h4>8. Contact Us</h4>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
            </p>
            <p>
              <ul>
                <li>
                  <strong>Email: </strong>
                  <a href="mailto:info@wedibration.com">info@wedibration.com</a>
                </li>
                <li>
                  <strong>Phone: </strong>
                  <a href="tel: +91 63883 74921">+91 63883 74921</a>
                </li>
                <li>
                  <strong>Address: </strong>
                  <a href="">Varanasi,Uttar Pradesh, India</a>
                </li>
              </ul>
            </p>
            <p>
              By using <a href="/index.html">wedibration.com</a>, you acknowledge
              that you have read, understood, and agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PrivacyPolicy
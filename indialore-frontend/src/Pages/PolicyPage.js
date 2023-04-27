import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

import "./styles.css";

function PolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <section id="matter" class="section-p1 section-m1">
        <div class="matter-head">
          <h2> Privacy Policy</h2>
        </div>
        <div class="matter-content">
          <p>
            At [company name], we are committed to protecting your privacy and
            ensuring that your personal information is kept confidential. This
            privacy policy explains how we collect, use, and protect your
            personal information when you use our e-commerce website [website
            name].
          </p>

          <h4>1. Information We Collect</h4>
          <p>
            We may collect personal information from you when you visit our
            website, register an account, place an order, subscribe to our
            newsletter, or fill out a form. This information may include your
            name, email address, phone number, shipping address, and payment
            information.
          </p>

          <h4>2. Use of Information</h4>
          <p>
            We use your personal information to process and fulfill your orders,
            communicate with you about your orders and our products, provide
            customer support, and send promotional emails and newsletters. We
            may also use your information to improve our website, prevent fraud
            and illegal activities, and comply with legal obligations.
          </p>

          <h4>3. Sharing of Information</h4>
          <p>
            We may share your personal information with third-party service
            providers who help us with website hosting, payment processing,
            shipping, and marketing. We only share information that is necessary
            for these providers to perform their services. We may also share
            your information to comply with legal requirements, protect our
            rights and property, and prevent fraud and illegal activities.
          </p>

          <h4>4. Cookies and Tracking Technologies</h4>
          <p>
            We use cookies and other tracking technologies to improve your
            browsing experience, personalize your content, and analyze website
            traffic. Cookies are small data files that are stored on your device
            when you visit our website. You can manage your cookie preferences
            in your browser settings.
          </p>

          <h4>5. Security Measures</h4>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, and use. We use SSL encryption
            to secure your online transactions and protect your payment
            information. We also regularly monitor our systems for potential
            vulnerabilities and attacks.
          </p>

          <h4>6. Your Rights</h4>
          <p>
            You have the right to access, update, and delete your personal
            information. You can also opt-out of receiving promotional emails
            and newsletters at any time. If you have any questions or concerns
            about our privacy policy or your personal information, please
            contact us at [contact email].
          </p>

          <h4>7. Changes to Privacy Policy</h4>
          <p>
            We reserve the right to update and change this privacy policy at any
            time. We will notify you of any changes by posting the new policy on
            our website. Your continued use of our website after the changes
            have been made indicates your acceptance of the new policy.
          </p>

          <p>
            By using our website, you agree to the terms and conditions of this
            privacy policy. If you do not agree with this policy, please do not
            use our website.
          </p>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default PolicyPage;

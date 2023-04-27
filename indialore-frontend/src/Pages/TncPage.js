import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

import "./styles.css";

function TncPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <section id="matter" class="section-p1 section-m1">
        <div class="matter-head">
          <h2> Terms and Conditions</h2>
        </div>
        <div class="matter-content">
          <p>
            Welcome to [website name]! These terms and conditions
            (&ldquo;Terms&rdquo;) govern your use of our e-commerce website
            (&ldquo;Site&rdquo;) and our products and services. By using our
            Site, you agree to be bound by these Terms. Please read them
            carefully.
          </p>

          <p>
            Use of Site: You may use our Site for lawful purposes only. You must
            not use our Site in any way that violates any applicable laws or
            regulations, infringes any intellectual property rights, or
            interferes with the proper functioning of our Site. You agree not to
            use any automated means, such as bots or crawlers, to access or
            interact with our Site.
          </p>

          <p>
            Intellectual Property: All content on our Site, including but not
            limited to text, graphics, logos, images, videos, and software, is
            the property of [company name] or its licensors and is protected by
            intellectual property laws. You may not use any content from our
            Site without our prior written consent.
          </p>

          <p>
            Products and Services: We offer a variety of products and services on
            our Site, including but not limited to merchandise, digital content,
            and subscriptions. All products and services are subject to
            availability and may be changed or discontinued at any time without
            notice. We make no warranties or representations about the quality,
            accuracy, or completeness of any product or service offered on our
            Site.
          </p>

          <p>
            Payment and Shipping: We accept various payment methods, including
            credit cards, debit cards, and PayPal. Prices for products and
            services are subject to change without notice. Shipping and handling
            fees are calculated at checkout and vary depending on the shipping
            method and destination. We are not responsible for any customs
            duties, taxes, or other fees imposed by your country.
          </p>

          <p>
            Returns and Refunds: We want you to be satisfied with your purchase.
            If you are not satisfied with your purchase, you may return it
            within [number] days for a refund or exchange. All returned items
            must be in their original condition and packaging. We reserve the
            right to refuse returns or exchanges that do not meet our criteria.
          </p>

          <p>
            User Content: You may submit user-generated content to our Site, such
            as product reviews or comments. By submitting such content, you
            grant us a non-exclusive, royalty-free, perpetual, and irrevocable
            license to use, reproduce, modify, adapt, publish, translate,
            distribute, and display the content in any media. You represent and
            warrant that you own or have the necessary rights to submit such
            content and that the content is accurate and not misleading or
            harmful.
          </p>

          <p>
            Indemnification: You agree to indemnify and hold harmless [company
            name] and its officers, directors, employees, and agents from any
            claims, damages, liabilities, costs, or expenses arising from your
            use of our Site, your violation of these Terms, or your infringement
            of any intellectual property rights or other rights of a third
            party.
          </p>

          <p>
            Limitation of Liability: In no event shall [company name] be liable
            for any indirect, incidental, special, or consequential damages
            arising from your use of our Site or any products or services
            purchased from us, including but not limited to loss of profits,
            data, or use. Our total liability to you for any damages shall not
            exceed the amount paid by you for the products or services.
          </p>

          <p>
            Termination: We may terminate or suspend your access to our Site at
            any time, without prior notice or liability, for any reason
            whatsoever, including but not limited to your violation of these
            Terms. Upon termination, your right to use our Site will immediately
            cease.
          </p>

          <p>
            Governing Law and Jurisdiction: These Terms shall be governed by and
            construed in accordance with the laws of [state/country]. Any
            dispute arising from or related to these Terms shall be subject to
            the exclusive jurisdiction of the courts in [city/state/country].
          </p>

          <p>
            Disclaimer of Warranties: Our Site and all products and services
            offered on our Site are provided on an &ldquo;as is&rdquo; and
            &ldquo;as available&rdquo; basis, without any warranties of any
            kind, express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, or
            non-infringement. We do not warrant that our Site or any products or
            services will meet your requirements, be uninterrupted, secure, or
            error-free.
          </p>

          <p>
            Modification of Terms: We reserve the right to modify these Terms at
            any time, without prior notice. Your continued use of our Site after
            any such modifications shall constitute your acceptance of the
            revised Terms.
          </p>

          <p>
            Third-Party Links and Services: Our Site may contain links to
            third-party websites and services that are not owned or controlled
            by [company name]. We have no control over and assume no
            responsibility for the content, privacy policies, or practices of
            any third-party websites or services. Your use of any third-party
            website or service is at your own risk.
          </p>

          <p>
            Privacy Policy: Our Privacy Policy, located at [link to Privacy
            Policy], is incorporated into these Terms by reference. By using our
            Site, you consent to the collection, use, and disclosure of your
            personal information as described in our Privacy Policy.
          </p>

          <p>
            Entire Agreement: These Terms, together with our Privacy Policy,
            constitute the entire agreement between you and [company name]
            regarding your use of our Site and supersedes all prior agreements
            and understandings, whether written or oral.
          </p>

          <p>
            Waiver and Severability: Our failure to enforce any provision of
            these Terms shall not be construed as a waiver of that provision or
            any other provision. If any provision of these Terms is held to be
            invalid or unenforceable, the remaining provisions shall remain in
            full force and effect.
          </p>

          <p>
            Contact Us: If you have any questions or comments about these Terms,
            please contact us at [contact information].
          </p>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default TncPage;

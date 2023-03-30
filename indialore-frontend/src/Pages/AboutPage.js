import React from "react";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

import "./styles.css";

function AboutPage() {
  return (
    <div>
      <Header />
      <section id="matter" class="section-p1 section-m1">
        <div class="matter-head">
          <h2>About Us </h2>
        </div>
        <div class="matter-content">
          <p>
            Welcome to IndiaLore, your one-stop destination for authentic
            traditional products from India. Our ecommerce website offers a wide
            range of products that reflect the rich cultural heritage of India.
          </p>

          <p>
            At IndiaLore, we believe that traditional products are not just
            items, but an embodiment of our cultural identity. We are dedicated
            to preserving and promoting the traditional art and crafts of India
            by showcasing the finest collection of handcrafted products made by
            skilled artisans.
          </p>

          <p>
            We take pride in our collection of traditional products that
            includes handloom sarees, intricate jewelry, home decor items, and
            much more. Our products are not just aesthetically pleasing but also
            reflect the rich history, culture, and tradition of India.
          </p>

          <p>
            We work directly with the artisans from various parts of India to
            bring you the best quality products at affordable prices. We believe
            in fair trade practices, where both the artisans and customers are
            benefited. By buying products from IndiaLore, you are supporting the
            traditional art and crafts of India and contributing to the
            livelihood of the artisans.
          </p>

          <p>
            At IndiaLore, we understand that online shopping can be tricky,
            especially when it comes to buying traditional products. We strive
            to make your shopping experience hassle-free by providing you with
            detailed product descriptions, high-quality images, and easy payment
            and shipping options.
          </p>

          <p>
            We are committed to providing our customers with excellent customer
            service and making sure that their shopping experience with us is
            pleasant and satisfying. Our goal is to bring the best of India to
            your doorstep, and we are dedicated to achieving this through our
            ecommerce platform.
          </p>

          <p>
            Thank you for choosing IndiaLore, and we look forward to bringing
            you the best of traditional India!
          </p>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default AboutPage;

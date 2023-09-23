import React from "react";
import backgroundImage from "./hero-bg.jpg";
const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="container position-relative"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1 dir="rtl">
          فصل افتراضي قائم على تكنيز مصادر التعلم لتنمية مهارات
          <br />
          انتاج الرسومات المتحركة لدى طلاب كلية التربية
        </h1>
        <h2 dir="rtl">
          اشراف
          <br />
          ا.د / ربيع عبد العظيم رمود
          <br />
          د/ امانى سمير عبد الوهاب
        </h2>
        <a href="courses.html" className="btn-get-started">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;

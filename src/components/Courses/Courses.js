import React from "react";
import CourseCard from "../UI/CourseCard";

const Courses = () => {
  return (
    <section id="popular-courses" className="courses" dir="rtl">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>مسارات</h2>
          <p>الكورسات</p>
        </div>
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </section>
  );
};

export default Courses;

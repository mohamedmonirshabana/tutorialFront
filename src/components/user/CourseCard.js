import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ActivCard from "./ActivCard";
import Libraries from "./Libraries";
import ContentCard from "./ContentCard";

const CourseCard = ({ courid }) => {
  const token = localStorage.getItem("token");
  const [course, setCourse] = useState([]);

  const [couinsta, setCouinsta] = useState();
  const [showInsta, setShowInsta] = useState(false);

  const [targ, setTarg] = useState();
  const [showTag, setShowTag] = useState(false);

  const [aac, setAac] = useState();
  const [showActive, setShowActive] = useState(false);

  const [lib, setLib] = useState();
  const [showLib, setShowLib] = useState(false);

  const [content, setContent] = useState();
  const [showContent, setShowContent] = useState(false);

  const myData = async () => {
    const response = await fetch(`http://localhost:8000/course/${courid}`, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    setCourse(data);
    setCouinsta(data.courseinstructions);
    setTarg(data.coursetarget);
    setAac(data.courseActivities);
    setLib(data.courselibraries);
    setContent(data.coursevideoes);
    // console.log("cou", data);
  };

  useEffect(() => {
    myData();
  }, []);

  function displayInsta() {
    setShowInsta(true);
    setShowTag(false);
    setShowActive(false);
    setShowLib(false);
    setShowContent(false);
  }

  function displayTag() {
    setShowTag(true);
    setShowInsta(false);
    setShowActive(false);
    setShowLib(false);
    setShowContent(false);
  }

  function displayAct() {
    setShowActive(true);
    setShowTag(false);
    setShowInsta(false);
    setShowLib(false);
    setShowContent(false);
  }

  function DisplayLib() {
    setShowLib(true);
    setShowActive(false);
    setShowTag(false);
    setShowInsta(false);
    setShowContent(false);
  }

  function DisplayContent() {
    setShowContent(true);
    setShowLib(false);
    setShowActive(false);
    setShowTag(false);
    setShowInsta(false);
  }

  return (
    <div className="row my-2" dir="rtl">
      <div className="col-3">
        <div
          className="p-2 vh-50"
          style={{ backgroundColor: "#0C356A", borderRadius: "50px" }}
        >
          <ul style={{ listStyle: "none" }} className="text-center">
            <li className="my-4">
              <Link className="text-white fs-3 fw-bold" onClick={displayInsta}>
                التعليمات
              </Link>
            </li>
            <li className="my-3">
              <Link className="text-white fs-3 fw-bold" onClick={displayTag}>
                الاهداف التعليمية
              </Link>
            </li>
            <li className="my-3">
              <Link
                className="text-white fs-3 fw-bold"
                onClick={DisplayContent}
              >
                المحتوى التعليمى
              </Link>
            </li>
            <li className="my-3">
              <Link className="text-white fs-3 fw-bold" onClick={displayAct}>
                الانشطة التعليمية
              </Link>
            </li>
            <li className="my-3">
              <Link className="text-white fs-3 fw-bold" onClick={DisplayLib}>
                المكتبة الاثرائية
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-9 pt-5">
        {showInsta ? (
          <div dir="rtl mt-2">
            <h2 className="text-danger fs-3">
              عزيزى الطالب يجب اتباع الخطوات التالية لضمان اتمام دراسة الموديل
              بنجاح
            </h2>
            <ul>
              {couinsta && couinsta.map((c, idx) => <li key={idx}>{c}</li>)}
            </ul>
            <img
              src="/images/inst.gif"
              alt="insta"
              className="image-fluid w-25"
            />
          </div>
        ) : (
          <></>
        )}
        {showTag ? (
          <div dir="rtl">
            <h2 className="text-danger fs-3">
              عزيزى الطالب عليك بعد دراسة هذا الموديول ان تكون قادرا عىل :
            </h2>
            <ul>{targ && targ.map((c, idx) => <li key={idx}>{c}</li>)}</ul>
            <img
              src="/images/tag.gif"
              alt="insta"
              className="image-fluid w-25"
            />
          </div>
        ) : (
          <></>
        )}
        {showActive ? (
          aac.map((C, indx) => <ActivCard key={indx} acid={C.activity} />)
        ) : (
          <></>
        )}
        {showLib ? (
          lib.map((l, indx) => <Libraries key={indx} lid={l.libray} />)
        ) : (
          <></>
        )}
        <div className="container">
          {showContent ? (
            content.map((v, indx) => (
              <ContentCard cid={v.video} key={indx} coun={indx + 1} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

// <Link key={course && course._id} to={`/course/${course && course._id}`}>
//   {course && course.coursename}
// </Link>

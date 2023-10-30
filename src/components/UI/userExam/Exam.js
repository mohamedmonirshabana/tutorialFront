import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExamBody from "./ExamBody";
// import ExamStart from "./ExamStart";

// const ExamD = [
//   {
//     id: 1,
//     question: {
//       id: 801,
//       questext: "What is photo shop",
//     },
//     answers: [
//       {
//         id: 901,
//         questitle: "A good one",
//       },
//       {
//         id: 902,
//         questitle: "A another  one",
//       },
//       {
//         id: 903,
//         questitle: "A good thing",
//       },
//       {
//         id: 904,
//         questitle: "A good Choose",
//       },
//     ],
//   },
//   {
//     id: 2,
//     question: {
//       id: 802,
//       questext: "another Question",
//     },
//     answers: [
//       {
//         id: 905,
//         questitle: "A good Another",
//       },
//       {
//         id: 906,
//         questitle: "A another  Two One",
//       },
//       {
//         id: 907,
//         questitle: "A good thing",
//       },
//       {
//         id: 908,
//         questitle: "A good Choose",
//       },
//     ],
//   },
// ];

const Exam = ({
  examid,
  exdata,
  examname,
  examDegree,
  Questioncount,
  allQuestions,
}) => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [showPanel, setShowPanel] = useState(true);
  const [items, setItems] = useState([{}]);
  // const [examName, setExamName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const fetchItems = async () => {
    // questions.push(allQuestions);
    // setExamName(exdata.examName);
    items.push(allQuestions);
    // console.log(questions);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const sendData = async () => {
    console.log("Exam");
    const Arr = [];
    for (let i = 0; i < questions.length; i++) {
      Arr.push(questions[i]);
    }
    const Data = questions;

    const Dsen = await fetch(
      `http://localhost:8000/exam/examresult/${examid}`,
      {
        method: "post",
        body: JSON.stringify(Arr),
        headers: {
          "content-type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    const result = await Dsen.json();
    navigate(`/prerxamresult/${result}`, { replace: true });
  };

  function addQuestionAndAnswer(qid, ansid) {
    const updateData = [{ questionid: qid, answerid: ansid }];
    questions.push(updateData);
    console.log(questions);
  }
  const ChangePanel = (event) => {
    event.preventDefault();
    setShowPanel(false);
  };
  return (
    <>
      {showPanel ? (
        <main className="d-flex w-100">
          <div className="container d-flex flex-column">
            <div className="row vh-100">
              <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
                <div className="d-table-cell align-middle">
                  <div className="text-center mt-4">
                    <h1 className="h2">{examname}</h1>
                    {/* <p className="lead">امتحان قبلى</p> */}
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="m-sm-3">
                        <div className="d-flex flex-column" dir="rtl">
                          <p>
                            <strong className="text-primary">
                              الهدف من الإختبار :
                            </strong>
                            <br />
                            يهدف هذا الإختبار إلى قياس الجوانب المعرفية لمهارات
                            انتاج الرسومات المتحركة ثنائية وثلاثية الأبعاد لدى
                            طلاب كلية التربية.
                            <br />
                            <strong className="text-primary">
                              تعليمات الإختبار :
                            </strong>
                            <br />
                            عزيزي الطالب أقرأ التعليمات جيداً قبل الشروع فى
                            الإجابة : 1- يحتوى هذا الإختبار على جزئين؛ جزء خاص
                            بأسئلة الإختيار من متعدد، وجزء خاص لأسئلة الصواب
                            والخطأ. 2- سوف يتم الإجابة بإستخدام مؤشر الفارة 3-
                            مدة الإختبار 30 دقيقة 4- لا يمكن تعديل الإجابات فى
                            الإختبار بعد تسليمها 5- بعد الإنتهاء من حل السؤال
                            انقر على زر التالي للإنتقال للسؤال التالي 6- بعد
                            الإنتهاء من الإجابة عن جميع الأسئلة انقر فوق زر
                            انهاء الإختبار؛ لتظهر نتيجة الإختبار 7- نسبة النجاح
                            فى الإختبار من 85%
                          </p>
                          <p>
                            <strong className="text-primary">
                              درجة الامتحان
                            </strong>
                            {examDegree}
                          </p>
                          <p>
                            <strong className="text-primary">
                              عدد الاسئلة
                            </strong>
                            {Questioncount}
                          </p>
                          <button
                            className="btn btn-primary"
                            onClick={ChangePanel}
                          >
                            ابداءالاختبار القبلى
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <div>
          {/* <ExamStart examName={examname} QuestionCount={items.length} /> */}
          <ExamBody
            key={Math.floor(Math.random() * 1e9)}
            data={allQuestions}
            evn={addQuestionAndAnswer}
            ad={sendData}
          />
        </div>
      )}
    </>
  );
};

export default Exam;

{
  /* <div
  className="container border border-dark shadow p-3 mb-5 bg-body-tertiary rounded"
  dir="rtl"
>
  <h1 className="text-center">{examname}</h1>
  <hr />
  <h2>درجة الامتحان {examDegree}</h2>
  <h2>عدد الاسئلة {Questioncount}</h2>
  <button className="get-started-btn" onClick={ChangePanel}>
    الامتحان
  </button>
</div>; */
}

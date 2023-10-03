import React from "react";

const ExamAnswer = () => {
  return (
    <div className="col-6 ">
      <div className="container h-100 mt-5 ">
        <div className="d-flex flex-column justify-content-between">
          <div className="form-check">
            <input
              className="form-check-input d-none"
              type="radio"
              name="flexRadioDefault"
              id="answer_1"
            />
            <label className="form-check-label  w-100" htmlFor="answer_1">
              <div className=" m-2 p-3 rounded">
                <div className="position-relative z-0  w-100">
                  <h1 className=" opacity-25 top-100 start-100 ansLa">A</h1>
                </div>
                <div className="position-relative z-3 text-dark ">
                  <p className="w-100" dir="rtl">
                    رسومات متحركة ثنائية الأبعاد
                  </p>
                </div>
              </div>
            </label>
          </div>
          {/* <!-- end answer 1 --> */}
          <div className="form-check">
            <input
              className="form-check-input d-none"
              type="radio"
              name="flexRadioDefault"
              id="answer_2"
            />
            <label className="form-check-label  w-100" htmlFor="answer_2">
              <div className=" m-2 p-3 rounded">
                <div className="position-relative z-0  w-100">
                  <h1 className="opacity-25  top-100 start-100">B</h1>
                </div>
                <div className="position-relative z-3 text-dark ">
                  <p className="w-100" dir="rtl">
                    رسومات متحركة ثلاثية الأبعاد
                  </p>
                </div>
              </div>
            </label>
          </div>
          {/* <!-- end answer 2 --> */}
          <div className="form-check">
            <input
              className="form-check-input d-none"
              type="radio"
              name="flexRadioDefault"
              id="answer_3"
            />
            <label className="form-check-label  w-100" htmlFor="answer_3">
              <div className=" m-2 p-3 rounded">
                <div className="position-relative z-0  w-100">
                  <h1 className=" opacity-25 top-100 start-100">C</h1>
                </div>
                <div className="position-relative z-3 text-dark ">
                  <p className="w-100" dir="rtl">
                    وقف الحركة stop motion
                  </p>
                </div>
              </div>
            </label>
          </div>
          {/* <!-- end answer 3 --> */}
          <div className="form-check">
            <input
              className="form-check-input d-none"
              type="radio"
              name="flexRadioDefault"
              id="answer_4"
            />
            <label className="form-check-label  w-100" htmlFor="answer_4">
              <div className=" m-2 p-3 rounded">
                <div className="position-relative z-0  w-100">
                  <h1 className="  opacity-25 top-100 start-100">D</h1>
                </div>
                <div className="position-relative z-3 text-dark ">
                  <p className="w-100" dir="rtl">
                    جميع ما سبق
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamAnswer;

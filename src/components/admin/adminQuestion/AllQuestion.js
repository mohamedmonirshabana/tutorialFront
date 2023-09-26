import React from "react";
import Questions from "../../UI/Question/Questions";
import AdminSide from "../adminGeneral/AdminSide";

const AllQuestion = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <div className="row">
            <a href="/admin/question/add" className="btn btn-primary">
              اضافة سؤال
            </a>
          </div>
          <div className="row">
            <div className="container mt-5">
              <div className="row">
                <div className=" " style={{ width: "50%" }}>
                  <Questions />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestion;

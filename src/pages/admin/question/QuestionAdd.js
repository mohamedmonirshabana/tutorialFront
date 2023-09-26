import React from "react";
import AddQuestion from "../../../components/admin/adminQuestion/AddQuestion";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";

const QuestionAdd = () => {
  return (
    <>
      <AdminHeader />
      <AddQuestion />
      <GeneralFooter />
    </>
  );
};

export default QuestionAdd;

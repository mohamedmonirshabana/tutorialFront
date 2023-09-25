import React from "react";
import ShowExam from "../../../components/admin/adminExam/ShowExam";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";

const AllExam = () => {
  return (
    <>
      <AdminHeader />
      <ShowExam />
      <GeneralFooter />
    </>
  );
};

export default AllExam;

import React from "react";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";
import CreateCourse from "../../../components/admin/courses/CreateCourse";

const AddCourse = () => {
  return (
    <>
      <AdminHeader />
      <CreateCourse />
      <GeneralFooter />
    </>
  );
};

export default AddCourse;

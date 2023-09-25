import React from "react";
import AdminHeader from "../../../components/general/header/AdminHeader";
import StudentAll from "../../../components/admin/adminStudent/StudentAll";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";
const AdminAllStudent = () => {
  return (
    <>
      <AdminHeader />
      <StudentAll />
      <GeneralFooter />
    </>
  );
};

export default AdminAllStudent;

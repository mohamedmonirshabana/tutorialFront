import React from "react";
import AdminHeader from "../../components/general/header/AdminHeader";
import AdminSide from "../../components/admin/adminGeneral/AdminSide";
import GeneralFooter from "../../components/general/footer/GeneralFooter";
const AdminDashboard = () => {
  return (
    <>
      <AdminHeader />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <AdminSide />
          </div>
          <div className="col-10">
            <h1>welcome</h1>
          </div>
        </div>
      </div>
      <GeneralFooter />
    </>
  );
};

export default AdminDashboard;

import React from "react";
import AdminHeader from "../../components/general/header/AdminHeader";
import AdminSide from "../../components/admin/adminGeneral/AdminSide";
import GeneralFooter from "../../components/general/footer/GeneralFooter";
// import SpecialFooter from "../../components/general/footer/SpecialFooter";
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
      {/* <SpecialFooter /> */}
      <GeneralFooter />
    </>
  );
};

export default AdminDashboard;

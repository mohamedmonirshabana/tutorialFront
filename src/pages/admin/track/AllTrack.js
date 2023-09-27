import React from "react";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";
import ShowTrack from "../../../components/admin/adminTrack/ShowTrack";

const AllTrack = () => {
  return (
    <>
      <AdminHeader />
      <ShowTrack />
      <GeneralFooter />
    </>
  );
};

export default AllTrack;

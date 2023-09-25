import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./pages/auth/Signin";
import SignUp from "./pages/auth/SignUp";
import Forgetpass from "./pages/auth/Forgetpass";
import RecoverPass from "./pages/auth/RecoverPass";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAllStudent from "./pages/admin/student/AdminAllStudent";
import AdminStudent from "./pages/admin/student/AdminStudent";
import AllExam from "./pages/admin/exam/AllExam";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetPassword" element={<Forgetpass />} />
        <Route path="/newpassword/:code" element={<RecoverPass />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/student/all" element={<AdminAllStudent />} />
        <Route path="/admin/student/:studentid" element={<AdminStudent />} />
        <Route path="/admin/exam" element={<AllExam />} />
      </Routes>
    </div>
  );
};

export default App;

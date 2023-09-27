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
import CreateExam from "./pages/admin/exam/CreateExam";
import ExamActive from "./pages/admin/exam/ExamActive";
import ExamDeactive from "./pages/admin/exam/ExamDeactive";
import ExamDelete from "./pages/admin/exam/ExamDelete";
import QuestionAdd from "./pages/admin/question/QuestionAdd";
import QuestionAll from "./pages/admin/question/QuestionAll";
import QuestionDelete from "./pages/admin/question/QuestionDelete";
import AnswerAdd from "./pages/admin/answer/AnswerAdd";
import AllTrack from "./pages/admin/track/AllTrack";
import AddTrack from "./pages/admin/track/AddTrack";
import RemoveTrack from "./pages/admin/track/RemoveTrack";
import CourseAll from "./pages/admin/course/CourseAll";
import CourseDelete from "./pages/admin/course/CourseDelete";
import AddCourse from "./pages/admin/course/AddCourse";
import ShowVideo from "./pages/admin/video/ShowVideo";
import Addvideo from "./pages/admin/video/Addvideo";
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
        <Route path="/admin/exam/create" element={<CreateExam />} />
        <Route path="/admin/examactive/:examid" element={<ExamActive />} />
        <Route path="/admin/examdeactive/:examid" element={<ExamDeactive />} />
        <Route path="/admin/examdelete/:examid" element={<ExamDelete />} />
        <Route path="/admin/question/add" element={<QuestionAdd />} />
        <Route path="/admin/questions" element={<QuestionAll />} />
        <Route
          path="/admin/question/delete/:qid"
          element={<QuestionDelete />}
        />
        <Route path="/admin/answer/add/:qid" element={<AnswerAdd />} />
        <Route path="/admin/track" element={<AllTrack />} />
        <Route path="/admin/track/add" element={<AddTrack />} />
        <Route path="/admin/track/:trackid" element={<RemoveTrack />} />
        <Route path="/admin/courses" element={<CourseAll />} />
        <Route path="/admin/course/:cid" element={<CourseDelete />} />
        <Route path="/admin/course/add" element={<AddCourse />} />
        <Route path="/admin/video/all" element={<ShowVideo />} />
        <Route path="/admin/video/add" element={<Addvideo />} />
      </Routes>
    </div>
  );
};

export default App;

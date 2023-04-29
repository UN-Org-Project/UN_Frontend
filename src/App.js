import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import { Home, Login, Teacher, NoMatch, Parent } from "./Pages/index";
import AddMarks from "./Pages/TeacherDb/AddMarks/AddMarks";
import Dashboard from "./Pages/TeacherDb/Dashboard/Dashboard";
import AdminStd from "./Pages/AdminDb/AdminStdPage";
import AdminTech from "./Pages/AdminDb/AdminTechPage";
import DirectChatPage from "./Pages/chatting/chat";
import NotesAllStudent from "./Pages/TeacherDb/NotesAllparents";
import StudentInfo from "./Pages/TeacherDb/Dashboard/studentsInfo";
import ChildDetails from "./Pages/ParentDb/Children/ChildrenDetails/ChildDetails";
import Children from "./Pages/ParentDb/Children/Children";
import ShowALlNotes from "./Pages/ParentDb/Children/ChildrenDetails/ShowALlNotes";
import Note from "./Pages/ParentDb/Children/ChildrenDetails/Note";
import ShowMarks from "./Pages/ParentDb/Children/ChildrenDetails/showMarks";
import Events from "./Pages/ParentDb/Children/ChildrenDetails/Events";
import InfoStudents from "./Pages/AdminDb/InfoStudents";
import InfoTeachers from "./Pages/AdminDb/InfoTeachers";

const App = () => {
  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Admin/AdminStudents" element={<AdminStd />} />
        <Route path="/Admin/AdminTeachers" element={<AdminTech />} />
        <Route path="/Admin/InfoStudents" element={<InfoStudents />} />
        <Route path="/Admin/InfoTeachers" element={<InfoTeachers />} />
        <Route path="/teacher" element={<Teacher />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Addmarks" element={<AddMarks />} />
          <Route path="ChattingTeacher/:id" element={<DirectChatPage />} />
          <Route path="SendNotesAndReports" element={<NotesAllStudent />} />
          <Route path="StudentsInfo" element={<StudentInfo />} />
        </Route>

        <Route path="/parent" element={<Parent />}>
          <Route path="children" element={<Children />} />
          <Route path="childDetails/:id" element={<ChildDetails />} />
          <Route path="childDetails/:id" element={<ChildDetails />} />
                    <Route path="Showmarks/:id" element={<ShowMarks />} />
                    <Route path="Events/:id" element={<Events />} />
                   {" "}
          <Route path="parentChating/:id" element={<DirectChatPage />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* </Router> */}
    </>
  );
};

export default App;

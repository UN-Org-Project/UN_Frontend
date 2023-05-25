import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "../FormForEdit/Modal";
import { Table } from "../FormForEdit/Table";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import axios from "axios";
import ".././pagination.css";
import Layout from "../../../Layout/Layout";
import Btn from "../../../components/SideBar/MenuBtn/Btn";
import { AdminAvatar, EditForm } from "../../../components/assets";
import {
  FaChalkboardTeacher,
  FaUserEdit,
  FaUserGraduate,
} from "react-icons/fa";
import MainTitle from "../../../components/SectionTitle/MainTitle";
import { Edit } from "@mui/icons-material";
import "./../AdminDb.css";

const buttons = [
  {
    name: "Add Student",
    path: "/Admin/AdminStudents",
    icon: <FaUserGraduate style={{ width: "18", height: "18" }} />,
  },
  {
    name: "Edit Students",
    path: "/Admin/InfoStudents",
    icon: <Edit style={{ width: "18", height: "18" }} />,
  },
  {
    name: "Add Teachers",
    path: "/Admin/AdminTeachers",
    icon: <FaChalkboardTeacher style={{ width: "18", height: "18" }} />,
  },
  {
    name: "Edit Teachers",
    path: "/Admin/InfoTeachers",
    icon: <FaUserEdit style={{ width: "18", height: "18" }} />,
  },
];
const InfoTeachers = () => {
  const id = localStorage.getItem("userData");
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  // const [infoStd, setinfoStd] = useState([]);
  const [rows, setRows] = useState([]);
  const [adminName, setAdminData] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchStudentData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/getAllTeachers"
        );
        const data = response.data;
        setRows(data);
        async function fetch() {
          setIsLoading(true);
          const response = await axios.get(
            "http://localhost:8000/getAdmininfo/" + id
          );
          console.log(response.data);
          setIsLoading(false);
          //    setAdminData(response.data.adminData);
          const adminName = response.data.adminName;
          setAdminData(adminName);
        }
        fetch();
        // notify(response.data.message, "Success");
      } catch (error) {
        console.log(error);
      }
    }
    fetchStudentData();
  }, []);

  const [rowToEdit, setRowToEdit] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  ////Pagenation/////
  const rowsPerPage = 5;
  const pagesVisited = pageNumber * rowsPerPage;
  //////////////////

  // const handleDeleteRow = (targetIndex) => {
  //   const newItems = [...rows];
  //   newItems.splice(targetIndex, 1);
  //   setRows(newItems);
  //   axios.get(`http://localhost:8000/deleteTeacher/${targetIndex}`);
  //   notify("Deleted Successfully", "Success");
  // };

  const handleDeleteRow = (teacherId) => {
    const newItems = [...rows];
    const targetIndex = newItems.findIndex((row) => row._id === teacherId);
    if (targetIndex >= 0) {
      newItems.splice(targetIndex, 1);
      setRows(newItems);
      axios.get(`http://localhost:8000/deleteTeacher/${teacherId}`);
      notify("Deleted Successfully", "Success");
    }
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    setRows(
      rows.map((currRow) => {
        if (currRow._id !== rowToEdit) return currRow;
        return newRow;
      })
    );
    notify("Modified Successfully", "Success");
  };

  ////Pagenation/////
  const pageCount = Math.ceil(rows.length / rowsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <Layout
        userImg={AdminAvatar}
        userName={adminName}
        userRoll="Admin"
        sidebarChildren={buttons.map((item, index) => (
          <Btn key={index} name={item.name} path={item.path}>
            {" "}
            {item.icon}{" "}
          </Btn>
        ))}
      >
        {isLoading && <div className="spinner"> </div>}
        <MainTitle img={EditForm} title="Edit Teacher Form" />

        <Table
          state="teacher"
          notify={notify}
          tableName="Edit Teacher"
          rows={rows.slice(pagesVisited, pagesVisited + rowsPerPage)}
          deleteRow={handleDeleteRow}
          editRow={handleEditRow}
        />
        <ReactPaginate
          previousLabel={<BsChevronLeft />}
          nextLabel={<BsChevronRight />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          pageClassName={"backBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />

        {modalOpen && (
          <Modal
            state="teacher"
            notify={notify}
            closeModal={() => {
              setModalOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            //For show values of inputs in white box.
            defaultValue={
              rowToEdit !== null && rows.filter((row) => rowToEdit === row._id)
            }
          />
        )}
      </Layout>
    </>
  );
};

export default InfoTeachers;

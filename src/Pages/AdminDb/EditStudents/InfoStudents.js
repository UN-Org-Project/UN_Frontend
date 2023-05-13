import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "../FormForEdit/Modal";
import { Table } from "../FormForEdit/Table";
import ReactPaginate from "react-paginate";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import axios from "axios";
import ".././pagination.css";
import Layout from "../../../Layout/Layout";
import Btn from "../../../components/SideBar/MenuBtn/Btn";
import { AdminAvatar } from "../../../components/assets";
import {
  FaChalkboardTeacher,
  FaUserEdit,
  FaUserGraduate,
} from "react-icons/fa";
import MainTitle from "../../../components/SectionTitle/MainTitle";
import { Edit } from "@mui/icons-material";

function InfoStudents() {
  // const [infoStd, setinfoStd] = useState([]);
  const [rows, setRows] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function fetchStudentData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/getAllStudents"
        );
        const data = response.data;
        setRows(data);
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

  const handleDeleteRow = (targetIndex) => {
    const newItems = [...rows];
    newItems.splice(targetIndex, 1);
    setRows(newItems);
    axios.get(`http://localhost:8000/deleteStudent/${targetIndex}`);
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  /////////////////////
  function getObjectIndex(arr, ObjId) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id === ObjId) {
        return i;
      }
    }
    return null;
  }
  /////////////////////
  const handleSubmit = (newRow) => {
    setRows(
      rows.map((currRow) => {
        if (currRow._id !== rowToEdit) return currRow;
        return newRow;
      })
    );
  };

  ////Pagenation/////
  const pageCount = Math.ceil(rows.length / rowsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
  //////////////////
  return (
    <>
      <Layout
        userImg={AdminAvatar}
        userName="Ahmad Alhariri"
        userRoll="Admin"
        sidebarChildren={buttons.map((item, index) => (
          <Btn key={index} name={item.name} path={item.path}>
            {" "}
            {item.icon}{" "}
          </Btn>
        ))}
      >
        <MainTitle title="Edit Students Form" />

        <Table
        state= 'student'
          tableName="Edit Students"
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
            state = 'student'
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
}

export default InfoStudents;

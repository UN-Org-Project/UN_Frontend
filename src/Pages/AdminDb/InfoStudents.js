import React from "react";
import { useState, useEffect } from "react";
import { Sidbar } from "../../sections";
import { CardSidbar } from "../../components";
import AdminContent from "../../sections/Content/AdminContent";
import { Link, useNavigate } from "react-router-dom";
import FormStdPage, { Modal } from "./FormForEdit/Modal";
import { Table } from "./FormForEdit/Table";
import { Pagination } from "@mui/material";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsChevronRight, BsChevronLeft, BsPersonCircle } from "react-icons/bs";
import axios from "axios";

import "./pagination.css";
import { light } from "@mui/material/styles/createPalette";

function InfoStudents() {
  const links = [
    { url: "/Admin/AdminStudents", text: "Add Students" },
    { url: "/Admin/AdminTeachers", text: "Add Teacher" },
    { url: "/Admin/InfoStudents", text: "Info Students" },
    { url: "/Admin/InfoTeachers", text: "Info Teachers" },
  ];

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
    axios.get(
      `http://localhost:8000/deleteStudent/${targetIndex}`
    );
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
  //////////////////
  return (
    <>
      <Sidbar links={links}>
        <CardSidbar name="muath Mhawich" role="Admin Dashboard" />
      </Sidbar>
      <AdminContent>
        <div className="App">
          <Table
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
              closeModal={() => {
                setModalOpen(false);
                setRowToEdit(null);
              }}
              onSubmit={handleSubmit}
              //For show values of inputs in white box.
              defaultValue={
                rowToEdit !== null &&
                rows.filter((row) => rowToEdit === row._id)
              }
            />
          )}
        </div>
      </AdminContent>
    </>
  );
}

export default InfoStudents;

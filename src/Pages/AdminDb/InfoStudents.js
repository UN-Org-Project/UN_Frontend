import React from 'react'
import { useState, useEffect } from "react";
import { Sidbar } from '../../sections'
import { CardSidbar } from '../../components'
import AdminContent from '../../sections/Content/AdminContent';
import { Link, useNavigate } from "react-router-dom";
import FormStdPage, { Modal } from './FormForEdit/Modal';
import { Table } from './FormForEdit/Table';
import { Pagination } from '@mui/material';
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsChevronRight, BsChevronLeft, BsPersonCircle } from "react-icons/bs";

import './pagination.css';

function InfoStudents () {

const links = [
    { url: "/Admin/AdminStudents", text: "Add Students" },
    { url: "/Admin/AdminTeachers", text: "Add Teacher" },
    { url: "/Admin/InfoStudents", text: "Info Students" },
    { url: "/Admin/InfoTeachers", text: "Info Teachers" },
];

const [modalOpen, setModalOpen] = useState(false);
const [rows, setRows] = useState([
{
    id:"0",
    studentName: "Mohammad",
    gender: "Male",
    dateOfBirth : "20/6/2010",
    class: "class1",
    adress: "zarqaa",
    name: "ahmad",
    emailAdress: "mohammad@gmial.com",
    telepohoneNumber: '0123456789',
},
{
    id:"1",
    studentName: "Mohammad",
    gender: "Male",
    dateOfBirth : "20/6/2010",
    class: "class1",
    adress: "zarqaa",
    name: "ahmad",
    emailAdress: "mohammad@gmial.com",
    telepohoneNumber: '0123456789',
},
{
    id:"2",
    studentName: "Mohammad",
    gender: "Male",
    dateOfBirth : "20/6/2010",
    class: "class1",
    adress: "zarqaa",
    name: "ahmad",
    emailAdress: "mohammad@gmial.com",
    telepohoneNumber: '0123456789',
},
{
    id:"3",
    studentName: "Mohammad",
    gender: "Male",
    dateOfBirth : "20/6/2010",
    class: "class1",
    adress: "zarqaa",
    name: "ahmad",
    emailAdress: "mohammad@gmial.com",
    telepohoneNumber: '0123456789',
},
{
    id:"4",
    studentName: "Mohammad",
    gender: "Male",
    dateOfBirth : "20/6/2010",
    class: "class1",
    adress: "zarqaa",
    name: "ahmad",
    emailAdress: "mohammad@gmial.com",
    telepohoneNumber: '0123456789',
},
{
    id:"5",
    studentName: "Mohammad",
    gender: "Male",
    dateOfBirth : "20/6/2010",
    class: "class1",
    adress: "zarqaa",
    name: "ahmad",
    emailAdress: "mohammad@gmial.com",
    telepohoneNumber: '0123456789',
},
{
    id:"6",
    studentName: "Mohammad",
    gender: "Male",
    dateOfBirth : "20/6/2010",
    class: "class1",
    adress: "zarqaa",
    name: "ahmad",
    emailAdress: "mohammad@gmial.com",
    telepohoneNumber: '0123456789',
},
{
    id:"7",
    studentName: "Mohammad",
    gender: "Male",
    dateOfBirth : "20/6/2010",
    class: "class1",
    adress: "zarqaa",
    name: "ahmad",
    emailAdress: "mohammad@gmial.com",
    telepohoneNumber: '0123456789',
},
]);


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
    // window.location.reload();
};


const handleEditRow = (idx) => {
    setRowToEdit(idx);
    
    setModalOpen(true);
};

/////////////////////
function getObjectIndex (arr, ObjId ) {
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i].id === ObjId ) {
            return i;
        }
    }
    return null;
}
/////////////////////
const handleSubmit = (newRow) => {
    setRows(
        rows.map((currRow, idx) => {
            if (currRow.id !== rowToEdit) return currRow;
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
            previousLabel={<BsChevronLeft/>}
            nextLabel={<BsChevronRight/>}
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
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
            />
        )}
        </div>
    </AdminContent>
</>
)
}

export default InfoStudents
import React from "react";

import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th className="expand">Name</th>
            <th className="expand">Address</th>
            <th className="expand">Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td className="expand text-center"> 
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <Avatar alt={"kkk"}  />
                  </div>
                  <div className="ml-2">
                    {row.studentName}
                  </div>
                </div>
                </td>
                <td className="expand text-center">{row.adress}</td>
                <td className="expand text-center">{row.class}</td>
                <td className="fit ">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn text-xl"
                      onClick={() => deleteRow(row.id)}
                    />
                    <FaEdit
                      className="edit-btn text-xl text-blue-400"
                      onClick={() => {
                        editRow(row.id)
                        console.log(row.id);
                      }}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
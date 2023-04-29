import React from 'react'
import { Sidbar } from '../../sections';
import { CardSidbar } from '../../components';

const InfoTeachers = () => {

  const links = [
    { url: "/Admin/AdminStudents", text: "Add Students" },
    { url: "/Admin/AdminTeachers", text: "Add Teacher" },
    { url: "/Admin/InfoStudents", text: "Info Students" },
    { url: "/Admin/InfoTeachers", text: "Info Teachers" },
  ];

  return (
    <Sidbar links={links}>
        <CardSidbar name="math Mhawich" role="Admin Dashboard" />
    </Sidbar>
  )
}

export default InfoTeachers
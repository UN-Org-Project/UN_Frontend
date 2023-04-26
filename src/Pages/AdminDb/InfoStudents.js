import React from 'react'
import { useState } from "react";
import { Sidbar } from '../../sections'
import { CardSidbar } from '../../components'
import AdminContent from '../../sections/Content/AdminContent';

const InfoStudents = () => {

const links = [
    { url: "/Admin/AdminStudents", text: "Add Students" },
    { url: "/Admin/AdminTeachers", text: "Add Teacher" },
    { url: "/Admin/InfoStudents", text: "Info Students" },
    { url: "/Admin/InfoTeachers", text: "Info Teachers" },
];

const infoStdI = [
    {id:"0", name: "mohammad" , username: "P-mohammad"},
    {id:"1", name: "Yassen" , username: "P-Yassen"},
    {id:"2", name: "muath" , username: "P-muath"},
    {id:"3", name: "ahmad" , username: "P-ahmad"},
    {id:"4", name: "amjad" , username: "P-amjad"},
    {id:"5", name: "yazan" , username: "P-yazan"},
]

const [infoStd, setinfoStd] = useState(infoStdI);


const handleDelete  = (id) => {
    console.log("Delete")
    const newItems = infoStd.filter(item => item.id !== id);
    setinfoStd(newItems);
}

return (
    <>
    <Sidbar links={links}>
        <CardSidbar name="math Mhawich" role="Admin Dashboard" />
    </Sidbar>
    <AdminContent>


{
    infoStd.length > 0 ? (
        <div class="relative overflow-x-auto p-20">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Student name
                </th>
                <th scope="col" class="px-6 py-3">
                    Username
                </th>
                <th scope="col" class="px-6 py-3">
                    Delete
                </th>
                <th scope="col" class="px-6 py-3">
                    Edit 
                </th>
            </tr>
        </thead>
        <tbody>
            {
            infoStd.map((item)=> {
                return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.name}
                        </th>
                        <td class="px-6 py-4">
                            {item.username}
                        </td>
                        <td class="px-2 pt-2">
                            <button 
                            type="button" 
                            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                            onClick={() => handleDelete (item.id)}
                            >
                                Delete
                            </button>

                        </td>
                        <td class="px-2 pt-2">
                            <button 
                            type="button" 
                            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                            onClick={() => handleNavigat(item)}
                            >
                                Edit
                            </button>

                        </td>
                    </tr>
                )
            })
            }
            
        </tbody>
    </table>
</div>
    ) : (
        <div className='m-14'>
            <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                <span class="font-medium">Info alert!</span> There is no students.
            </div>
        </div>
    )
}

    </AdminContent>
</>
)
}

export default InfoStudents
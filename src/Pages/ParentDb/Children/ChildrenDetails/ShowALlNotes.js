  import React from 'react'
  import { Link , useNavigate} from 'react-router-dom'
  import Note from './Note'
  import { Notes } from './AllNotes'
  const ShowALlNotes = () => {
  
  let Navigate = useNavigate();
  const handleNavigat = (id) => {
    Navigate("/parent/showNotes/Note/"+ id)
  };

  return (<>

  {
  Notes.length < 1 ? (
    <h1>there is no notes</h1>
  ) : (
    <div className="relative overflow-x-auto " >
      <table className="w-5/6 ml-20 table-fixed text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      subject
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Sender
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Display
                  </th>
              </tr>
          </thead>
          <tbody>
              {
                  Notes.map( (item) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.title}
                        </th>
                        <td className="px-6 py-4">
                            {item.sender}
                        </td>
                        <td className="px-6 py-4">
                            {item.date}
                        </td>
                        <td className=" py-4">
                            <button 
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                            onClick={() => handleNavigat(item.id)}
                            >
                              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                  Show
                              </span>
                            </button>
                        </td>
                    </tr>
                    )
                  })
              }
          </tbody>
      </table>
  </div>
  )
  }
  </>)
  }

  export default ShowALlNotes
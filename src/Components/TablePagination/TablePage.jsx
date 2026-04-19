import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './tablepaging.css'

// https://www.youtube.com/watch?v=b86fRVoUVvE
const TablePage = () => {

  const [tableData, setTableData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = tableData?.users?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tableData?.total/ rowsPerPage);

  // https://dummyjson.com/users?limit=5&skip=10&select=firstName,age
  // if select=firstName,age is used then only this data is received in the json
  useEffect(()=>{
    axios.get("https://dummyjson.com/users?limit=0")
    .then((response)=> {
        setTableData(response?.data);
        // console.log(response?.data);
    })
  },[])

  const handlePrev = () => {
    setcurrentPage((prev) => Math.max(prev - 1, 1));
  }

  const handleNext = () => {
    setcurrentPage((next) => Math.min(next + 1, totalPages));
  }

  const handlePageClick = (pageNumber) => {
    setcurrentPage(pageNumber);
  }

  return (
    <div>
      <h1>Table Pagination </h1>
      {
        
      }
      <table border="1">
                <thead>
                  <tr>
                    <th>User Id</th>
                    <th>User title</th>
                    <th>Data Completed?</th>
                  </tr>
                </thead>
                <tbody>
                {
                    currentItems?.map((data, index)=>{
                      return (
                        <tr key={data.id}>
                          <td>{data.id}</td>
                          <td>{data.firstName}</td>
                          <td>{data.lastName}</td>
                        </tr>
                      )
                    })
                }
                </tbody>
            </table>
            <div className='pagination'>
              <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
              {
                // _ is placeholder
                Array.from({length:totalPages}, (_,index) => (
                    <button key={index} onClick={() => handlePageClick(index + 1)} className={currentPage === index+1 ? 'active':''}>{index + 1}</button>
                ))
              }
              <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
            </div>
    </div>
  )
}

export default TablePage

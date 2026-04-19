import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './tablepaging.css'

// https://www.youtube.com/watch?v=b86fRVoUVvE
const ButtonApiCallPaging = () => {

  const [tableData, setTableData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = tableData?.users?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tableData?.total/ rowsPerPage);

  const [skip, setSkip] = useState(0);
  
console.log(skip)
  // https://dummyjson.com/users?limit=5&skip=10&select=firstName,age

  useEffect(()=>{
    axios.get(`https://dummyjson.com/users?limit=10&skip=${(skip)}`)
    .then((response)=> {
        setTableData(response?.data);
        console.log(response?.data);
    })
  },[skip])

  const handlePrev = () => {
    setcurrentPage((prev) => Math.max(prev - 1, 1));
  }

  const handleNext = () => {
    setcurrentPage((next) => Math.min(next + 1, totalPages));
  }

  const handlePageClick = (pageNumber) => {
    setcurrentPage(pageNumber);
    //setSkip(((pageNumber-1) * 10));  // this works
    //setSkip(((currentPage-1) * 10)); // but this does not works

    // This is a React state update timing problem.
    // In React, setState (like setCurrentPage) is asynchronous.
    // currentPage here is still the old value from the previous render, because React hasn’t updated it yet.
    // So you’re effectively setting the same value again, and skip is calculated incorrectly.
    // You’re using the new value directly (pageNumber), so it works.
  }
  // If you want skip to always update when currentPage changes
  // This way, skip is always recalculated after currentPage updates.
  useEffect(() => {
    setSkip((currentPage - 1) * 10);
  }, [currentPage]);

  return (
    <div>
      <h1>Button Click API call Pagination </h1>
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
                    tableData?.users?.map((data, index)=>{
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

export default ButtonApiCallPaging

import React from 'react'
import './pagination.css'

const PageNumbers = ({totalPosts, postPerPage, setcurrentPage,currentPage}) => {
    let pages = [];

    for (let i=1; i < Math.ceil(totalPosts/ postPerPage); i++){
        pages.push(i);
    }

    return (
      <div className='pagination'>
        {
            pages.map((page, index) => {
                return(
                <button key={index} onClick={() => setcurrentPage(page)} 
                className={page == currentPage ? "active" : ""}>{page}</button>
                )
            })
        }
      </div>
    )
}

export default PageNumbers

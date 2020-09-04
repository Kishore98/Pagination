import React from 'react'

function NumberingPage({mypostsPerPage,totalPosts,pageChanger}) {
    const pageNumbers=[];

    for(let i=1;i<=Math.ceil(totalPosts/mypostsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
       <nav>
           <ul className="pagination">
               {
                   pageNumbers.map(number=>(
                       <li key={number} className="page-item">
                           <a onClick={()=> pageChanger(number)} href='#' className="page-link">
                               {number}
                           </a>
                       </li>
                   ))
               }
           </ul>
           
       </nav>
    )
}

export default NumberingPage

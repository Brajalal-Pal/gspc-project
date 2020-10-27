import React from 'react';

const Pagination = ({ currentPage, totalPages }) => {
   const pageNumbers = [];
   for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
   }

   return (
      <nav>
         <ul className="pagination">
            {
               pageNumbers.map(number => (
                  <li key={number} className="page-item">
                     {
                        currentPage === number ?
                           <a href="!#" className="page-link"><b>{number}</b></a> :
                           <a href="!#" className="page-link">{number}</a>
                     }
                  </li>
               ))
            }
         </ul>
      </nav>
   )
}

export default Pagination;
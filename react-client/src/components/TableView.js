import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import moment from "moment";
import Axios from 'axios';

export const TableView = ({ limit }) => {
   let [currentPageNo, setCurrentPageNo] = useState(1);
   //let [totalPages, setTotalPages] = useState(1);
   let [data, setData] = useState([]);

   useEffect(() => {
      Axios.get(`http://localhost:5000/gspc?page=${currentPageNo}&limit=${limit}`)
         .then(resp => {
            setCurrentPageNo(resp.data.currentPage);
            setData(resp.data.results);
            //setTotalPages(resp.data.totalPages);            
         });
   }, [currentPageNo, limit]);

   return (
      <table className="table table-bordered table-hover">
         <thead>
            <tr>
               <th>Date</th><th>Open ($)</th><th>High ($)</th><th>Low ($)</th><th>Close ($)</th><th>Volume</th>
            </tr>
         </thead>
         <tbody>
            {
               data && data.map && data.map((item, i) => {
                  return (<tr key={item.Volume}>
                     <td>
                        {moment(item.Date).format('ll')}
                     </td>
                     <td>
                        <NumberFormat value={item.Open} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                     </td>
                     <td>
                        <NumberFormat value={item.High} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                     </td>
                     <td>
                        <NumberFormat value={item.Low} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                     </td>
                     <td>
                        <NumberFormat value={item.Close} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                     </td>
                     <td>
                        <NumberFormat value={item.Volume} displayType={'text'} thousandSeparator={true} prefix={''} />
                     </td>
                  </tr>);
               })
            }
         </tbody>
      </table>
   )
};
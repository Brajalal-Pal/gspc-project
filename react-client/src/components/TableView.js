import React from 'react';
import NumberFormat from 'react-number-format';
import moment from "moment";

export const TableView = (props) => {
   console.log(props);

   return (
      <table className="table table-bordered table-hover">
         <thead>
            <tr>
               <th>Date</th><th>Open ($)</th><th>High ($)</th><th>Low ($)</th><th>Close ($)</th><th>Volume</th>
            </tr>
         </thead>
         <tbody>
            {
               props && props.data && props.data.map && props.data.map((item, i) => {
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
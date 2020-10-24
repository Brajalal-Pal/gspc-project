import React from 'react';
import NumberFormat from 'react-number-format';
import moment from "moment";

export const CardView = (props) => {

   const view = props.data && props.data.map && props.data.map((item, i) => {
      return (<div className="card" key={item.Volume}>
         <div className="card-header">
            Volume: <NumberFormat value={item.Volume} displayType={'text'} thousandSeparator={true} prefix={''} />
         </div>

         <div className="card-body">
            <h5 className="card-title">Date: {moment(item.Date).format('ll')}</h5>
            <p className="card-text">
               {/* Open: {item.Open}, High: {item.High}, Low: {item.Close} */}
               <div style={{ display: "inline-block", width: "25%" }}>
                  Open:<br />
                  <NumberFormat value={item.Open} displayType={'text'} thousandSeparator={true} prefix={'$'} />
               </div>
               <div style={{ display: "inline-block", width: "25%" }}>
                  High:<br />
                  <NumberFormat value={item.High} displayType={'text'} thousandSeparator={true} prefix={'$'} />
               </div>
               <div style={{ display: "inline-block", width: "25%" }}>
                  Low:<br />
                  <NumberFormat value={item.Low} displayType={'text'} thousandSeparator={true} prefix={'$'} />
               </div>
               <div style={{ display: "inline-block" }}>
                  Close:<br />
                  <NumberFormat value={item.Close} displayType={'text'} thousandSeparator={true} prefix={'$'} />
               </div>
            </p>
         </div>
         {/* <div className="card-footer text-muted">

         </div> */}
      </div>)
   })
   return view;
}
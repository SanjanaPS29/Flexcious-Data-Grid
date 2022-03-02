// import React,{useState,useEffect} from 'react'

//  class EmployeeItemRender extends React.Component {

//     constructor(props){
//         super(props)
//         const PF=900;
//         const {cell,row,grid,level,column} = props;
//         this.state={
//         salary:row.getData()[column.dataField] - PF
//         }
//     }

// render(){
//     return (
//         <div>Salary get : {this.state.salary}</div>
//         )
// }
// }

// export default EmployeeItemRender;

import React from "react";
function EmployeeItemRender(props) {
//   const [salaryGet, setSalaryGet] = useState("");
  const { cell, row, grid, column } = props;

  const salary = row.getData()[column.dataField];

  const PF = 900;
//   const salaryget = salary - PF;
//   setSalaryGet(salaryget);

//   useEffect(() => {}, setSalaryGet);
  return <div>Salary get : {salary - PF}</div>;
}

export default EmployeeItemRender;

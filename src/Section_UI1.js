import React from 'react'
import { ReactDataGrid, ReactDataGridColumn,ReactDataGridColumnLevel,ComboBox} from "flexicious-react-datagrid";
import { CssStyles, ApiStyles } from "flexicious-react-datagrid-styles";


function Section_UI1() {
  return (
    <div>
       <h1 className="page-title">Selection UI 1</h1>

       <ReactDataGrid width={"100%"} forcePagerRow enableFilters enableMultiColumnSort  dataProvider={[
          { id: "1", name: "San", marks1: "8", marks2: "9", rank: "1.11" },
          { id: "2", name: "Yash", marks1: "8", marks2: "9", rank: "11.1" },
          { id: "3", name: "Deep", marks1: "7", marks2: "9", rank: "-111" },
          { id: "4", name: "Jan", marks1: "8", marks2: "9", rank: "2.34" }]}>
        <ReactDataGridColumnLevel enableFilters={false} >
         <ReactDataGridColumn headerText='Employee Name' dataField="employeeName" filterControl="textInput" filterOperation="BeginsWith"/>
        <ReactDataGridColumn headerText="Title" dataField="title" filterControl='TextInput' filterOperation='BeginesWith'/>
        </ReactDataGridColumnLevel>

       </ReactDataGrid>


    </div>
  )
}


export default Section_UI1;
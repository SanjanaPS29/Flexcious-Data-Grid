import React from "react";
import EmployeeItemRender from "./EmployeeItemRender";
import Employee from "./EmployeeDetails";
import {
  ReactDataGrid,
  ReactDataGridColumnLevel,
  ReactDataGridColumn,
  flexiciousNmsp,
} from "flexicious-react-datagrid";
import EmployeeItemEditor from "./EmployeeItemEditor";

function EmployeeData() {
  const getSalary = (item, column) => {
    const PF = 1000;
    const val = item.salary - PF;
    return `Salary get: ${val}`;
  };

  const profileRenderer = ({ row, cell, column, grid, level }) => {
    const image = row.getData()[column.dataField];

    return <img src={image} width="50%" />;
  };


const EmployeeInfoLevelRenderer=({row,column,grid,level,cell})=>{
const data=row.getData()
const style={border:"solid 1px black", margin:"1px"};
  return (
  <fieldset>
<legend>Employee Info</legend>
<table >
<tbody style={{style}}>
  <tr>
    <td style={{style}}>Name: {data.name}</td>
    <td style={{style}}>State :{data.states}</td>
    <td style={{style}}>Phone no:{data.phone}</td>
  </tr>
  <tr>
    <td style={{style}}>Email Id:{data.info.emailId}</td>
    <td style={{style}}>Address : {data.info.address}</td>
    <td style={{style}}>Salary : {data.salary}</td>

  </tr>
</tbody>
</table>
  </fieldset>
  )
}


  return (
    <div>
      <h1>EmployeeData</h1>
      <ReactDataGrid
        width={"90%"}
        enableFooters
        enableFilters
        editable
        dataProvider={JSON.parse(JSON.stringify(Employee))}
      >
        
        <ReactDataGridColumnLevel nextLevelRenderer={EmployeeInfoLevelRenderer}  levelRendererHeight={100}>
          <ReactDataGridColumn type="checkbox" />
          <ReactDataGridColumn
            dataField={"id"}
            headerText={"ID"}
            textAlign={"right"}
            footerLabel={"Count:"}
            filterOperation={"Contains"}
            filterControl={"TextInput"}
            footerOperation={"count"}
          />
          <ReactDataGridColumn dataField={"name"} headerText={"Name"} />

          <ReactDataGridColumn
            dataField={"profile"}
            editable={false}
            enableCellClickRowSelect={false}
            headerText={"Profile"}
            itemRenderer={profileRenderer}
          />

          <ReactDataGridColumn
            dataField={"states"}
            headerText={"State"}
            filterControl={"MultiSelectComboBox"}
            filterComboBoxBuildFromGrid
            filterComboBoxWidth="150"
            editable
            itemEditorManagesPersistence
            useFilterDataProviderForItemEditor
            itemEditor={EmployeeItemEditor}
          />

          <ReactDataGridColumn dataField={"country"} headerText={"country"} />
          <ReactDataGridColumn
            dataField={"phone"}
            headerText={"Phone Number"}
          />
          <ReactDataGridColumn
            dataField={"salary"}
            headerText={"Salary"}
              // labelFunction={getSalary}
            itemRenderer={EmployeeItemRender}
            footerLabel={"Avg :"}
            footerOperation={"average"}
          />
        </ReactDataGridColumnLevel>
      </ReactDataGrid>
    </div>
  );
}

export default EmployeeData;

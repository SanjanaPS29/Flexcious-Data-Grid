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
const borderStyle={border:"solid 1px black"};
  return (
  <fieldset>
<legend>Employee Info</legend>
<table>
<tbody style={borderStyle}>
  <tr>
    <td style={borderStyle}>Name: {data.designation}</td>
    <td style={borderStyle}>State :{data.project}</td>
  
  </tr>
  <tr>
    <td style={borderStyle}>Email Id:{data.emailId}</td>
    <td style={borderStyle}>Address : {data.address}</td>
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
        <ReactDataGridColumnLevel childrenField={"children"}>
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
        <ReactDataGridColumnLevel nextLevelRenderer={EmployeeInfoLevelRenderer}  levelRendererHeight={100}>
        <ReactDataGridColumn dataField={"designation"} headerText={"Designation"}/>
        <ReactDataGridColumn dataField={"project"} headerTExt={"Project"}/>
        </ReactDataGridColumnLevel>
        </ReactDataGridColumnLevel>
      </ReactDataGrid>
    </div>
  );
}

export default EmployeeData;

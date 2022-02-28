import React from 'react';
import EmployeeItemRender from './EmployeeItemRender';
import { ReactDataGrid,ReactDataGridColumnLevel,ReactDataGridColumn } from 'flexicious-react-datagrid';

 function EmployeeData() {
  return (
    <div>
   <h1>EmployeeData</h1>
<ReactDataGrid  width={"90%"} enableFooters enableFilters dataProvider={[
{id:'1',name:'jhon',states:{name:'Karnataka',code:"KA"},country:"India",phone:"7650079586" , salary:"300000" },
{id:'2',name:'RM',states:{name:'AndraPradesh',code:"AP"},country:"India",phone:"7659898586" , salary:"350000"},
{id:'3',name:'V',states:{name:'Kerala',code:"KR"},country:"India",phone:"7659877586" , salary:"10000"},
{id:'4',name:'Jhoop',states:{name:'Karnataka',code:"KA"},country:"India",phone:"7659875686" , salary:"90000"},
{id:'5',name:'Kelvin',states:{name:'Tamil Nadu',code:"TA"},country:"India",phone:"7659811586" , salary:"95000"}
]}>

<ReactDataGridColumnLevel>
<ReactDataGridColumn  dataField={"id"} headerText={"ID"} textAlign={"right"} footerLabel={"Count:"} filterOperation={"Contains"} filterControl={"TextInput"} footerOperation={"count"} />
<ReactDataGridColumn dataField={"name"} headerText={"Name"} />
<ReactDataGridColumn dataField={"states.name"} headerText={"State"} filterControl={"ComboBox"} filterComboBoxBuildFromGrid/>
<ReactDataGridColumn dataField={"country"} headerText={"country"}  />
<ReactDataGridColumn dataField={"phone"} headerText={"Phone Number"} />
<ReactDataGridColumn dataField={"salary"} headerText={"Salary"} itemRenderer={EmployeeItemRender} footerLabel={"Avg :"} footerOperation={"average"}/>

</ReactDataGridColumnLevel>
</ReactDataGrid>
    </div>
  )
}


export default EmployeeData;
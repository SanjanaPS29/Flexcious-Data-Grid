import { ApiStyles } from 'flexicious-react-datagrid-styles';
import {
    ReactDataGrid,
    ReactDataGridColumn,
    ReactDataGridColumnLevel,
    ReactDataGridColumnGroup,
    DatePicker,
    flexiciousNmsp
  } from "flexicious-react-datagrid";
import React from 'react'

 function ItemEditors() {
  return (
    <div>
        <h1>Item Editors</h1>
        <ReactDataGrid width={"100%"} editable enableFilters enableFooters horizontalScrollPolicy="on" preferencePersistenceKey="editableCells" dataProvider={[
          {id:"10012",legalName:"Abbott Laborator",headquaterAddress:{line1:"206 West Rd",line2:"Suit #555",city:{name:"Barrss"},state:{name:"New Jersey"},country:{name:"United States"}},addedDate:"Dec 22,2016",annualRevenue:"58,882",numEmployee:"55,103",earningsPerShare:"4.01",lastStockPrice:"24.56"},
          {id:"10012",legalName:"Abbott Laborator",headquaterAddress:{line1:"206 West Rd",line2:"Suit #555",city:{name:"Albany"},state:{name:"Ohio"},country:{name:"United States"}},addedDate:"Dec 22,2016",annualRevenue:"58,882",numEmployee:"55,103",earningsPerShare:"4.01",lastStockPrice:"24.56"},
          {id:"10012",legalName:"Abbott Laborator",headquaterAddress:{line1:"206 West Rd",line2:"Suit #555",city:{name:"Springfield"},state:{name:"Penn"},country:{name:"United States"}},addedDate:"Dec 22,2016",annualRevenue:"58,882",numEmployee:"55,103",earningsPerShare:"4.01",lastStockPrice:"24.56"},
          {id:"10012",legalName:"Abbott Laborator",headquaterAddress:{line1:"206 West Rd",line2:"Suit #555",city:{name:"Grand Rapids"},state:{name:"New York"},country:{name:"United States"}},addedDate:"Dec 22,2016",annualRevenue:"58,882",numEmployee:"55,103",earningsPerShare:"4.01",lastStockPrice:"24.56"},
          {id:"10012",legalName:"Abbott Laborator",headquaterAddress:{line1:"206 West Rd",line2:"Suit #555",city:{name:"Stroundsburgh"},state:{name:"NOrth Carolina"},country:{name:"United States"}},addedDate:"Dec 22,2016",annualRevenue:"58,882",numEmployee:"55,103",earningsPerShare:"4.01",lastStockPrice:"24.56"}
        ]}>


         <ReactDataGridColumn type="checkbox"/>
         <ReactDataGridColumn dataField="id" headerText="ID" filterControl="TextInput" editable truncateToFit/>
         <ReactDataGridColumn dataField="legalName" headerText="Legal Name" truncateToFit editable/>
         <ReactDataGridColumn dataField="headquaterAddress.line1" headerText="Address Line 1" footerLabel="Count:" footerOperation="count" editable/>
         <ReactDataGridColumn dataField="headquaterAddress.line2" headerText="Address Line 2"/>
         <ReactDataGridColumn dataField="headquaterAddress.city.name" headerText="City" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid filterComboBoxWidth="150" editable/>
         <ReactDataGridColumn dataField="headquaterAddress.state.name" headerText="State" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid filterComboBoxWidth="150" editable />


         <ReactDataGridColumn dataField="addedDate" headerText="Added Date" itemEditor={DatePicker} editable editorDataField="selectedDate"/>
         <ReactDataGridColumn dataField="headquaterAddress.country.name" headerText="Country" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid filterComboBoxWidth="150" editable={false}/>
         <ReactDataGridColumn dataField="annualRevenue" headerText="Annual Revenue" textAlign="right" headerAlign="center" footerLabel="Avg:" footerOperation="average" footerAlign="left"
         footerOperationPrecision={2}  editable/>
         <ReactDataGridColumn dataField="earningsPerShare" headerText="ESP" textAlign="right" footerLabel="Avg:" footerOperation="average" editable/>
         <ReactDataGridColumn dataField="lastStockPrice" headerText="Stock Price" textAlign="right" footerLabel="Avg:" footerOperation="average" footerOpearationPrecision={2} editable />
        </ReactDataGrid>
    </div>
  )
}


export default ItemEditors;
import { ApiStyles } from "flexicious-react-datagrid-styles";
import {
  ReactDataGrid,
  ReactDataGridColumn,
  ReactDataGridColumnLevel,
  DatePicker,
  flexiciousNmsp
} from "flexicious-react-datagrid";
import React from "react";
import ComboBoxItemEditor from './ComboBoxItemEditor';


function ItemEditors() {

  const getRowDisabled=(cell,data)=>{
   if(data.legalName === "Adobe"){
    return true;
   }
   return false;
  }

  const itemEditValueCommitHandler=(evt)=>{
   if(evt.column.dataField === "headquaterAddress.city.name"){
     var txt=evt.itemEditor["text"];
     var found=false;
     var items=flexiciousNmsp.SystemContants.cities;
    console.log(items);
     for(var i=0;i<items.length;i++){
      var city=items[i];
      if(city.name === txt){
        evt.item.headquarterAddress.city=city;
        found=true;
        break;
      }
    }
    if(!found){
      window.alert("Invalid city Entered" +txt);
    }
   evt.preventDefault();
   }
  }

  return (
    <div>
      <h1>Item Editors</h1>
      <ReactDataGrid
        width={"100%"}
        editable
        enableFilters
        enableFooters
        horizontalScrollPolicy="on"
        enablePreferencePersistence 
        headerRowHeight={100}
        itemEditValueCommit={itemEditValueCommitHandler} 
        preferencePersistenceKey="editableCells"
        rowDisabledFunction={getRowDisabled}
        dataProvider={[
          {
            id: "10012",
            legalName: "Abbott Laborator",
            headquaterAddress: {
              line1: "206 West Rd",
              line2: "Suit #555",
              city: { name: "Barrss" },
              state: { name: "New Jersey" ,code:'NJ'},
              country: { name: "United States" },
            },
            addedDate: "Dec 22,2016",
            annualRevenue: "58,882",
            numEmployee: "55,103",
            earningsPerShare: "4.01",
            lastStockPrice: "24.56",
          },
          {
            id: "10012",
            legalName: "Adobe",
            headquaterAddress: {
              line1: "206 West Rd",
              line2: "Suit #555",
              city: { name: "Albany" },
              state: { name: "Ohio" ,code:"OH" },
              country: { name: "United States" },
            },
            addedDate: "Dec 22,2016",
            annualRevenue: "58,882",
            numEmployee: "55,103",
            earningsPerShare: "4.01",
            lastStockPrice: "24.56",
          },
          {
            id: "10012",
            legalName: "Adobe Systems",
            headquaterAddress: {
              line1: "206 West Rd",
              line2: "Suit #",
              city: { name: "Springfield" },
              state: { name: "Penn" , code:'p' },
              country: { name: "United States" },
            },
            addedDate: "Dec 22,2016",
            annualRevenue: "58,882",
            numEmployee: "55,103",
            earningsPerShare: "4.01",
            lastStockPrice: "24.56",
          },
          {
            id: "10012",
            legalName: "Abbott Laborator",
            headquaterAddress: {
              line1: "206 West Rd",
              line2: "Suit #5",
              city: { name: "Grand Raids" },
              state: { name: "New York" , code:'NY'},
              country: { name: "United States" },
            },
            addedDate: "Dec 22,2016",
            annualRevenue: "58,882",
            numEmployee: "55,103",
            earningsPerShare: "4.01",
            lastStockPrice: "24.56",
          },
          {
            id: "10012",
            legalName: "Abbott Laborator",
            headquaterAddress: {
              line1: "206 West Rd",
              line2: "Sui#555",
              city: { name: "Stroundsburgh" },
              state: { name: "North Carolina" , code:'NC' },
              country: { name: "United States" },
            },
            addedDate: "Dec 22,2016",
            annualRevenue: "58,882",
            numEmployee: "55,103",
            earningsPerShare: "4.01",
            lastStockPrice: "24.56",
          },
        ]}
      >
          <ReactDataGridColumnLevel   rowHeight={55}>
        <ReactDataGridColumn type="checkbox" />
        <ReactDataGridColumn
          dataField="id"
          headerText="ID"
          filterControl="TextInput"
          editable
          
          truncateToFit
        
        />
        <ReactDataGridColumn
          dataField="legalName"
          headerText="Legal Name"
          truncateToFit
          editable
        />
        <ReactDataGridColumn
          dataField="headquaterAddress.line1"
          headerText="Address Line 1"
          footerLabel="Count:"
          footerOperation="count"
          editable
        />
        <ReactDataGridColumn
          dataField="headquaterAddress.line2"
          headerText="Address Line 2"
        />
        <ReactDataGridColumn
          dataField="headquaterAddress.city.name"
          headerText="City"
          filterControl="MultiSelectComboBox"
          filterComboBoxBuildFromGrid
          filterComboBoxWidth="150"
          editable
        />
        <ReactDataGridColumn
          dataField="headquaterAddress.state.name"
          headerText="State"
          filterControl="MultiSelectComboBox"
          filterComboBoxBuildFromGrid
          filterComboBoxWidth="150"
          editable
           itemEditorManagesPersistence 
           useFilterDataProviderForItemEditor
           enableCellClickRowSelect={false}
          itemEditor={ComboBoxItemEditor}
        />

        <ReactDataGridColumn
          dataField="addedDate"
          headerText="Added Date"
          itemEditor={DatePicker}
          editable
          editorDataField="selectedDate"
        />
        <ReactDataGridColumn
          dataField="headquaterAddress.country.name"
          headerText="Country"
          filterControl="MultiSelectComboBox"
          filterComboBoxBuildFromGrid
          filterComboBoxWidth="150"
          editable={false}
        />
        <ReactDataGridColumn
          dataField="annualRevenue"
          headerText="Annual Revenue"
          textAlign="right"
          headerAlign="center"
          footerLabel="Avg:"
          footerOperation="average"
          footerAlign="left"
          footerOperationPrecision={2}
          editable
        />
        <ReactDataGridColumn
          dataField="earningsPerShare"
          headerText="ESP"
          textAlign="right"
          footerLabel="Avg:"
          footerOperation="average"
          editable
        />
        <ReactDataGridColumn
          dataField="lastStockPrice"
          headerText="Stock Price"
          textAlign="right"
          footerLabel="Avg:"
          footerOperation="average"
          footerOpearationPrecision={2}
          editable
        />
        </ReactDataGridColumnLevel>
      </ReactDataGrid>
    </div>
  );
}

export default ItemEditors;




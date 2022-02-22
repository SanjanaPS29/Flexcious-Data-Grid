import React from "react";
import { ReactDataGrid, ReactDataGridColumn,ReactDataGridColumnLevel,ComboBox} from "flexicious-react-datagrid";
import { CssStyles, ApiStyles } from "flexicious-react-datagrid-styles";

function Simple() {
  return (
    <div>
      <h1>Student Marks Sheet</h1>
      <ReactDataGrid
        styles={ApiStyles.getThemeStyles("officeblue")}
        width={"95%"}
        forcePagerRow={true}
        enableExport={true}
        enablePrint={true}
        enablePreferencePersistence={true}
        horizontalScrollPolicy={"off"}
        footerDrawTopBorder
        enableFilters={true}
        enableFooters={true}
        editable
        enableDrop
        enablePdf
        showSpinnerOnFilterPageSort
        enableMultiColumnSort
        useCompactPreferences
        dataProvider={[
          { id: "1", name: "San", marks1: "8", marks2: "9", rank: "1.11" },
          { id: "2", name: "Yash", marks1: "8", marks2: "9", rank: "11.1" },
          { id: "3", name: "Deep", marks1: "7", marks2: "9", rank: "-111" },
          { id: "4", name: "Jan", marks1: "8", marks2: "9", rank: "2.34" },
          { id: "5", name: "Prati", marks1: "8", marks2: "9", rank: "22.2" },
          { id: "6", name: "San", marks1: "8", marks2: "9", rank: "1.11" },
          { id: "7", name: "Yash", marks1: "8", marks2: "9", rank: "11.1" },
          { id: "8", name: "Deep", marks1: "7", marks2: "9", rank: "-111" },
          { id: "9", name: "Jan", marks1: "8", marks2: "9", rank: "2.34" },
          { id: "10", name: "Prati", marks1: "8", marks2: "9", rank: "22.2" },
          { id: "11", name: "San", marks1: "8", marks2: "9", rank: "1.11" },
          { id: "12", name: "Yash", marks1: "8", marks2: "9", rank: "11.1" },
          { id: "13", name: "Deep", marks1: "7", marks2: "9", rank: "-111" },
          { id: "14", name: "Jan", marks1: "8", marks2: "9", rank: "2.34" },
          { id: "15", name: "Prati", marks1: "8", marks2: "9", rank: "22.2" },
          { id: "16", name: "San", marks1: "8", marks2: "9", rank: "1.11" },
          { id: "17", name: "Yash", marks1: "8", marks2: "9", rank: "11.1" },
          { id: "18", name: "Deep", marks1: "7", marks2: "9", rank: "-111" },
          { id: "19", name: "Jan", marks1: "8", marks2: "9", rank: "2.34" },
          { id: "20", name: "Prati", marks1: "8", marks2: "9", rank: "22.2" },
          { id: "20", name: "Prati", marks1: "8", marks2: "9", rank: "22.2" },
          { id: "20", name: "Prati", marks1: "8", marks2: "9", rank: "22.2" },
        ]}
      >
          <ReactDataGridColumnLevel selectedKeyField={'id'} enablePaging pageSize={3} >
   
        <ReactDataGridColumn
          dataField="id"
          id={'no'}
          headerText="ID"
          filterControl="TextInput"
          filterOperation="Contains"
          footerOperation="count"
          filterWaterMark={'Search'}
          enableFilterAutoComplete
          sortNumeric
        />
         <ReactDataGridColumn type={"checkbox"} />
        <ReactDataGridColumn
          dataField="name"
          headerText="Name"
          id='name'
          filterControl="MultiSelectComboBox"
          filterOperation="Contains"
          filterComboBoxWidth='150'
          filterComboBoxBuildFromGrid 
          headerWordWrap truncateToFit
        />
        <ReactDataGridColumn
          dataField="marks1"
          headerText="Maths"
          id='marks1'
          filterControl="MultiSelectComboBox"
          filterOperation="Contains"
          footerOperation="sum"
          filterComboBoxWidth='150'
          filterComboBoxBuildFromGrid 
        />
        <ReactDataGridColumn
          dataField="marks2"
          headerText="Science"
          filterControl="TextInput"
          filterOperation="Contains"
          footerOperation="sum"
          id='marks2'
        />
        <ReactDataGridColumn dataField="rank" id='rank'  headerWordWrap truncateToFit/>
        <ReactDataGridColumn headerText={""} excludeFromSettings excludeFromPrint excludeFromExport paddingLeft={"0"} paddingRight={"0"} width={1} minWidth={1} />
        </ReactDataGridColumnLevel>
      </ReactDataGrid>
    </div>
  );
}

export default Simple;

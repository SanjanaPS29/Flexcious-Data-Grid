import React from "react";
import {
  ReactDataGrid,
  ReactDataGridColumn,
  ReactDataGridColumnLevel,
  ReactDataGridColumnGroup,
} from "flexicious-react-datagrid";
import { CssStyles, ApiStyles } from "flexicious-react-datagrid-styles";

function NestedData() {
  return (
    <div>
      <h1>Nested Data</h1>
      <ReactDataGrid
        styles={ApiStyles.getThemeStyles("officeblue")}
        minWidth={"600px"}
        width={"100%"}
        enablePreferencePersistence
        enableExport
        doubleClickEnabled
        preferencePersistenceKey={"nesteddata"}
        showSpinnerOnFilterPageSort
        horizontalScrollPolicy={"auto"}
        enableSelectionCascade={false}
        
        dataProvider={[
          {
            date: "01/27/2017",
            id: "101",
            city: "SpringFiled",
            state: "North Carolina",
            country: "united States",
            annualRevenue: "23343",
            NumEmp: "3443",
            esp: "1.2",
            children: [
              {
                id: "5001",
                lineItemDescription: "PROJECT",
                lineItemAmount: "12223",
                invoice: [
                  {
                    invoiceNum: "2001",
                    Invoiceamount: "56,433",
                    invoiceDate: "Jan 4,2015",
                  },
                  {
                    invoiceNum: "2003",
                    Invoiceamount: "64,232",
                    invoiceDate: "Jun 5,2016",
                  },
                ],
              },
            ],
          },
          {
            date: "01/2/2016",
            id: "102",
            city: "SpringFiled",
            state: "North Carolina",
            country: "united States",
            annualRevenue: "23343",
            NumEmp: "3443",
            esp: "1.2",
          },
          {
            date: "01/2/2016",
            id: "103",
            city: "SpringFiled",
            state: "North Carolina",
            country: "united States",
            annualRevenue: "23343",
            NumEmp: "3443",
            esp: "1.2",
          },
          {
            date: "01/2/2016",
            id: "104",
            city: "SpringFiled",
            state: "North Carolina",
            country: "united States",
            annualRevenue: "23343",
            NumEmp: "3443",
            esp: "1.2",
          },
          {
            date: "01/2/2016",
            id: "105",
            city: "SpringFiled",
            state: "North Carolina",
            country: "united States",
            annualRevenue: "23343",
            NumEmp: "3443",
            esp: "1.2",
          },
        ]}
      >
        {/* <ReactDataGridColumnLevel enableFilters enablePaging initialSortField={"id"} pageSize={20} childrenField={"deals"}  enableFooters selectedKeyField={"id"} > */}
        <ReactDataGridColumnLevel
          enableFilters
          enablePaging
          initialSortField={"id"}
          pageSize={2}
          childrenField={"children"}
          enableFooters
          selectedKeyField={"id"}
        >
          <ReactDataGridColumn
            editable
            id={"date"}
            dataField={"date"}
            headerText={"Date Added"}
            filterControl={"DateComboBox"}
          />
          <ReactDataGridColumn type={"checkbox"} />
          <ReactDataGridColumn
            editable
            id={"colid"}
            dataField={"id"}
            headerText={"ID"}
            filterControl={"TextInput"}
          />
          <ReactDataGridColumnGroup headerText={"Address"}>
            <ReactDataGridColumn
              id={"colCity"}
              dataField={"city"}
              headerText={"City"}
              filterControl={"ComboBox"}
              filterComboBoxBuildFromGrid
              filterComboBoxWidth={"150"}
            />
            <ReactDataGridColumn
              id={"colState"}
              dataField={"state"}
              headerText={"State"}
              filterControl={"MultiSelectComboBox"}
              filterComboBoxBuildFromGrid
              filterComboBoxWidth={"150"}
            />
            <ReactDataGridColumn
              id={"colCountry"}
              dataField={"country"}
              headerText={"Country"}
              filterControl={"MultiSelectComboBox"}
              filterComboBoxBuildFromGrid
              filterComboBoxWidth={"150"}
            />
          </ReactDataGridColumnGroup>

          <ReactDataGridColumnGroup headerText={"Financials"}>
            <ReactDataGridColumn
              id={"colAnnRev"}
              editable
              dataField={"annualRevenue"}
              headerText={"Annual Revenue"}
              textAlign={"right"}
              headerAlign={"center"}
              footerOperation={"average"}
              footerLabel={"Avg:"}
              footerAlign={"center"}
              footerOperationRecision={2}
            />
            <ReactDataGridColumn
              id={"colNumEmp"}
              editable
              dataField={"NumEmp"}
              headerText={"Num Employee"}
              textAlign={"right"}
              footerLabel={"Avg:"}
              footerOperation={"average"}
            />
            <ReactDataGridColumn
              id={"colEsp"}
              editable
              dataField={"esp"}
              headerText={"ESP"}
              textAlign={"right"}
              footerLabel={"Avg:"}
              footerOperation={"average"}
              footerOperationPrecision={2}
            />
          </ReactDataGridColumnGroup>
          <ReactDataGridColumnLevel
            childrenField={"invoice"}
            enablePaging={false}
            pageSize={3}
            selectedKeyField={"id"}
            nestIndent={30}
          >
            <ReactDataGridColumn type={"checkbox"} />
            <ReactDataGridColumn
              dataField={"lineItemDescription"}
              headerText={"lineItem Description"}
              footerLabel={"Count:"}
              footerOperation={"count"}
              footerAlign={"center"}
            />
            <ReactDataGridColumn
              dataField={"lineItemAmount"}
              headerText={"lineItem Amount"}
              footerLabel={"Count:"}
              footerOperation={"count"}
              footerAlign={"center"}
            />

            <ReactDataGridColumnLevel
              enableFooters
              selectedKeyField={"invoiceNum"}
              nestIndent={30}
            >
              <ReactDataGridColumn type={"checkbox"} />
              <ReactDataGridColumn
                dataField={"Invoiceamount"}
                headerText={"Invoiceamount"}
                footerLabel={"Count:"}
                footerOperation={"count"}
                footerAlign={"center"}
              />
              <ReactDataGridColumn
                dataField={"invoiceDate"}
                headerText={"invoiceDate"}
                footerLabel={"Count:"}
                footerOperation={"count"}
                footerAlign={"center"}
              />
            </ReactDataGridColumnLevel>
          </ReactDataGridColumnLevel>
        </ReactDataGridColumnLevel>
      </ReactDataGrid>
    </div>
  );
}

export default NestedData;

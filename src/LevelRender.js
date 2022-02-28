import React from "react";
import {
  ReactDataGrid,
  ReactDataGridColumn,
  ReactDataGridColumnLevel,
  ReactDataGridColumnGroup,
  CurrencyFormatter,
  UIUtils,
} from "flexicious-react-datagrid";
import { CssStyles, ApiStyles } from "flexicious-react-datagrid-styles";
export default function LevelRender() {
  const NextLevelRenderer = ({ cell, row, column, level, grid }) => {
    const blackBorder = { border: "solid 1px #cccccc" };
    const val = row.getData();
    console.log(val);
    return (
      <fieldset>
        <legend>Invoice Information</legend>
        <table style={{ width: "100%" }}>
          <tbody style={{ blackBorder }}>
            <tr>
              <td> Invoice Number: {val.invoiceNum} </td>
              <td>Invoice date: {val.invoiceDate}</td>
              <td>Due date: {val.dueDate}</td>
            </tr>
            <tr>
              <td>Deal Amount: {UIUtils.formatCurrency(val.deal.dealAmt)}</td>
              <td>Deal Description: {val.deal.dealDesp}</td>
              <td>Deal Status: {val.deal.dealStatus}</td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    );
  };

  return (
    <div>
      <h1>LevelRender</h1>
      <ReactDataGrid
        width={"100%"}
        enablePrint
        enablePreferencePersistence
        eanbleFooters
        enableDrillDown
        enableExport
        enableCopy
        preferencePersistenceKey="levelRenderers"
        dataProvider={[
          {
            id: "201",
            legalName: "452 West St",
            line1: "539 Gardner",
            city: "Spring",
            state: "New York",
            country: "United states",
            annualRevenue: "56,454",
            numEmp: "560656",
            ESP: "4.34",
            invoice: [
              {
                invoiceNum: "12",
                invoiceDate: "03/03/1990",
                dueDate: "13/04/1998",
                deal: {
                  dealAmt: "1232",
                  dealDesp: "Project 1",
                  dealStatus: "Approved",
                },
              },
            ],
          },
          {
            id: "202",
            legalName: "452 West St",
            line1: "539 Gardner",
            city: "Spring",
            state: "New Jersey",
            country: "United states",
            annualRevenue: "56,454",
            numEmp: "560656",
            ESP: "4.34",
            invoice: [
              {
                invoiceNum: "12",
                invoiceDate: "12/03/1995",
                dueDate: "13/04/1998",
                deal: {
                  dealAmt: "1232",
                  dealDesp: "Project 1",
                  dealStatus: "Pending",
                },
              },
            ],
          },
          {
            id: "203",
            legalName: "452 West St",
            line1: "539 Gardner",
            city: "Spring",
            state: "New York",
            country: "United states",
            annualRevenue: "56,454",
            numEmp: "560656",
            ESP: "4.34",
            invoice: [
              {
                invoiceNum: "12",
                invoiceDate: "12/03/1995",
                dueDate: "13/04/1998",
                deal: {
                  dealAmt: "1232",
                  dealDesp: "Project 1",
                  dealStatus: "Approved",
                },
              },
            ],
          },
          {
            id: "203",
            legalName: "452 West St",
            line1: "539 Gardner",
            city: "Spring",
            state: "Michigan",
            country: "United states",
            annualRevenue: "56,454",
            numEmp: "560656",
            ESP: "4.34",
            invoice: [
              {
                invoiceNum: "12",
                invoiceDate: "12/03/1995",
                dueDate: "13/04/1998",
                deal: {
                  dealAmt: "1232",
                  dealDesp: "Project 1",
                  dealStatus: "Approved",
                },
              },
            ],
          },
        ]}
      >
        <ReactDataGridColumnLevel
          enableFilters
          enablePaging
          pageSize={4}
          childrenField={"invoice"}
          enableFooters
          selectedKeyField="id"
        >
          <ReactDataGridColumn type="checkbox" />
          <ReactDataGridColumn
            dataField={"legalName"}
            enableCellClickRowSelect={false}
            headerText={"Legal Name"}
            filterOperation={"Contains"}
            filterControl={"TextInput"}
          />
          <ReactDataGridColumn dataField={"line1"} headerText={"Line1"} />
          <ReactDataGridColumnGroup
            headerText={"Address"}
           
          >
            <ReactDataGridColumn dataField={"city"} headerText={"City"} />
            <ReactDataGridColumn
              dataField={"state"}
              headerText={"State"}
              filterControl={"MultiSelectComboBox"}
              filterComboBoxBuildFromGrid
              filterComboBoxWidth="150"
            />
            <ReactDataGridColumn
              dataField={"country"}
              headerText={"Country"}
              filterControl={"MultiSelectComboBox"}
              filterComboBoxBuildFromGrid
              filterComboBoxWidth="150"
            />
          </ReactDataGridColumnGroup>
          <ReactDataGridColumn
            dataField={"annualRevenue"}
            headerText={"Annual Revenue"}
            footerFormatter={CurrencyFormatter}
            footerLabel={"Avg:"}
            footerOperation="average"
          />
          <ReactDataGridColumn
            dataField={"numEmp"}
            headerText={"Number of Employee"}
            footerLabel={"Count:"}
            footerOperation="count"
          />
          <ReactDataGridColumn dataField={"ESP"} headerText={"ESP"} />
          <ReactDataGridColumnLevel
            nextLevelRenderer={NextLevelRenderer}
            levelRendererHeight="80"
            enableFooters
        
            selectedKeyField="id"
          >
            <ReactDataGridColumn type={"checkbox"} />
            <ReactDataGridColumn
              dataField="invoiceNum"
              headerText={"Invoice Number"}
              footerLabel={"Count:"}
              footerOperation="count"
              footerAlign="center"
            />
            <ReactDataGridColumn
              dataField="invoiceDate"
              headerText={"Date"}
              labelFunction={UIUtils.dataGridFormatDateLabelFunction}
            />
            <ReactDataGridColumn dataField="dueDate" headerText={"DueDate"} />
          </ReactDataGridColumnLevel>
        </ReactDataGridColumnLevel>
      </ReactDataGrid>
    </div>
  );
}

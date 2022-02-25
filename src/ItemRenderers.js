import React from "react";
import {
  ReactDataGrid,
  ReactDataGridColumn,
  ReactDataGridColumnGroup,
  ReactDataGridColumnLevel,
} from "flexicious-react-datagrid";
import { CssStyles, ApiStyles } from "flexicious-react-datagrid-styles";
import CheckBoxItemRenderer from "./CheckBoxItemRenderer";

function ItemRenderers() {
  const getStockChartHTML = (item, column) => {
    //here, we use the label function to come up with custom html for the cell and assocate this function to the column via the labelfunction property (See below)
    return "<img src=" + item.stockPrice + " width='50%'/>";
  };

  const TextInputRenderer = ({ cell, row, column, level, grid }) => {
    return (
      <textarea
        id="age"
        value={row.getData()[column.dataField]}
        className="text-field-short"
        readOnly
      />
    );
  };

  const getWebsiteLink = (item, column) => {
    console.log("aaaaa");
    const c = (
      <a href={"http://www.google.com?q=" + item.website} target="_blank">
        {item.website}
      </a>
    );
    // const c1 =
    //   "<a href=http://www.google.com?q=" +
    //   item.website +
    //   "target='_blank'>" +
    //   item.website +
    //   "</a>";
    return c;

    //    return "<a href='http://www.google.com?q=" + item.website + "' target='_blank'>" + item.website + "</a>";
  };
  return (
    <div>
      <h1>ItemRenders</h1>
      <ReactDataGrid
        styles={ApiStyles.getThemeStyles("officeblue")}
        width={"100%"}
        enablePreferencePersistence
        enableExport
        enableFilters
        horizontalScrollPolicy={"off"}
        enableFooters
        dataProvider={[
          {
            id: "20800",
            editableName: "3M cO",
            website: "3MC",
            stockPrice: "/image/stock.jfif",
            isActive: false,
            deals: [
              {
                dealDesp: "Project#123",
                dealAmt: "12340",
                dealDate: "oct 29,2015",
              },
              {
                dealDesp: "Project#123",
                dealAmt: "12340",
                dealDate: "oct 29,2015",
              },
            ],
          },
          {
            id: "20800",
            editableName: "AFLAC Inc",
            website: "AFLAC",
            stockPrice: "/image/stock.jfif",
            isActive: false,
            deals: [
              {
                dealDesp: "Project#123",
                dealAmt: "12340",
                dealDate: "oct 29,2015",
              },
              {
                dealDesp: "Project#123",
                dealAmt: "12340",
                dealDate: "oct 29,2015",
              },
            ],
          },

          {
            id: "20800",
            editableName: "AK Steel Holding",
            website: "AKSteel",
            stockPrice: "./image/stock3.png",
            isActive: false,
            deals: [
              {
                dealDesp: "Project#123",
                dealAmt: "12340",
                dealDate: "oct 29,2015",
              },
            ],
          },

          {
            id: "20800",
            editableName: "AT&T Inc",
            website: "AT&T",
            stockPrice: "./image/stock3.png",
            isActive: false,
            deals: [
              {
                dealDesp: "Project#123",
                dealAmt: "12340",
                dealDate: "oct 29,2015",
              },
            ],
          },

          {
            id: "20800",
            editableName: "Abode System",
            website: "Abode",
            stockPrice: "./image/stock1.jfif",
            isActive: false,
            deals: [
              {
                dealDesp: "Project#123",
                dealAmt: "12340",
                dealDate: "oct 29,2015",
              },
            ],
          },
        ]}
      >
        <ReactDataGridColumnLevel
          enableFilters
          enablePaging
          initialSortField={"id"}
          pageSize={3}
          childrenField={"deals"}
          eanbleFooters
          rowHeight={55}
          enableFilters
          preferencePersistenceKey="itemRenderers"
        >
          <ReactDataGridColumn
            dataField={"id"}
            headerText={"ID"}
            filterControl={"TextInput"}
            enableCellClickRowSelect={false}
            useUnderLine
            useHandCursor
          />
          <ReactDataGridColumn
            editable
            dataField={"editableName"}
            itemRenderer={TextInputRenderer}
            headerText={"Editable Name"}
            enableCellClickRowSelect={false}
            filterControl={"TextInput"}
            filterOperation="BeginsWith"
          />
          <ReactDataGridColumn
            labelFunction={getWebsiteLink}
            headerText={"WebSite"}
            enableCellClickRowSelect={false}
            enableCellClickRowSelect={false}
            useHandCursor
            useUnderLine
          />
          <ReactDataGridColumn
            dataField={"stockPrice"}
            headerText={"Stock Price"}
            enableCellClickRowSelect={false}
            labelFunction={getStockChartHTML}
          />
          <ReactDataGridColumn
            sortable={false}
            enableCellClickRowSelect={false}
            width="50"
            dataField="isActive"
            itemRenderer={CheckBoxItemRenderer}
            headerText={"CheckBox"}
          />

          <ReactDataGridColumnLevel enableFooters>
            <ReactDataGridColumn type={"checkbox"} />
            <ReactDataGridColumn
              dataField={"dealDesp"}
              headerText={"Deal Description"}
              footerLabel="Count:"
              footerOperation="count"
              footerAlign="center"
            />
            <ReactDataGridColumn
              dataField={"dealAmt"}
              textAlign="right"
              footerLabel="Total:"
              footerOperation="sum"
              footerAlign="right"
              headerText={"Deal Amount"}
            />
            <ReactDataGridColumn
              dataField={"dealDate"}
              headerText={"Deal Date"}
            />
          </ReactDataGridColumnLevel>
        </ReactDataGridColumnLevel>
      </ReactDataGrid>
    </div>
  );
}

// function CheckBoxItemRenderer({cell,row,column,level,grid}){
// const [check,setCheck]=useState();

// console.log(cell +""+row+" "+level +" "+grid +" "+ column)
// const c=row.getData()[column.dataField]
// setCheck(c);
// console.log(check)

// const toggle=(evt,isInputChecked)=>{
// row.getData()[column.dataField]=!check;
// evt.preventDefault();
// setCheck({check:!check});
// };
//   return (
//   <div style={{maxWidth:250}}>
//     <input type="checkbox"
//     onCheck={toggle}
//     label="Check"
//     />
//   </div>
//   )
// }

export default ItemRenderers;

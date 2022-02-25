import {
    ReactDataGrid,
    ReactDataGridColumn,
    ReactDataGridColumnLevel,
    DatePicker,
    ComboBox,
    flexiciousNmsp,
    Constants,
    UIComponent,
    SystemConstants

  } from "flexicious-react-datagrid";

//   export const ComboBoxItemEditor=(props)=> {
//       const {cell, row, column, level, grid} = props;
//       console.log(cell)
//        addEventListener(evt, Constants.EVENT_CHANGE, onChange);
      
    
//      const getClassNames=() =>{
//         return ["ComboBoxItemEditor", "UIComponent"];
//       }
    
//       const initialize=()=> {
//         flexiciousNmsp.UIComponent.prototype.initialize.apply(evt);
//        const dataField = "code";
//      const labelField = "name";
//     //     setDataProvider(flexiciousNmsp.SystemConstants.state);
  
//          const cell = grid.getCurrentEditCell();
//          console.log(cell);

//       }
      
    //    setValue(cell.getRowInfo().getData().headquarterAddress.state.code);
    //   }
      
  
    //   const onChange=(evt)=> {
      
    //     this.grid.getCurrentEditCell().getRowInfo().getData().headquarterAddress.state = getSelectedItem();
    //   }
    // }
  

    export default class ComboBoxItemEditor extends ComboBox {
      constructor() {
        //make sure to call constructor
        super();//we extend from the built in flexicious combobox, which gives us a bunch of properties (like selected value etc)
        /**
         * This is a getter/setter for the data property. When the cell is created, it belongs to a row
         * The data property points to the item in the grids dataprovider that is being rendered by this cell.
         * @type {*}
         */
        this.data = null;
        this.ignoreAllItem=(true);
    
        //the add event listener will basically proxy all DomEvents to your code to handle.
        this.addEventListener(this, Constants.EVENT_CHANGE, this.onChange);
      }
    
      getClassNames() {
        return ["ComboBoxItemEditor", "UIComponent"]; //this is a mechanism to replicate the "is" and "as" keywords of most other OO programming languages
      }
    
      /**
       * This is important, because the grid looks for a "setData" method on the renderer.
       * In here, we intercept the call to setData, and inject our logic to populate the combo box.
       * @param val
       */
      initialize() {
       UIComponent.prototype.initialize.apply(this);
        this.dataField = "code";// the code field is used on the data provider to match the item to select.
        this.labelField = "name";//to display the text of the dropdown
        this.setDataProvider(Constants.state);//list of all states we want as the dataprovider;
        const cell = this.grid.getCurrentEditCell();//each editor gets a grid parameter. Also parent object of this cell is either the leftLocked or the rightLocked, or the unlocked containers, all of which have a grid property.
        this.setValue(cell.getRowInfo().getData().headquarterAddress.state.code);
      }
    
      /**
       * This event is dispatched when the user clicks on the icon. The event is actually a flexicious event, and has a trigger event
       * property that points back to the original domEvent.
       * @param event
       */
      onChange(evt) {
        //in the editor you have a handle to the grid iteself.
        this.grid.getCurrentEditCell().getRowInfo().getData().headquarterAddress.state = this.getSelectedItem();
      }
    }
  














// import { Constants } from "flexicious-react-datagrid-styles";

//  const ComboBoxItemEditor= ()=>{

//     const data=null;
//     const ignoreAllItem=(true);

//     window.addEventListener( this,Constants.EVENT_CHANGE,this.onchange);
        
//    function initialize(){
// // flexiciousNmsp.UIComponents.prototype.initialize.apply(this);
// // dataField = "code";
// // labelFiled="name";
// // setDataProvider(flexiciousNmsp.SystemConstants.states);
// // const cell=this.grid.getCurrentEditCell();
// // setValue(cell.getRowInfo().getData().headquarterAddress.state.code);

//     }

//     return 0

//  const getClassNames=()=>{
//         return ["ComboBoxItemEditor","UIComponent"];
//     }

// } 


// export default ComboBoxItemEditor
//
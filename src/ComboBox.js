import React, { useEffect,useState} from "react";
import {ComboBox,Constants,flexiciousNmsp,UIComponent,SystemConstants} from "flexicious-react-datagrid";


export default class ComboBoxItemEditor extends ComboBox {
  constructor() {
  
    super();
    /**
     * This is a getter/setter for the data property. When the cell is created, it belongs to a row
     * The data property points to the item in the grids dataprovider that is being rendered by this cell.
     * @type {*}
     */
    this.data = null;
    this.ignoreAllItem=(true);


    this.addEventListener(this, Constants.EVENT_CHANGE, this.onChange);
  }

  getClassNames() {
    return ["ComboBoxItemEditor", "UIComponent"];   }


  initialize() {
    const data=this.grid.props.dataProvider;
    console.log(data.state);
    let states=[];
    data.forEach(element => {
      states.push(element.state);
    });
   UIComponent.prototype.initialize.apply(this);

    this.dataField = "code";
    this.labelField = "name";
    this.setDataProvider(states);
    const cell = this.grid.getCurrentEditCell();
      console.log(cell)
  console.log(cell.getRowInfo);
    console.log(SystemConstants);
  
    this.setValue(cell.getRowInfo().getData().state.code);
  }

  /**
   * This event is dispatched when the user clicks on the icon. The event is actually a flexicious event, and has a trigger event

   * @param event
   */
  onChange(evt) {
  
    this.grid.getCurrentEditCell().getRowInfo().getData().state = this.getSelectedItem();
  }
}

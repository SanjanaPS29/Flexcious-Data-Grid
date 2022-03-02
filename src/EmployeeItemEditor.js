import React, { Component } from 'react'
import { Constants ,ComboBox,UIComponent } from 'flexicious-react-datagrid';
import Employee from './EmployeeDetails';
 class EmployeeItemEditor extends ComboBox {

 constructor(){
     super()
     this.ignoreAllItem=(true);
     this.addEventListener(this,Constants.EVENT_CHANGE ,this.onChange);
 }

 initialize() {
    UIComponent.prototype.initialize.apply(this);
    const cell = this.grid.getCurrentEditCell();
    const stateList =cell._column.getDistinctValues(Employee);
    this.setDataProvider(stateList)
    this.setValue(cell.getRowInfo().getData().states);

}
 onChange(evt){
    this.grid.getCurrentEditCell().getRowInfo().getData().states= this.getSelectedItem().label;
 }
}

export default EmployeeItemEditor;

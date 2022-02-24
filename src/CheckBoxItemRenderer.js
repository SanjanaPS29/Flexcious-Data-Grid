import React from 'react';

class CheckBoxItemRenderer extends React.Component {
    constructor(props) {
      super(props);
      const { row, column} = props;
      this.state = {
        check: row.getData()[column.dataField]
      };
      this._toggleCheck = (evt, isInputChecked) => {
        const {row, column} = props;
        row.getData()[column.dataField] = !this.state.check;
        evt.preventDefault();
        this.setState({
          check: !this.state.check
        });
      };
    }
    render() {
      return (
        <div style={{ maxWidth: 250 }}>
          <input
          type="checkbox"
            checked={this.state.check}
            onChange={this._toggleCheck}
            label="Checkbox"
            style={{ marginBottom: 16 }}
            />CheckBox
        </div>
      );
    }
  }

export default CheckBoxItemRenderer;

// import React, { useEffect, useState } from "react";

// export default function CheckBoxItemRenderer() {
//   const funct = ({cell, row, column, level, grid}) => {
//     // const { cell, row, column, level, grid } = props;
//     const [check, setCheck] = useState(false);
//     console.log(check);

//     const toggle = (evt, isInputChecked) => {
//       row.getData()[column.dataField] = !check;
//       evt.preventDefault();
//       let c = !check;
//       setCheck(c);
//     };

//     useEffect(() => {
//       const c = row.getData()[column.dataField];
//       setCheck(c);
//     }, []);
//     return (
//       <div style={{ maxWidth: 250 }}>
//         <input
//           type="checkbox"
//           checked={check}
//           onChange={(e) => toggle(e)}
//           style={{ marginBottom: 16 }}
//         />
//         hello+{column.dataField}
//       </div>
//     );
//   };

//   return funct
// }
// export default CheckBoxItemRenderer;

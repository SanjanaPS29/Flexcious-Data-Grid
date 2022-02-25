import './App.css';
import Simple from './Simple';
import React from 'react';
import NestedData from './NestedData';
import ItemRenderers from './ItemRenderers';
import ItemEditors from './ItemEditors';

function App() {
  return (
    <div className="App">
      <ItemEditors/>
       <ItemRenderers/>
    <Simple/>
   
    {/* <NestedData/> */}
    </div>
  );
}

export default App;

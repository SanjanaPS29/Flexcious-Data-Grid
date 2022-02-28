import './App.css';
import Simple from './Simple';
import React from 'react';
import NestedData from './NestedData';
import ItemRenderers from './ItemRenderers';
import ItemEditors from './ItemEditors';
import LevelRender from './LevelRender';


function App() {
  return (
    <div className="App">
   
   <LevelRender/>
      <ItemEditors/>
       {/* <ItemRenderers/> */}
    {/* <Simple/> */}
   
    {/* <NestedData/> */}
    </div>
  );
}

export default App;

import React from 'react';
import Component, { ClassComponent, FuctionalComponent, } from './component/Component'
import './App.css';
import CurlyBraces from './component/CurlyBraces';

function App() {
  return (
    <div>
      {/* <ClassComponent />
      <FuctionalComponent />
      <Component /> */}
      <CurlyBraces />
    </div>
  );
}

export default App;

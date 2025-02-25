import React from 'react';
import Component, { ClassComponent, FuctionalComponent, } from './component/Component'
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component-manage/Properties';
import ConditionRender from './component-manage/ConditionRender';
import ListRender from './component-manage/ListRender';

function App() {
  return (
    <div>
      {/* <ClassComponent />
      <FuctionalComponent />
      <Component /> */}
      {/* <CurlyBraces /> */}
      {/* <Properties /> */}
      {/* <ConditionRender /> */}
      <ListRender />
    </div>
  );
}

export default App;

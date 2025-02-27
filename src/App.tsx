import React from 'react';
import Component, { ClassComponent, FuctionalComponent, } from './component/Component'
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component-manage/Properties';
import ConditionRender from './component-manage/ConditionRender';
import ListRender from './component-manage/ListRender';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';
import ForwardingComponent from './interaction/ForwardingComponent';
import HookComponent1 from './hook/HookComponent1';

function App() {
  return (
    <div>
      {/* <ClassComponent />
      <FuctionalComponent />
      <Component /> */}
      {/* <CurlyBraces /> */}
      {/* <Properties /> */}
      {/* <ConditionRender /> */}
      {/* <ListRender /> */}
      {/* <EventComponent /> */}
      {/* <StateComponent /> */}
      {/* <ForwardingComponent /> */}
      <HookComponent1 />
    </div>
  );
}

export default App;

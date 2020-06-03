import React from "react";
import ColorPicker from './ColorPicker'
import Grid from './Grid'
import Stats from './Stats'

import "./App.css";
import {
  RecoilRoot,
} from "recoil";


function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <ColorPicker />
        <Grid />
        <Stats />
      </RecoilRoot>
    </div>
  );
}

export default App;

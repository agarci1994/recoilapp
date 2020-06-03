import React from 'react'
import {
    useRecoilState,
} from "recoil";
import { COLORS, colorCounterState } from './store'

const Stats = () => {
  const [colorCounter, setColorCounter] = useRecoilState(colorCounterState);

  return (
    <>
      <div className="stats">
        <div>White: {colorCounter[COLORS.WHITE]}</div>
        <div>Red: {colorCounter[COLORS.RED]}</div>
        <div>Blue: {colorCounter[COLORS.BLUE]}</div>
      </div>
      <div>
        <button onClick={setColorCounter}>Reset</button>
      </div>
    </>
  );
};

export default Stats

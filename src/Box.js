import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { boxState, colorState } from './store'

const Box = ({ id }) => {
  const [box, setBox] = useRecoilState(boxState(id));

  const color = useRecoilValue(colorState);

  const setColor = () => {
    setBox(color);
  };
  
  return (
    <div
      className="box"
      style={{
        background: box,
      }}
      onClick={setColor}
    />
  );
};

export default Box;

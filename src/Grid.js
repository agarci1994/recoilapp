import React from 'react'
import Box from './Box'
import { BOX_NUM } from './store'

const Grid = () => {
  let boxes = [];
  for (let i = 0; i < BOX_NUM; i++) {
    boxes.push(<Box key={i} className="box" id={i} />);
  }

  return (
    <>
      <h2>Press on boxes to color:</h2>
      <div className="grid">{boxes}</div>
    </>
  );
};

export default Grid
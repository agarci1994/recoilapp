import React from "react";
import { COLORS, colorState } from "./store";

import { useRecoilState } from "recoil";

const ColorPicker = () => {
  const [color, setColor] = useRecoilState(colorState);
  return (
    <div>
      Select Color:
      <button
        className={color === COLORS.RED ? "selected" : ""}
        onClick={() => setColor(COLORS.RED)}
      >
        Red
      </button>
      <button
        className={color === COLORS.BLUE ? "selected" : ""}
        onClick={() => setColor(COLORS.BLUE)}
      >
        Blue
      </button>
      <button
        className={color === COLORS.WHITE ? "selected" : ""}
        onClick={() => setColor(COLORS.WHITE)}
      >
        White
      </button>
    </div>
  );
};

export default ColorPicker;

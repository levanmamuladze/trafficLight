import React, { useState } from "react";
function TrafficLight() {
  const [selectColor, setselectColor] = useState(null);
  const [doCirle, setdoCirle] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [extraColor, setExtraColor] = useState(false);
  

  const colors = ["red", "yellow", "green","purple"];
  let index = 0;

  const cycleColors = () => {
    setselectColor(colors[index]);
    index = (index + 1) % colors.length;
  };

  const handleButtonClick = () => {
    if (doCirle) {
      clearInterval(intervalId);
      setIntervalId(null);
      setdoCirle(false);
      setselectColor(null);
    } else {
      setdoCirle(true);
      cycleColors();
      const id = setInterval(cycleColors, 500);
      setIntervalId(id);
    }
  };
  return (
    <div className="text-center">
      <div className="bg-black p-3">
        <div
          onClick={() => setselectColor("red")}
          className={`first-light bg-danger  ${
            selectColor === "red" ? "light-color" : ""
          }`}
        ></div>
        <div
          onClick={() => setselectColor("yellow")}
          className={`second-light bg-warning  ${
            selectColor === "yellow" ? "light-color" : ""
          }`}
        ></div>
        <div
          onClick={() => setselectColor("green")}
          className={`third-light bg-success  ${
            selectColor === "green" ? "light-color" : ""
          }`}
        ></div>
        {extraColor? 
        <div
        onClick={() => setselectColor("purple")}
        className={`forth-light bg-purple  ${
          selectColor === "purple" ? "light-color" : ""
        }`}
      ></div>: null}
        
      </div>
      <div className="pt-2 d-grid ">
        <button onClick={handleButtonClick}>
          {doCirle ? "Stop Circle" : "Start Circle"} 
        </button>
        <button onClick={() => {
            setExtraColor(!extraColor);
          }}>{extraColor ? "Remove Color" : "Add Color"}
        
        </button>
      </div>
      

    </div>
  );
}
export default TrafficLight;

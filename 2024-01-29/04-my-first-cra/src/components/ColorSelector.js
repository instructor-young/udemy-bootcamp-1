import React, { useState } from "react";

function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState("black");

  const handleClickColor = (color) => () => setSelectedColor(color);

  return (
    <div>
      <h2>색상 선택기</h2>

      <div
        style={{
          backgroundColor: selectedColor,
          width: 100,
          height: 100,
          margin: "0 auto",
        }}
      ></div>

      <div>
        <button onClick={handleClickColor("red")}>빨강</button>
        <button onClick={handleClickColor("orange")}>주황</button>
        <button onClick={handleClickColor("yellow")}>노랑</button>
        <button onClick={handleClickColor("green")}>초록</button>
        <button onClick={handleClickColor("blue")}>파랑</button>
        <button onClick={handleClickColor("indigo")}>군청</button>
        <button onClick={handleClickColor("purple")}>보라</button>
      </div>
    </div>
  );
}

export default ColorSelector;

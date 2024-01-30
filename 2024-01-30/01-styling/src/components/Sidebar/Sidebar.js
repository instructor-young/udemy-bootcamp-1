import React, { useState } from "react";
import styled from "styled-components";

function Sidebar() {
  const [bgColor, setBgColor] = useState("aqua");

  const handleClickColorSelector = (color) => {
    setBgColor(color);
  };

  return (
    <Wrapper bgColor={bgColor}>
      <div>
        <button onClick={() => handleClickColorSelector("red")}>빨강</button>
        <button onClick={() => handleClickColorSelector("orange")}>주황</button>
        <button onClick={() => handleClickColorSelector("yellow")}>노랑</button>
        <button onClick={() => handleClickColorSelector("green")}>초록</button>
        <button onClick={() => handleClickColorSelector("blue")}>파랑</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  background-color: ${(props) => props.bgColor};
`;

export default Sidebar;

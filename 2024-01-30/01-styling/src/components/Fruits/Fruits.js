import React from "react";
import styled from "styled-components";

const fruits = [
  { name: "사과", themeColor: "red" },
  { name: "바나나", themeColor: "yellow" },
  { name: "딸기", themeColor: "red" },
  { name: "수박", themeColor: "green" },
];

function Fruits() {
  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <Fruit key={fruit.name} themeColor={fruit.themeColor}>
            {fruit.name}
          </Fruit>
        );
      })}
    </div>
  );
}

const Fruit = styled.li`
  background-color: ${(props) => props.themeColor};
`;

export default Fruits;

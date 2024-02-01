import React from "react";
import { useSelector } from "react-redux";

function Character() {
  const location = useSelector((state) => state.character.location);
  const horizontalDirection = useSelector(
    (state) => state.character.horizontalDirection
  );

  return (
    <img
      src="/pikachu.png"
      alt="피카츄"
      className={`w-10 h-10 absolute transition-all ${
        horizontalDirection === "left" ? "-scale-x-100" : ""
      } `}
      style={{ top: location.y * 40, left: location.x * 40 }}
    />
  );
}

export default Character;

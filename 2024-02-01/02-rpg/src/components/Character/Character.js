import React, { useEffect, useState } from "react";

function Character() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState("right");

  const move = (e) => {
    const key = e.key;
    if (!key.includes("Arrow")) return;

    const direction = key.replace("Arrow", "").toLowerCase();
    setDirection(direction);

    if (direction === "up") {
      setY((prevY) => prevY - 1);
    } else if (direction === "down") {
      setY((prevY) => prevY + 1);
    } else if (direction === "right") {
      setX((prevX) => prevX + 1);
    } else {
      setX((prevX) => prevX - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", move);
  }, []);

  return (
    <div
      className="w-10 h-10 bg-blue-500 absolute transition-all"
      style={{ top: y * 40, left: x * 40 }}
    />
  );
}

export default Character;

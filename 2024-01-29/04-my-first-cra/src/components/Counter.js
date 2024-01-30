import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [gap, setGap] = useState(1);

  const handleClickMinus = () => {
    setCount(count - gap);
  };
  const handleClickPlus = () => {
    setCount(count + gap);
  };

  return (
    <div>
      <h2>카운터</h2>
      <div>현재 숫자: {count}</div>

      <input
        type="number"
        value={String(gap)}
        onChange={(e) => setGap(Number(e.target.value))}
      />

      <div>
        <button onClick={handleClickMinus}>-</button>
        <button onClick={handleClickPlus}>+</button>
      </div>
    </div>
  );
}

export default Counter;

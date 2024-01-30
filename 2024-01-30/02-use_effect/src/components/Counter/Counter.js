import React, { useEffect, useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  const handleClickMinus = () => {
    setValue((prevValue) => prevValue - 1);
  };
  const handleClickPlus = () => {
    setValue((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    if (value % 5 === 0 && value !== 0) {
      alert("5배수 됨");
    }
  }, [value]);

  return (
    <div>
      <div className="display">{value}</div>

      <div>
        <button onClick={handleClickMinus}>-</button>
        <button onClick={handleClickPlus}>+</button>
      </div>
    </div>
  );
}

export default Counter;

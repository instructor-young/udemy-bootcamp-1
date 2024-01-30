import React, { useEffect, useState } from "react";

function Timer() {
  const [passedTime, setPassedTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setPassedTime((prevPassedTime) => prevPassedTime + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h1>타이머</h1>
      <div style={{ display: "flex", flexWrap: "wrap", columnGap: 4 }}>
        {Array(passedTime)
          .fill(0)
          .map((_, index) => (
            <div key={index}>{index}</div>
          ))}
      </div>
    </div>
  );
}

export default Timer;

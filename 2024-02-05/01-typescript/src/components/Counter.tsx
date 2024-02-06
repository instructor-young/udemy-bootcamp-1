import { useState } from "react";

// type NumberArray= number[]
type NumberArray = Array<number>;

string[]
Array<string>

function Counter() {
  const [value, setValue] = useState<number | undefined>(0);

  return (
    <div>
      <div>{value}</div>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
}

export default Counter;

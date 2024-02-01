import React from "react";

function Map({ children }) {
  return (
    <div
      className="relative bg-red-300 w-full h-full"
      style={{ backgroundImage: "url(/grass.png)" }}
    >
      {children}
    </div>
  );
}

export default Map;

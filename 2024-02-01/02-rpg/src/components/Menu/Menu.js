import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul className="h-16 grid grid-cols-4">
        <li>
          <Link
            to="/"
            className="bg-red-500 flex h-full items-center justify-center"
          >
            맵
          </Link>
        </li>
        <li>2</li>
        <li>3</li>
        <li>
          <Link
            to="/status"
            className="bg-red-500 flex h-full items-center justify-center"
          >
            상태
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;

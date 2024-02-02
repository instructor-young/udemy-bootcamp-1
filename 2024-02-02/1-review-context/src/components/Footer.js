import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

function Footer() {
  const { userId } = useContext(AuthContext);
  console.log("리렌더 Footer");
  return (
    <footer className="border">
      Footer
      <h1>{userId}</h1>
    </footer>
  );
}

export default Footer;

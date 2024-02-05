import React from "react";
import Footer from "./Footer";

function Layout({ children }) {
  console.log("리렌더 Layout");
  return (
    <div>
      {/* <Header />
      <main className="border">{children}</main> */}
      <Footer />
    </div>
  );
}

export default Layout;

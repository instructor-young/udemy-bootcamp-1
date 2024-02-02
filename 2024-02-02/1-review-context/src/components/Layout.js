import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  console.log("리렌더 Layout");
  return (
    <div className="border">
      <Header />
      <main className="border">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

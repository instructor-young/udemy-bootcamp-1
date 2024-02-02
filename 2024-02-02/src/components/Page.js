import React from "react";
import Layout from "./Layout";

function Page({ children }) {
  console.log("리렌더 Page");
  return <Layout>{children}</Layout>;
}

export default Page;

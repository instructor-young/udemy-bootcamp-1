import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Sidebar from "../Sidebar/Sidebar";

function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Sidebar />

      <main className="px-14 py-20">{children}</main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export default Layout;

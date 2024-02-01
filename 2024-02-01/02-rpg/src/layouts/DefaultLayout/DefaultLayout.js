import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function DefaultLayout() {
  return (
    <div className="bg-black">
      <div className="max-w-[400px] h-screen bg-white mx-auto flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;

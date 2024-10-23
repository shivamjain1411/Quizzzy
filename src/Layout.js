import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header"; // Assuming Header.js is in components folder

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This will render the current route's component */}
      </main>
    </>
  );
};

export default Layout;

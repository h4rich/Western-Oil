// src/components/Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="pt-[80px]"> {/* Padding to offset fixed header */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

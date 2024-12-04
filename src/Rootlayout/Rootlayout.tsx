import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Breadcrumbs from "./Breadcrumbs";

const RootLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[94vh]">
      <Header />
      <Breadcrumbs />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="p-0 m-0">
      <Navbar></Navbar>
      <main className="w-screen overflow-x-hidden">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;

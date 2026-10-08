import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <SmoothScroll>
        <div className="p-0 m-0 bg-white text-neutral-900">
          <main className="w-screen overflow-x-hidden">{children}</main>
          <Footer></Footer>
        </div>
      </SmoothScroll>
    </>
  );
};

export default Layout;

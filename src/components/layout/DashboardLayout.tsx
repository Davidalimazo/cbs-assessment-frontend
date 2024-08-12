"use client";

import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";

import { LayoutProps } from "@/interfaces/layout_interface";
import Navbar from "../navbar/Navbar";

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="">
        {/* Navbar */}
        <div className="">
          <Navbar />
        </div>
        <main className="px-3">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;

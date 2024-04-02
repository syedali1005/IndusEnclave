import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex">
    <Sidebar />
      <main className="w-full bg-slate-100 min-h-screen ml-60">
      <Header />
      {children}</main>
    </div>
  );
}

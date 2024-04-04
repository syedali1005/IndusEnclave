"use client";
import {
  BaggageClaim,
  BarChart4,
  Cable,
  ChevronLeft,
  Files,
  Home,
  PlusCircle,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import CollapsibleLink from "./CollapsibleLink";
import SidebarDropdownLink from "./SidebarDropdownLink";

export default function Sidebar() {
  const inventoryLinks = [
    {
      title: "Properties",
      href: "/inventory/inventory/properties/new",
    },
    {
      title: "Categories",
      href: "/inventory/inventory/categories/new",
    },
    {
      title: "Blocks",
      href: "/inventory/inventory/blocks/new",
    },
    {
      title: "Adjustments",
      href: "/inventory/inventory/adjustments",
    },
  ];
  const salesLinks = [
    {
      title: "Client Profile",
      href: "#",
    },
    {
      title: "Client Finances",
      href: "#",
    },
    {
      title: "Packages",
      href: "",
    },
    {
      title: "Dealers Finances",
      href: "",
    },
    {
      title: "Invoices",
      href: "",
    },
    {
      title: "Payments Recieved",
      href: "",
    },
  ];
  return (
    <div className="w-60 min-h-screen bg-slate-900 text-slate-50 fixed">
      {/* Top Part */}
      <div className="flex flex-col">
        {/* Logo */}
        <Link
          href="#"
          className="flex space-x-2 bg-slate-950 items-center py-3 px-2"
        >
          <ShoppingCart />
          <span className="font-semibold text-xl">Inventory</span>
        </Link>
        {/* Links */}
        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link
            href="#"
            className="flex items-center space-x-2 bg-blue-700 text-slate-50 p-2 rounded-md"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <SidebarDropdownLink
            items={inventoryLinks}
            title="Inventory"
            icon={BaggageClaim}
          />
          <SidebarDropdownLink
            items={salesLinks}
            title="Sales"
            icon={ShoppingBasket}
          />
          <button className="flex items-center space-x-2 p-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Purchases</span>
          </button>
          <Link href="#" className="flex items-center space-x-2 p-2">
            <Cable className="w-4 h-4" />
            <span>Integrations</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 p-2">
            <BarChart4 className="w-4 h-4" />
            <span>Reports</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 p-2">
            <Files className="w-4 h-4" />
            <span>Documents</span>
          </Link>
        </nav>
      </div>
      {/* Bottom */}
      <div className="flex flex-col justify-end items-center">
        <button className=" justify-center flex space-x-2 bg-slate-950 items-center py-3 px-2">
          <ChevronLeft />
        </button>
      </div>
      {/* Subscription Card */}
      {/* Footer Icon */}
    </div>
  );
}

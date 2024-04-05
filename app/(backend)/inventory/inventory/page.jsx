"use client"
import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { Boxes, Component, Landmark, ScrollText } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Inventory() {
  const optionCards =[
    {
      title: "Properties",
      description: "Buy your future assets as a property",
      link: "/inventory/inventory/properties/new",
      linkTitle: "New Property",
      enabled: true,
      icon: Landmark,
    },
    {
      title: "Categories",
      description: "Bundle different plots together",
      link: "/inventory/inventory/categories/new",
      linkTitle: "Categories",
      enabled: true,
      icon: ScrollText,
    },
    {
      title: "Blocks",
      description: "Tweak your plot prices for specific transactions",
      link: "/inventory/inventory/blocks/new",
      linkTitle: "New Blocks",
      enabled: true,
      icon: Boxes,
    },
  ]
  return (
    <div>
      <FixedHeader newLink = "/inventory/inventory/properties/new" />
      <div className="grid grid-cols-1 lg:grid-cols-2 py-8 px-16 gap-6">
       {
        optionCards.map((card,i)=> {
          return(
            <OptionCard optionData={card} key={i}/>
          )
        })
       }
      </div>
    </div>
  );
}

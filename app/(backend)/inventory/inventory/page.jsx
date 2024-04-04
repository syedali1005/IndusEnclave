"use client"
import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { Boxes, Component, Landmark, ScrollText } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Inventory() {
  const optionCards =[
    {
      title: "Property Groups",
      description: "Organize future assets as cohesive property bundles",
      link: "/new",
      linkTitle: "New Property Group",
      enabled: true,
      icon: Boxes,
    },
    {
      title: "Properties",
      description: "Buy your future assets as a property",
      link: "/new",
      linkTitle: "New Property",
      enabled: true,
      icon: Landmark,
    },
    {
      title: "Bundle",
      description: "Bundle different plots together",
      link: "/new",
      linkTitle: "Bundle of Properties",
      enabled: false,
      icon: Component,
    },
    {
      title: "Price Lists",
      description: "Tweak your plot prices for specific transactions",
      link: "/new",
      linkTitle: "Bundle of Properties",
      enabled: false,
      icon: ScrollText,
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

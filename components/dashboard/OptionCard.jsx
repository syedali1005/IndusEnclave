import React from "react";
import Link from "next/link";

export default function OptionCard({ optionData }) {
  const { title, description, link, linkTitle, enabled, icon: Icon } = optionData; // Destructuring the icon property as Icon

  return (
    <div className="shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6 rounded">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="">
        <Icon strokeWidth=".5px" className="w-36 h-36" /> {/* Render the icon dynamically */}
      </div>
      <p className="line-clamp-1">{description}</p>
      {enabled ? (
        <Link
          href={link}
          className="py-2 rounded-sm bg-blue-600 inline-flex items-center space-x-2 px-3 text-white"
        >
          {linkTitle}
        </Link>
      ) : (
        <button className="py-2 rounded-sm bg-blue-600 inline-flex items-center space-x-2 px-3 text-white">
          Enable
        </button>
      )}
    </div>
  );
}

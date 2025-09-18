import React from "react";

export default function BeschreibungsCard({
  handleClick,
  beschreibung,
  hideExample,
}: {
  hideExample: boolean;
  handleClick: () => void;
  beschreibung: string;
}) {
  return (
    <div
      className={`${
        hideExample ? "hidden" : ""
      } p-4 bg-gray-50 transition ease-in-out text-black max-w-[600px] h-min rounded-lg shadow-md absolute top-2 right-2 pr-12 ml-2`}
    >
      <span className="absolute top-2 right-2">

        <button
          onClick={handleClick}
          type="button"
          className="rounded-full hover:bg-gray-200"
        >
          <i className="pi pi-times text-gray-600 p-2"></i>
        </button>
      </span>
      <p
        className={`${
          beschreibung ? "text-gray-400" : "text-gray-500"
        } text-sm md:text-base font-medium text-justify hyphens-auto `}
      >
        {beschreibung ? beschreibung : "Keine Beschreibung vorhanden."}
      </p>
    </div>
  );
}

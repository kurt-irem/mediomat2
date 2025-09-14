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
      } p-4 bg-gray-50 transition ease-in-out text-black max-w-[300px] h-min rounded-lg static shadow-md`}
    >
      <span className="flex flex-row justify-end">

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
        } text-light font-medium `}
      >
        {beschreibung ? beschreibung : "keine Beschreibung vorhanden."}
      </p>
    </div>
  );
}

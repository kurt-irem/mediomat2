"use client";
import React, { useState } from "react";

export default function BeschreibungsBtn({
  handleClick,
  hideExample,
}: {
  handleClick: () => void;
  hideExample: boolean;
}) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className={`${
        hideExample ? "hidden" : ""
      } p-1  text-secondary-300 hover:text-secondary-400 transition w-min h-min flex items-center justify-center rounded-full hover:scale-110`}
    >
      <i
        className="pi pi-question-circle"
        style={{
          fontSize: "1.5rem",
        }}
      ></i>
    </button>
  );
}

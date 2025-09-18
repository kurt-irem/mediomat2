"use client";
import React from "react";

export default function FrageButton({
  label,
  handleClick,
}: {
  label: string;
  handleClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex-1 py-4 md:py-2 px-6 border-solid border bg-secondary-base border-secondary-300 rounded-[30px] transition md:hover:bg-secondary-200 md:hover:scale-105 text-base md:text-[14px]"
    >
      {label}
    </button>
  );
}

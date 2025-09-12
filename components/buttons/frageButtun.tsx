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
      className="flex-1  py-4 md:py-2 px-6 border-solid border bg-secondary-250 border-secondary-300 rounded-[30px] transition hover:bg-secondary-300 hover:scale-105 text-base md:text-[14px] "
    >
      {label}
    </button>
  );
}

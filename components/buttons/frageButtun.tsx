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
      className="p-4 border-solid border-2 border-gray-300 rounded-2xl transition hover:border-blue active:bg-blue-700 active:text-white text-dark hover:scale-110"
    >
      {label}
    </button>
  );
}

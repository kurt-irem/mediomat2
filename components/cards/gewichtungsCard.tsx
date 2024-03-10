import React from "react";

export default function GewichtungsCard( {
        frage,
    }: {
        frage?: string;
    }) {
  return (
    <div className="p-4 bg-white rounded-lg relative overflow-hidden cursor-pointer shadow-md">
      <p className="opacity-0 transition-opacity duration-300 absolute inset-0 flex justify-start items-center hover:opacity-100 ml-5 font-semibold text-lg">
        2x
      </p>
      <p className="pl-16 font-medium text-2xl">{frage}</p>
    </div>
  );
}

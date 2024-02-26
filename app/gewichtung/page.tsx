import GewichtungsCard from "@/components/cards/gewichtungsCard";
import React from "react";

export default function Gewichtung() {
  return (
    <div className="px-10 h-screen bg-gray-100 text-dark pt-[104px]">
      <div className="flex flex-col gap-6 mb-10">
        <h1 className="font-semibold text-[56px]">Gewichtung der Thesen</h1>
        <h3 className="text-2xl max-w-[900px]">
          Welche Thesen sind Ihnen besonders wichtig? Markieren Sie die Thesen,
          um diese mit doppelter Gewichtung in die Berechnung einfließen zu
          lassen.
        </h3>
      </div>

      <GewichtungsCard />
    </div>
  );
}

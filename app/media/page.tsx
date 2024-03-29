"use client";
import React, { Suspense } from "react";
import data from "../../data/media.json";
import VorschlagCard from "@/components/cards/vorschlagCard";
import { useRouter } from "next/navigation";
import textData from "@/data/texte.json";

export default function Gewichtung() {
  const router = useRouter();
  const cards: any[] = [];
  for (let medium of data) {
    cards.push(medium);
  }
  return (
    <div className=" text-dark p-8">
      <div className="flex justify-between items-center">
        <span>
          <h1 className="text-4xl font-semibold">Unsere Medien</h1>
          <h2 className="text-xl">Folgende Medien wurden von uns codiert</h2>
        </span>
        <span className="flex flex-col gap-2">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-4 bg-purple-100 rounded-lg text-purple-400 uppercase flex gap-3 items-center hover:bg-purple-200 hover:text-purple-500 hover:scale-100 scale-95 transition-all"
          >
            {textData.zurStartseite}
            {/* <i className="pi pi-arrow-right" style={{ fontSize: "1rem" }} /> */}
          </button>
        </span>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex py-2 wrap">
          {cards.map((card, index) => (
            <VorschlagCard
              key={index}
              name={card.name}
              beschreibung={card.beschreibung}
              image={card.image}
              mediumArt={card.mediumArt}
              url={card.url}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

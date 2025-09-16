"use client";
import React, { Suspense } from "react";
import data from "../../data/media.json";
import VorschlagCardMobile from "@/components/cards/vorschlagCardMobile";
import { useRouter } from "next/navigation";
import textData from "@/data/texte.json";
import MenuButton from "@/components/menu";

export default function Gewichtung() {
  const router = useRouter();
  const cards: any[] = [];
  for (let medium of data) {
    cards.push(medium);
  }
  return (
    <div className=" px-3 py-10 md:px-10">
      <div>
         <MenuButton></MenuButton>
    
      </div>
      <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold">Unsere Medien</h1>
          <h2 className="text-xl pt-5">Folgende Medien wurden von uns codiert</h2>
      </div>

      {/* <div className="flex justify-between items-center">
       
        <span className="flex flex-col gap-2">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-4 bg-purple-100 rounded-lg text-purple-400 uppercase flex gap-3 items-center hover:bg-purple-200 hover:text-purple-500 hover:scale-100 scale-95 transition-all"
          >
            {textData.zurStartseite}
          </button>
        </span>
      </div> */}

      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex justify-center py-2 wrap">
          {cards.map((card, index) => (
            <VorschlagCardMobile
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

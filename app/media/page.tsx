"use client";
import React, { Suspense } from "react";
import data from "../../data/media.json";
import VorschlagCardMobile from "@/components/cards/vorschlagCardMobile";
import { useRouter } from "next/navigation";
import MenuButton from "@/components/menu";

export default function Gewichtung() {
  const router = useRouter();
  const cards: any[] = [];
  for (let medium of data) {
    cards.push(medium);
  }
  return (
    <div className="px-3 py-14 md:px-10">
      <div>
         <MenuButton></MenuButton>
    
      </div>
      <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl sm:text-[44px] font-semibold font-mono tracking-wide">Unsere Medien</h1>
          <h2 className="text-xl pt-5 text-center">Folgende Medien wurden von uns codiert</h2>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex wrap justify-center py-2 ">
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

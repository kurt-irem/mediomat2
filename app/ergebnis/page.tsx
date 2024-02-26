import VorschlagCard from "@/components/cards/vorschlagCard";
import React from "react";
import test from "../../data/beispielMedium.json";

export default function Ergebnis() {
  const bewertungswert = 56;
  test.sort(
    (a, b) =>
      Math.abs(a.codierung - bewertungswert) -
      Math.abs(b.codierung - bewertungswert)
  );
  const favoritCards = test.slice(0, 3);
  return (
    <div className=" text-dark p-8">
      <h1 className="text-4xl font-semibold">Auswertung</h1>
      <h2 className="text-xl">
        Diese Auswahl an Medien könnten Sie interessieren.
      </h2>

      <div className="flex justify-center py-2">
        {favoritCards.map((card, index) => (
          <VorschlagCard
            key={index}
            name={card.name}
            beschreibung={card.beschreibung}
            image={card.image}
            mediumArt={card.mediumArt}
            url={card.url}
            codierung={card.codierung}
          />
        ))}
      </div>
    </div>
  );
}

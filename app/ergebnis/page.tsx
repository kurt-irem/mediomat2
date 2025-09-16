"use client";
import VorschlagCard from "@/components/cards/vorschlagCard";
import VorschlagCardMobile from "@/components/cards/vorschlagCardMobile";
import test from "../../data/media.json";
import {useRouter, useSearchParams} from "next/navigation";
import React, {Suspense} from "react";
import useAnimationToggle from "@/hooks/useAnimationToggle";
import MenuButton from "@/components/menu";


interface Bewertung {
    wert: number;
    label: string;
}

interface FragenKarteProps {
    bewertung: Bewertung[];
}

interface Medium {
    name: string;
    mediumArt: string;
    beschreibung: string;
    url: string;
    image: string;
    code: string;
    codierung: { [key: string]: number };
}

const Ergebnis = () => {
    const router = useRouter();
    const animate = useAnimationToggle(7000);
    const searchParams = useSearchParams();

    const testArray: Medium[] = test;

    let mediaResults: { [index: string]: number } = {};
    let answers = JSON.parse(searchParams.get("answer") as string);

    for (let medium of test) {
        // @ts-ignore
        mediaResults[medium.code] = 0;
        for (let attr in medium.codierung) {
            // @ts-ignore
            mediaResults[medium.code] += Math.pow(answers[attr - 1].value - medium.codierung[attr], 2) * answers[attr - 1].weight;
        }
        // @ts-ignore
        mediaResults[medium.code] = Math.sqrt(mediaResults[medium.code]);
    }

    let sorted = Object.entries(mediaResults).sort((a, b) => {
        // @ts-ignore
        return a[1] - b[1];
    });

    let winners = sorted.slice(0, 3);
    const favoriteCards: any[] = [];
    favoriteCards.push(
        test.find((e, i) => {
            return e.code == winners[0][0];
        })
    );
    favoriteCards.push(
        test.find((e, i) => {
            return e.code == winners[1][0];
        })
    );
    favoriteCards.push(
        test.find((e, i) => {
            return e.code == winners[2][0];
        })
    );

    return (
    <div className="px-3 md:px-10 pt-16 pb-10">
      <div>
        <MenuButton></MenuButton>
      </div>

      <div className="flex flex-col wrap justify-center items-center">
        <h1 className="text-3xl sm:text-4xl font-semibold">Auswertung</h1>
        <h2 className="text-lg sm:text-xl p-5 pt-7">
          Diese Auswahl an Medien könnten Sie interessieren:
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex flex-col justify-center items-center">
            {favoriteCards.map((card, index) => (
              <div key={index} className="relative">
                <span className="hidden md:flex">
                  <VorschlagCard
                    key={index}
                    name={card.name}
                    beschreibung={card.beschreibung}
                    image={card.image}
                    mediumArt={card.mediumArt}
                    url={card.url}
                    cardIndex={index}
                  />
                </span>
                <span className="flex md:hidden">
                  <VorschlagCardMobile
                    key={index}
                    name={card.name}
                    beschreibung={card.beschreibung}
                    image={card.image}
                    mediumArt={card.mediumArt}
                    url={card.url}
                    cardIndex={index}
                  />
                </span>
              </div>
            ))}
          </div>
        </Suspense>

        <div className="flex flex-row md:flex-row gap-10 md:gap-20 wrap justify-center items-center">
          <button
            onClick={() => router.push("/")}
            className=" px-10 py-4 bg-primary-250 border border-primary-300  text-lg md:text-xl shadow-md flex flex-row-reverse gap-3 justify-center items-center rounded-2xl transition hover:bg-primary-200 hover:scale-105 ease-in uppercase"
          >
        
            Startseite
          </button>
          <button
            onClick={() => router.push("/media")}
            className=" px-10 py-4 bg-primary-250 border border-primary-300 text-lg md:text-xl shadow-md flex flex-row-reverse gap-3 justify-center items-center rounded-2xl transition hover:bg-primary-200 hover:scale-105 ease-in uppercase"
          >
         
            Alle Medien
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ergebnis;

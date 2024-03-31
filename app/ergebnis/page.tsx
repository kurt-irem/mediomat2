"use client";
import VorschlagCard from "@/components/cards/vorschlagCard";
import test from "../../data/media.json";
import { useRouter, useSearchParams } from "next/navigation";
//import {useEffect, useState} from 'react';
import React, { Suspense } from "react";
import textData from "@/data/texte.json";
import useAnimationToggle from "@/hooks/useAnimationToggle";
import { Container } from "postcss";

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
      mediaResults[medium.code] +=
        Math.pow(answers[attr - 1].value - medium.codierung[attr], 2) *
        answers[attr - 1].weight;
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
  favoriteCards.unshift(
    test.find((e, i) => {
      return e.code == winners[2][0];
    })
  );

  return (
    <div className=" text-dark p-8">
      <div className="flex flex-row justify-between">
        <span>
          <h1 className="text-4xl font-semibold">Auswertung</h1>
          <h2 className="text-xl">
            Diese Auswahl an Medien könnten Sie interessieren.
          </h2>
        </span>
        <span className="flex flex-col gap-2">
          <button
            onClick={() => router.push("/befragung")}
            className="px-6 py-4 bg-purple-100 rounded-lg text-purple-400 uppercase flex gap-3 items-center hover:bg-purple-200 hover:text-purple-500 hover:scale-100 scale-95 transition-all"
          >
            {textData.repeat}
            <i className="pi pi-replay" style={{ fontSize: "1rem" }} />
          </button>
          <button
            onClick={() => router.push("/")}
            className="underline text-sm text-gray-400"
          >
            {textData.zurStartseite}
          </button>
        </span>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex justify-center">
          {favoriteCards.map((card, index) => (
            <div key={index} className="relative">
              <span
                className={`p-2 w-min h-min absolute ${
                  index === 0
                    ? "-top-2 -left-4"
                    : index === 1
                    ? "-top-6 -left-5 animate__animated animate__pulse animate__infinite"
                    : "top-2 -left-2"
                }`}
              >
                <i>
                  <svg
                    width={index === 0 ? "48" : index === 1 ? "64" : "32"}
                    height={index === 0 ? "48" : index === 1 ? "64" : "32"}
                    viewBox="0 0 59 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.2895 4.58627C33.5835 5.9695 33.3124 7.34144 32.6323 8.46185L41.295 15.5622C41.538 15.7615 41.8872 15.7639 42.1331 15.5679L48.3126 10.6411C48.1763 10.3243 48.0692 9.98947 47.9947 9.6393C47.3823 6.75814 49.2214 3.92607 52.1026 3.31365C54.9839 2.70122 57.8159 4.54042 58.4283 7.42157C58.9561 9.90447 57.6631 12.3509 55.4518 13.3717L56.0805 39.47C56.1346 41.7151 54.5821 43.6803 52.3855 44.1471L21.5018 50.7117C19.3051 51.1786 17.0875 50.0148 16.2238 47.9418L6.1832 23.8441C3.74766 23.8111 1.5714 22.102 1.04364 19.6191C0.431232 16.7379 2.27041 13.9058 5.15157 13.2934C8.03272 12.681 10.8648 14.5202 11.4772 17.4013C11.5516 17.7515 11.5899 18.1009 11.5944 18.4458L19.2436 20.4332C19.5478 20.5123 19.866 20.3681 20.0071 20.0871L25.0328 10.0772C23.9556 9.33035 23.1499 8.18728 22.8559 6.80399C22.2435 3.92284 24.0826 1.09077 26.9638 0.478345C29.845 -0.13408 32.6771 1.70512 33.2895 4.58627ZM34.7259 36.9959C37.6071 36.3834 39.4462 33.5514 38.8338 30.6702C38.2213 27.789 35.3894 25.9499 32.5081 26.5623C29.6269 27.1747 27.7878 30.0067 28.4002 32.8879C29.0126 35.7692 31.8446 37.6083 34.7259 36.9959Z"
                      fill={
                        index === 0
                          ? "#c5dcff"
                          : index === 1
                          ? "#FFE298"
                          : "#dba336"
                      }
                    />
                  </svg>
                </i>
              </span>
              <span className="flex">
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
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Ergebnis;

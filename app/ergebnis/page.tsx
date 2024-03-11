"use client";
import VorschlagCard from "@/components/cards/vorschlagCard";
import test from "../../data/media.json";
import {useRouter, useSearchParams} from "next/navigation";
//import {useEffect, useState} from 'react';
import React, { Suspense } from 'react';
import textData from "@/data/texte.json";
import useAnimationToggle from "@/hooks/useAnimationToggle";

interface Bewertung {
    wert: number;
    label: string;
}

interface FragenKarteProps {
    bewertung: Bewertung[];
}



const Ergebnis = () => {
    const router = useRouter();
    const animate = useAnimationToggle(7000);
    const searchParams = useSearchParams()

    let mediaResults: { [index: string]: number } = {}
    let answers = JSON.parse(searchParams.get("answer") as string)

    for (let medium of test) {
        // @ts-ignore
        mediaResults[medium.code] = 0
        for (let attr in medium.codierung) {
            // @ts-ignore
            mediaResults[medium.code] += Math.pow(answers[attr - 1].value - medium.codierung[attr], 2) * answers[attr-1].weight
        }
        // @ts-ignore
        mediaResults[medium.code] = Math.sqrt(mediaResults[medium.code])
    }

    let sorted = Object.entries(mediaResults).sort((a, b) => {
        // @ts-ignore
        return a[1] - b[1]
    })
console.log(sorted)
    let winners = sorted.slice(0, 3)
    const favoriteCards: any[] = []
    favoriteCards.push(test.find((e, i) => {
        return e.code == winners[0][0]
    }))
    favoriteCards.push(test.find((e, i) => {
        return e.code == winners[1][0]
    }))
    favoriteCards.unshift(test.find((e, i) => {
        return e.code == winners[2][0]
    }))

    return (
        <div className=" text-dark p-8">
            <h1 className="text-4xl font-semibold">Auswertung</h1>
            <h2 className="text-xl">
                Diese Auswahl an Medien könnten Sie interessieren.
            </h2>

            <Suspense fallback={<div>Loading...</div>}>
                <div className="flex justify-center py-2 card">
                    {favoriteCards.map((card, index) => (
                        <VorschlagCard
                            key={index}
                            name={card.name}
                            beschreibung={card.beschreibung}
                            image={card.image}
                            mediumArt={card.mediumArt}
                            url={card.url}/>
                    ))}
                </div>
            </Suspense>
            <button
                onClick={() => router.push("/befragung")}
                className={`${
                    animate ? "animate__animated animate__headShake" : ""
                } mt-28 px-6 py-4 bg-blue text-white font-light text-2xl rounded-lg  shadow-md flex flex-row-reverse gap-3 justify-center items-center w-[400px] transition hover:shadow-2xl hover:scale-105 ease-in`}
            >
                <i className="pi pi-arrow-right" style={{fontSize: "1rem"}}/>
                {textData.repeat}
            </button>
        </div>
    );
}

export default Ergebnis
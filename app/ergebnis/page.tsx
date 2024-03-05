"use client";
import VorschlagCard from "@/components/cards/vorschlagCard";
import React from "react";
import test from "../../data/beispielMedium.json";
import {useSearchParams} from "next/navigation";
import {object} from "prop-types";

interface Bewertung {
    wert: number;
    label: string;
}

interface FragenKarteProps {
    bewertung: Bewertung[];
}

export default function Ergebnis() {
    let results: { [index: string]: any } = {}
    let mediaResults: { [index: string]: number } = {}
    const searchParams = useSearchParams()
    let answers = JSON.parse(searchParams.get("answer") as string)
    console.log(answers)
    for (let medium of test) {
        // @ts-ignore
        results[medium.code] = {}
        mediaResults[medium.code] = 0
        for (let attr in medium.codierung) {
            // @ts-ignore
            results[medium.code][attr - 1] = Math.abs(answers[attr - 1] - medium.codierung[attr])
            // @ts-ignore
            mediaResults[medium.code] += Math.pow(Math.abs(answers[attr - 1] - medium.codierung[attr]), 2)
        }
        // @ts-ignore
        mediaResults[medium.code] = Math.sqrt(mediaResults[medium.code])
    }

    let sorted = Object.entries(mediaResults).sort((a, b) => {
        // @ts-ignore
        return a[1] - b[1]
    })

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

            <div className="flex justify-center py-2">
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
        </div>
    );
}

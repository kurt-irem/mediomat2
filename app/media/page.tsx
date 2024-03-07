import React, {Suspense} from "react";
import data from "../../data/media.json"
import VorschlagCard from "@/components/cards/vorschlagCard";

export default function Gewichtung() {

    const cards: any[] = []
    for (let medium of data) {
        cards.push(medium)
    }
    return (
        <div className=" text-dark p-8">
            <h1 className="text-4xl font-semibold">Unsere Medien</h1>
            <h2 className="text-xl">
                Folgende Medien wurden von uns codiert
            </h2>

            <Suspense fallback={<div>Loading...</div>}>
                <div className="flex py-2 wrap">
                    {cards.map((card, index) => (
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
        </div>
    );
}
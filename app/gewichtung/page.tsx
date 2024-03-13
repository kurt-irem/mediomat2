"use client";
import GewichtungsCard from "@/components/cards/gewichtungsCard";
import React from "react";
import data from "../../data/questions.json"
import {useRouter, useSearchParams} from "next/navigation";
import {router} from "next/client";
import useAnimationToggle from "@/hooks/useAnimationToggle";

interface Answer {
    value: number;
    weight: number;
}

export default function Gewichtung() {
    const animate = useAnimationToggle(7000);
    const router = useRouter();
    const questions: any[] = []
    for (let category of data["fragen"]) {
        for (let question of category.fragenliste) {
            questions.push(question.frage)
        }
    }

    const searchParams = useSearchParams()
    let output: Answer[] = []
    let answers = JSON.parse(searchParams.get("answer") as string)
    for (let i = 0; i < answers.length; i++) {
        output.push({
            value: answers[i],
            weight: 1
        })
    }

    function doubleWeight(question: number) {
        output[question].weight = output[question].weight == 1 ? 2 : 1
        console.log(output)
    }


    return (
        <div className="px-10 h-screen bg-gray-100 text-dark pt-[104px]">
            <div className="flex flex-col gap-6 mb-10">
                <h1 className="font-semibold text-[56px]">Gewichtung der Thesen</h1>
                <h3 className="text-2xl max-w-[900px]">
                    Welche Thesen sind Ihnen besonders wichtig? Markieren Sie die Thesen,
                    um diese mit doppelter Gewichtung in die Berechnung einfließen zu
                    lassen.
                </h3>
                {questions.map((val, ind) => (
                    <div onClick={() => {
                        doubleWeight(ind)
                    }}>
                        <GewichtungsCard
                            frage={val}
                        />
                    </div>
                ))}
                <div className="flex flex-col items-center text-center">
                    <button onClick={() => router.push("/ergebnis?answer=" + JSON.stringify(output))}
                            className={`${
                                animate ? "animate__animated animate__headShake" : ""
                            } mt-28 px-6 py-4 bg-blue text-white font-light text-2xl rounded-lg  shadow-md flex flex-row-reverse gap-3 justify-center items-center w-[400px] transition hover:shadow-2xl hover:scale-105 ease-in`}
                    >
                        <i className="pi pi-arrow-right" style={{fontSize: "1rem"}}/>
                        Zeige mir das Ergebnis!
                    </button>
                    <br/><br/>
                </div>
            </div>

        </div>
    );
}

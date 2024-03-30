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
        <div id="gPage" className="px-10 h-screen bg-gray-100 text-dark pt-[104px]">
            <div className="flex flex-col gap-6 mb-10">
                <h1 className="font-semibold text-[56px]">Gewichtung der Thesen</h1>
                <h3 className="text-2xl max-w-[900px]">
                    Welche Thesen sind Ihnen besonders wichtig? Markieren Sie die Thesen,
                    um diese mit doppelter Gewichtung in die Berechnung einfließen zu
                    lassen.
                </h3>
                <div id="gKat">
                    <p>Plattform</p>
                    <div onClick={() => {
                            doubleWeight(0)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[0]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(1)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[1]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(2)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[2]}
                        />
                    </div>
                </div>
                <div id="gKat">
                    <p>Form</p>
                    <div onClick={() => {
                            doubleWeight(3)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[3]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(4)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[4]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(5)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[5]}
                        />
                    </div>
                </div>
                <div id="gKat">
                    <p>Beitragslänge</p>
                    <div onClick={() => {
                            doubleWeight(6)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[6]}
                        />
                    </div>
                </div>
                <div id="gKat">
                    <p>Frequenz</p>
                    <div onClick={() => {
                            doubleWeight(7)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[7]}
                        />
                    </div>
                </div>
                <div id="gKat">
                    <p>Kosten</p>
                    <div onClick={() => {
                            doubleWeight(8)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[8]}
                        />
                    </div>
                </div>
                <div id="gKat">
                    <p>Redaktion</p>
                    <div onClick={() => {
                            doubleWeight(9)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[9]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(10)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[10]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(11)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[11]}
                        />
                    </div>
                </div>
                <div id="gKat">
                    <p>Inhalt</p>
                    <div onClick={() => {
                            doubleWeight(12)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[12]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(13)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[13]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(14)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[14]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(15)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[15]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(16)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[16]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(17)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[17]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(18)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[18]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(19)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[19]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(20)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[20]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(21)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[21]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(22)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[22]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(23)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[23]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(24)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[24]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(25)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[25]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(26)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[26]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(27)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[27]}
                        />
                    </div>
                    <div onClick={() => {
                            doubleWeight(28)
                        }}>
                        <GewichtungsCard
                        
                            frage={questions[28]}
                        />
                    </div>
                </div>
                {/*{questions.map((val, ind) => (

                    <div onClick={() => {
                        doubleWeight(ind)
                    }}>
                        <GewichtungsCard
                            frage={val}
                        />
                    </div>
                ))}*/}
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

"use client";
import GewichtungsCard from "@/components/cards/gewichtungsCard";
import React, { useState } from "react";
import data from "../../data/questions.json";
import { useRouter, useSearchParams } from "next/navigation";
import { router } from "next/client";
import MenuButton from "@/components/menu";

interface Answer {
  value: number;
  weight: number;
}

export default function Gewichtung() {
  const router = useRouter();

  const questions: any[] = [];
  for (let category of data["fragen"]) {
    for (let question of category.fragenliste) {
      questions.push(question.frage);
    }
  }

  const [showMore, setShowMore] = useState(false);

  const searchParams = useSearchParams();
  let output: Answer[] = [];
  let answers = JSON.parse(searchParams.get("answer") as string);
  for (let i = 0; i < answers.length; i++) {
    output.push({
      value: answers[i],
      weight: 1,
    });
  }

  function doubleWeight(question: number) {
    output[question].weight = output[question].weight == 1 ? 2 : 1;
    console.log(output);
  }

  return (
    <div className="w-screen h-screen px-3 md:px-10 pt-16 ">
    
      <div></div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-semibold text-2xl sm:text-4xl">
          Gewichtung der Thesen
        </h1>
        <h3 className=" text-sm sm:text-xl max-w-[900px] p-2 pl-5  sm:p-10 ">
          Welche Thesen sind Ihnen besonders wichtig? Markieren Sie die Thesen,
          um diese mit doppelter Gewichtung in die Berechnung einfließen zu
          lassen.
        </h3>

        <div className="flex flex-col bg-secondary-100 rounded-2xl"> 
        <div
          className={`mb-1 flex flex-col gap-3 items-center bg-secondary-100 max-w-[1000px] rounded-2xl pb-5  overflow-hidden transition-all duration-300 ease-in-out ${
            showMore ? "" : "max-h-[800px]"
          }`}
        >
          {questions.map((frage, index) => (
            <div className="w-full px-5 md:px-10" key={index}>
              {index === 0 ? (
                <p className="gewichtungCategory">Plattform</p>
              ) : (
                ""
              )}
              {index === 3 ? <p className="gewichtungCategory">Form</p> : null}
              {index === 6 ? (
                <p className="gewichtungCategory">Beitragslänge</p>
              ) : (
                ""
              )}
              {index === 7 ? (
                <p className="gewichtungCategory">Frequenz</p>
              ) : (
                ""
              )}
              {index === 8 ? <p className="gewichtungCategory">Kosten</p> : ""}
              {index === 9 ? (
                <p className="gewichtungCategory">Redaktion</p>
              ) : (
                ""
              )}
              {index === 12 ? <p className="gewichtungCategory">Inhalt</p> : ""}
              <GewichtungsCard
                key={index}
                frage={frage}
                onClick={() => {
                  doubleWeight(index);
                }}
              />
            </div>
          ))}
        </div>
        
          <button
            className=" text-secondary-400 font-medium hover:text-gray-700"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? (
              <div className="flex flex-row gap-3 items-center justify-center pb-5">
                <p>Weniger anzeigen</p>
                <i
                  className="pi pi-chevron-up"
                  style={{ fontSize: "1em", fontWeight: "bold" }}
                ></i>
              </div>
            ) : (
             <div className="flex flex-row gap-3 items-center justify-center py-3 md:py-5 border-t border-secondary-300">
                <p>Alle anzeigen</p>
                <i
                  className="pi pi-chevron-down "
                  style={{ fontSize: "1em", fontWeight: "bold" }}
                ></i>
              </div>
            )}
          </button>
        </div>

        <div className="flex flex-col items-center text-center mt-10">
          <button
            type="button"
            onClick={() =>
              router.push("/ergebnis?answer=" + JSON.stringify(output))
            }
            className="mt-2 px-10 py-4 bg-primary-250 border border-primary-300 text-lg md:text-xl  shadow-md flex flex-row-reverse gap-3 justify-center items-center rounded-2xl transition hover:bg-primary-200 hover:scale-105 ease-in uppercase"
          >
            <i className="pi pi-arrow-right" style={{ fontSize: "1.3rem" }}></i>
            zur auswertung
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

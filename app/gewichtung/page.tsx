"use client";
import GewichtungsCard from "@/components/cards/gewichtungsCard";
import React, { useEffect, useState } from "react";
import data from "../../data/questions.json";
import { useRouter, useSearchParams } from "next/navigation";
import useAnimationToggle from "@/hooks/useAnimationToggle";

interface Answer {
  value: number;
  weight: number;
}

export default function Gewichtung() {
  const animate = useAnimationToggle(7000);
  const router = useRouter();
  const questions: any[] = [];
  for (let category of data["fragen"]) {
    for (let question of category.fragenliste) {
      questions.push(question.frage);
    }
  }

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
    console.log(output[question].weight);
  }

  return (
    <div className="px-10 h-screen  text-dark pt-10">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-[56px]">Gewichtung der Thesen</h1>
        <h3 className="text-2xl max-w-[900px] mb-10">
          Welche Thesen sind Ihnen besonders wichtig? Markieren Sie die Thesen,
          um diese mit doppelter Gewichtung in die Berechnung einfließen zu
          lassen.
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {questions.map((val, ind) => (
            <div
              key={ind}
              onClick={() => {
                doubleWeight(ind);
              }}
            >
              <GewichtungsCard frage={val} />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center text-center mt-14">
          {/* <p className="mb-2 text-[#c4c4c4]">These(n) wurde(n) ausgewählt</p> */}
          <button
            onClick={() =>
              router.push("/ergebnis?answer=" + JSON.stringify(output))
            }
            className={`${
              animate ? "animate__animated animate__headShake" : ""
            } px-6 py-4 bg-[#C86BFA10] hover:bg-[#C86BFA24] text-[#C86BFA] font-light text-2xl rounded-lg flex flex-row-reverse gap-3 justify-center items-center w-[400px] transition hover:scale-105 ease-in uppercase font-medium`}
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

"use client";

import FragenKarte from "@/components/cards/fragenKarte";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ProgressBar from "@/components/progressBar";
import CancelButton from "@/components/buttons/cancelButton";

// import JSON
import data from "../../data/questions.json";

export default function Befragung() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hideExample, setHideExample] = useState(false);
  const [summe, setSumme] = useState(0);
  const [currentQuestValue, setCurrentQuestValue] = useState<number[]>([]);


  const handleNextQuestion = (value: number) => {
    setCurrentQuestValue((prev) => [...prev, value]);
    setSumme((prev) => prev + value);
    let updatedSumme = summe + value;
    let updateQuestValue = [...currentQuestValue, value];
    if (currentQuestionIndex + 1 < totalQuestionCount) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      router.push("/gewichtung?answer=" + JSON.stringify(updateQuestValue));
    }
  };

  const handleQuestionBefore = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSumme(
        (prev) => prev - currentQuestValue[currentQuestValue.length - 1]
      );
      setCurrentQuestValue((prev) => prev.slice(0, -1));
    }
  };

  // Helper
  let totalQuestionCount = data.fragen.reduce(
    (acc, curr) => acc + curr.fragenliste.length,
    0
  );

  let currentQuestion = null;
  let currentCategoryIndex = 0;
  for (let i = 0; i < data.fragen.length; i++) {
    if (
      currentQuestionIndex >= currentCategoryIndex &&
      currentQuestionIndex <
        currentCategoryIndex + data.fragen[i].fragenliste.length
    ) {
      currentQuestion =
        data.fragen[i].fragenliste[currentQuestionIndex - currentCategoryIndex];
      break;
    }
    currentCategoryIndex += data.fragen[i].fragenliste.length;
  }

  return (
    <div className="w-screen h-screen px-3 md:px-7 pt-10 md:pt-0">
      <div className="">
        <CancelButton></CancelButton>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col gap-4 items-center " >
          <div className="flex flex-row w-full max-w-[850px] items-center justify-center py-2">
            {/* Zurück-Button */}
            {currentQuestionIndex > 0 && (
              <div className="px-4 md:px-6">
                <button
                  onClick={handleQuestionBefore}
                  type="button"
                  className="´text-gray-700 rounded-full flex gap-2 justify-center items-center w-min hover:scale-110"
                >
                  <i
                    className="pi pi-arrow-left"
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                  ></i>
                </button>
              </div>
            )}
            <ProgressBar
              current={currentQuestionIndex}
              total={totalQuestionCount}
            />
            <p className=" text-gray-500 px-4 md:px-6 tracking-wide">
              {currentQuestionIndex + 1 + "/" + totalQuestionCount}
            </p>
          </div>
          <div className="flex flex-row pb-2 md:pb-12">
            {currentQuestion && (
              <FragenKarte
                frage={currentQuestion.frage}
                //kategorie={data.fragen[currentQuestionIndex].kategorie}
                beschreibung={currentQuestion?.beschreibung}
                handleNextQuestion={handleNextQuestion}
                fragenCounter={{
                  index: currentQuestionIndex + 1,
                  counter: totalQuestionCount,
                }}
                bewertung={currentQuestion.bewertung}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

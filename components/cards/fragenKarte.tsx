import React, { useState } from "react";
import FrageButton from "../buttons/frageButtun";

interface Bewertung {
  wert: number;
  label: string;
}

interface FragenKarteProps {
  frage: string;
  kategorie?: string;
  fragenCounter: { index: number; counter: number };
  bewertung: Bewertung[];
  handleNextQuestion: (value: number) => void;
}

export default function FragenKarte({
  frage,
  fragenCounter,
  kategorie,
  handleNextQuestion,
  bewertung,
}: FragenKarteProps) {
  const handleButtonClick = (value: number) => {
    handleNextQuestion(value);
  };

  return (
    <div className="flex flex-col gap-10 max-w-[1000px] rounded-2xl px-[64px] py-[49px] shadow-lg bg-white text-dark">
      <h3 className="font-semibold text-2xl leading-[140%]">
        {/* TODO - Kategorie hinzufügen, falls wir das brauchen! */}
        {"Frage " + fragenCounter.index + " von " + fragenCounter.counter}
      </h3>
      <h2 className="font-normal text-[40px] leading-[140%]">{frage + "?"}</h2>
      <div className="flex flex-row justify-between gap-6 mt-6">
        {bewertung.map((frage, index) => (
          <FrageButton
            key={index}
            label={frage.label}
            handleClick={() => handleButtonClick(frage.wert)}
          />
        ))}
      </div>
    </div>
  );
}

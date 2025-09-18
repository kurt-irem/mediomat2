import React, { useState } from "react";
import FrageButton from "../buttons/frageButton";
import BeschreibungsButton from "@/components/buttons/beschreibungsButton";
import BeschreibungsCard from "@/components/cards/beschreibungsCard";

interface Bewertung {
  wert: number;
  label: string;
}

interface FragenKarteProps {
  frage: string;
  kategorie?: string;
  beschreibung?: string;
  fragenCounter: { index: number; counter: number };
  bewertung: Bewertung[];
  handleNextQuestion: (value: number) => void;
}

export default function FragenKarte({
  frage,
  fragenCounter,
  kategorie,
  beschreibung,
  handleNextQuestion,
  bewertung,
}: FragenKarteProps) {
  const handleButtonClick = (value: number) => {
    handleNextQuestion(value);
  };
  const [hideExample, setHideExample] = useState(false);

  return (
    <div
      className="relative flex flex-col gap-6 sm:gap-8 md:gap-10 
                 max-w-[1000px] rounded-[20px] 
                px-4 sm:px-8 md:px-16 
                py-7 sm:py-8 md:py-10 
                shadow-lg bg-secondary-100 items-center"
    >
      <div className="absolute top-4 right-4 md:top-5 md:right-5">
        <BeschreibungsButton
          hideExample={hideExample}
          handleClick={() => setHideExample(!hideExample)}
        />
      </div>
      <div className="w-full flex justify-between items-center">
        <h2 className="font-normal text-xl sm:text-2xl md:text-3xl break-words pt-5 px-6">
          {frage + "."}
        </h2>

        <BeschreibungsCard
          hideExample={!hideExample}
          handleClick={() => setHideExample(false)}
          beschreibung={beschreibung || ""}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-6">
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

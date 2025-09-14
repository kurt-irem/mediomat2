"use client";

import { useRouter } from "next/navigation";
import React from "react";
import textData from "../data/texte.json";
import MenuButton from "@/components/menu";

/**
 *
 *  Startseite von Medi-o-Mat
 *
 */
export default function Home() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen py-2 px-2 sm:px-4 md:px-5 ">
      <div className=" relative">
        <MenuButton></MenuButton>
      </div>
  
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="flex flex-col items-center text-center w-full max-w-[1000px] bg-secondary-100 rounded-[20px] border border-secondary-300 px-6 sm:px-10 md:px-16 py-12 md:py-16 ">
          <h1
            className="font-semibold font-mono tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-[80px]"
          >
            {textData.anwendungsName}
          </h1>
          <p
            className="mt-12 md:mt-16 max-w-[850px] font-normal text-base md:text-xl text-justify hyphens-auto"
          >
            {textData.ersteInformation}
          </p>

          <button
            onClick={() => router.push("/befragung")}
            className="mt-10 md:mt-16 px-10 py-4 bg-primary-base border border-primary-300  text-xl md:text-2xl shadow-md flex flex-row-reverse gap-3 justify-center items-center rounded-2xl transition hover:bg-primary-200 hover:scale-105 ease-in uppercase"
          >
            <i className="pi pi-arrow-right" style={{ fontSize: "1.2rem" }} />
            {textData.startButton}
          </button>
        </div>
      </div>

      <div id="about" className="py-5 px-6 md:px-10 flex flex-col gap-10 md:gap-20 justify-center items-center">
        <div className="flex flex-col gap-6 max-w-[800px]">
          <h2 className="font-semibold text-2xl md:text-3xl">
            {textData.wasIstWahlOMatHeader}
          </h2>
          <p className="text-justify hyphens-auto leading-7" style={{ whiteSpace: "pre-wrap" }}>
            {textData.wasIstWahlOMatSubtext}
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-[800px]">
          <h2 className="font-semibold text-2xl md:text-3xl">{textData.resultsHeader}</h2>
          <p className="text-justify hyphens-auto leading-7" style={{ whiteSpace: "pre-wrap" }}>{textData.resultsSubtext}</p>
        </div>

        <div className="flex flex-col gap-6 max-w-[800px]">
          <h2 className="font-semibold text-2xl md:text-3xl">
            {textData.disclaimerHeader}
          </h2>
          <div>
            <p className="text-justify hyphens-auto leading-7" style={{ whiteSpace: "pre-wrap" }}>{textData.disclaimerSubtext}</p>
            <button
              onClick={() => router.push("/media")}
              className="underline text-gray-400 font-medium py-1"
            >
              {textData.medienuebersichtButton}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

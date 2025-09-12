"use client";

import useAnimationToggle from "@/hooks/useAnimationToggle";
import { useRouter } from "next/navigation";
import React from "react";
import textData from "../data/texte.json";

/**
 *
 *  Startseite von Medi-o-Mat
 *
 */
export default function Home() {
  const router = useRouter();
  const animate = useAnimationToggle(7000);

  return (
    <div className="w-screen px-3 sm:px-4 md:px-5">
      <div  className="flex items-center justify-center min-h-screen px-4" >

      
      <div className="flex flex-col items-center text-center w-full max-w-[1100px] px-6 sm:px-10 md:px-20 py-20 mybox">
        <h1 className="font-semibold ont-mono tracking-wide  
        text-5xl sm:text-6xl md:text-7xl lg:text-[80px]" >
          {textData.anwendungsName}
        </h1>
        <p
          className="mt-16 max-w-[800px] font-normal text-l md:text-xl text-justify hyphens-auto"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {textData.ersteInformation}
        </p>
        
         <button
          onClick={() => router.push("/befragung")}
          className=" mt-20 px-10 py-4 bg-primary-base border border-primary-300 text-2xl shadow-md flex flex-row-reverse gap-3 justify-center items-center rounded-2xl transition hover:bg-primary-200 hover:scale-105 ease-in uppercase"
        >
          <i className="pi pi-arrow-right" style={{ fontSize: "1.2rem" }} />
          {textData.startButton}
        </button>
        
      </div>
      </div>

      <button
          onClick={() => router.push("/media")}
          className="underline mt-6 text-lg text-gray-400 font-medium"
        >
          {textData.medienuebersichtButton}
        </button>

      <div className="py-[180px] flex flex-col gap-20 justify-center items-center">
        <div className="flex flex-col gap-6 max-w-[800px]">
          <h2 className="font-semibold text-3xl">
            {textData.wasIstWahlOMatHeader}
          </h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {textData.wasIstWahlOMatSubtext}
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-[800px]">
          <h2 className="font-semibold text-3xl">{textData.resultsHeader}</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{textData.resultsSubtext}</p>
        </div>

        <div className="flex flex-col gap-6 max-w-[800px]">
          <h2 className="font-semibold text-3xl">
            {textData.disclaimerHeader}
          </h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{textData.disclaimerSubtext}</p>
        </div>
      </div>
    </div>
  );
}

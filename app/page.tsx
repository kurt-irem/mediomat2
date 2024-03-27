"use client";

import useAnimationToggle from "@/hooks/useAnimationToggle";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
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
    <div className="bg-gray-100 h-full w-full px-4 text-dark">
      <div className="flex flex-col items-center text-center pt-24">
        <h1 className="text-[96px] font-semibold text-dark">
          {textData.anwendungsName}
        </h1>
        <p className="text-dark mt-16 max-w-[800px] font-normal text-xl"  style={{ whiteSpace: "pre-wrap" }}>
          {textData.ersteInformation}
        </p>
        <button
          onClick={() => router.push("/befragung")}
          className={`${
            animate ? "animate__animated animate__headShake" : ""
          } mt-28 px-6 py-4 bg-blue text-white font-light text-2xl rounded-lg  shadow-md flex flex-row-reverse gap-3 justify-center items-center w-[400px] transition hover:shadow-2xl hover:scale-105 ease-in`}
        >
          <i className="pi pi-arrow-right" style={{ fontSize: "1rem" }} />
          {textData.startButton}
        </button>
      </div>

      <div className="py-[180px] flex flex-col gap-20 justify-center items-center">
        <div className="flex flex-col gap-6 max-w-[800px]">
          <h2 className="font-semibold text-3xl">
            {textData.wasIstWahlOMatHeader}
          </h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{textData.wasIstWahlOMatSubtext}</p>
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

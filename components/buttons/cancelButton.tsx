"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CancelButton() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-50 text-gray-600 md:hover:scale-110"
        aria-label="Befragung abbrechen"
      >
        <i
          className="pi pi-times-circle"
          style={{ fontSize: "1.5rem", fontWeight: "" }}
        ></i>
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-50 rounded-2xl shadow-xl p-6 max-w-md w-full text-center mx-2">
            <h2 className="text-lg font-semibold mb-4">
              Zurück zur Startseite?
            </h2>
            <p className="text-gray-600 mb-6">
              Wenn du den Fragebogen jetzt verlässt, werden deine bisherigen
              Antworten nicht gespeichert.
            </p>

            <div className="flex justify-center gap-6">
              <button
                onClick={() => router.push("/")}
                className="px-4 py-2 rounded-lg bg-secondary-275 hover:bg-secondary-300 text-black"
              >
                Startseite
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
              >
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

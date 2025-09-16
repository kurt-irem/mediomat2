"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function MenuButton() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don’t render on server → avoids hydration mismatch
  if (!mounted) return null;

  //Close menu on outside click
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target as Node)) {
//         setOpen(false);
//       }
//     }

//     if (open) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [open]);

  return (
     <div ref={menuRef}>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-4 right-4 z-50 text-black p-3 rounded-lg"
      >
        <i className="pi pi-bars " style={{'fontSize': '1.2em', fontWeight: "bold"}}></i>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute top-4 right-4 bg-secondary-50 shadow-lg rounded-lg p-5 flex flex-col gap-2 z-40">
          <Link href="/" onClick={() => setOpen(false)}
          className=" hover:text-secondary-400 hover:scale-105 ">Startseite</Link>
          <Link href="/befragung/" onClick={() => setOpen(false)}
          className=" hover:text-secondary-400 hover:scale-105" >Befragung</Link>
          <Link href="/#about" onClick={() => setOpen(false)}
          className=" hover:text-secondary-400 hover:scale-105">Über den Mediomat</Link>
          <Link href="/media" onClick={() => setOpen(false)}
          className=" hover:text-secondary-400 hover:scale-105 ">Medienübersicht</Link>
        </div>
      )}
    </div>
  );
}

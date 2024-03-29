import React from "react";

export default function GewichtungsCard({ frage }: { frage?: string }) {
  let bar: React.RefObject<HTMLDivElement> = React.createRef();
  let marker: React.RefObject<HTMLParagraphElement> = React.createRef();

  function mark() {
    if (bar.current != null) {
      //if (bar.current.classList.contains('bg-white'))
      // bar.current.classList.remove('bg-white')
      // bar.current.classList.add('bg-blue', 'text-white')
      //   bar.current.classList.toggle("bg-white");
      bar.current.classList.toggle("ring-2");
      bar.current.classList.toggle("ring-[#C86BFA]");
      bar.current.classList.toggle("bg-[#C86BFA10]");
      bar.current.classList.toggle("text-[#C86BFA]");
    }
    if (marker.current != null) {
      marker.current.classList.toggle("opacity-0");
    }
  }

  return (
    <div
      ref={bar}
      className="p-4 bg-[#f9f9f9] hover:bg-[#C86BFA32] rounded-lg relative overflow-hidden cursor-pointer"
    >
      <p
        onClick={mark}
        ref={marker}
        className="opacity-0 transition-opacity duration-300 absolute inset-0 flex justify-start items-center hover:opacity-100 ml-5 font-semibold text-lg"
      >
        2x
      </p>
      <p className="pl-16 font-medium text-2xl">{frage}</p>
    </div>
  );
}

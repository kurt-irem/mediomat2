import React from "react";

export default function GewichtungsCard({
  frage,
  onClick,
}: {
  frage?: string;
  onClick: () => void;
}) {
  let bar: React.RefObject<HTMLDivElement> = React.createRef();
  let marker: React.RefObject<HTMLParagraphElement> = React.createRef();

  function mark() {
    if (bar.current != null) {
      //if (bar.current.classList.contains('bg-white'))
      // bar.current.classList.remove('bg-white')
      // bar.current.classList.add('bg-blue', 'text-white')
      //   bar.current.classList.toggle("bg-white");
      bar.current.classList.toggle("border-secondary-300");
      bar.current.classList.toggle("bg-secondary-200");
    }
    if (marker.current != null) {
      marker.current.classList.toggle("opacity-0");
    }
  }

  return (
    <div
      onClick={onClick}
      ref={bar}
      className="p-3 rounded-lg border-2 border-secondary-200 relative overflow-show cursor-pointer  hover:bg-secondary-150 hover:border-secondary-300 focus:outline-none "
    >
      <p
        onClick={mark}
        ref={marker}
        className="opacity-0 transition-opacity duration-200 absolute inset-0 flex justify-start items-center hover:opacity-100 ml-5 font-bold text-lg sm:text-xl text-black"
      >
        2x
      </p>
      <p className="pl-12 md:pl-16 font-medium text-sm sm:text-xl ">{frage}</p>
    </div>
  );
}

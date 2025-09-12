import { useState } from "react";

export default function VorschlagCard({
  name,
  beschreibung,
  image,
  url,
  mediumArt,
  codierung,
  cardClassName,
  cardIndex,
}: {
  cardIndex?: number;
  cardClassName?: string;
  codierung?: number;
  mediumArt?: string;
  url?: string;
  name: string;
  beschreibung: string;
  image: string;
}) {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    setShowMore(!showMore);
  };
  return (
    <div
      className={`${cardClassName} ${
        cardIndex === 0
          ? "silver-border"
          : cardIndex === 1
          ? "gold-border"
          : cardIndex === 2
          ? "bronze-border"
          : "border-2 border-gray-200"
      } bg-white p-6 w-[332px] min-h-[700px] rounded-2xl hover:scale-95 scale-90 flex justify-between flex-col shadow-xl transition-all`}
    >
      <div className="flex flex-col gap-6">
        <span>
          <p className="px-2 bg-gray-100 text-gray-500 w-min rounded-md font-medium tracking-[1px] uppercase text-sm">
            {mediumArt}
          </p>
          <h2
            className="font-semibold text-2xl px-1 mt-1 uppercase"
            title={name}
          >
            {name.length > 27 ? `${name.slice(0, 27)}...` : name}
          </h2>
        </span>
        <img
          src={image}
          alt="medium"
          className="rounded-lg h-[200px] bg-contain"
        />
        {beschreibung && (
          <p className="text-base">
            {showMore
              ? beschreibung
              : `${beschreibung.slice(0, 200)}${
                  beschreibung.length > 200 ? "..." : ""
                }`}
          </p>
        )}
        {beschreibung && beschreibung.length > 200 && (
          <button onClick={handleClick} className="text-[#c4c4c4] rounded-md">
            {showMore ? "Weniger anzeigen" : "mehr anzeigen..."}
          </button>
        )}
      </div>
      {codierung}
      <a
        href={url ? url : "/"}
        className="uppercase cursor-pointer"
        target="_blank"
      >
        <div className="mt-8 flex items-baseline gap-4 justify-center p-2 rounded-lg bg-black text-white cursor-pointer">
          zum medium
          <i className="pi pi-external-link text-sm cursor-pointer"></i>
        </div>
      </a>
    </div>
  );
}
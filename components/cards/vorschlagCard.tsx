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
          ? " border-2 scale-95 md:mb-5"
          : cardIndex === 1
          ? " border-2 scale-90 md:mb-3"
          : cardIndex === 2
          ? "scale-90"
          : "border-1 border-gray-200"
      } bg-secondary-100 scale-90 p-6 max-w-[1200px] min-h-[100px] rounded-2xl flex justify-between flex-col shadow-xl transition-all border border-secondary-300`}
    >
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="flex justify-center">
          <img
            src={image}
            alt="medium"
            className="rounded-lg h-[200px] max-w-[200px] bg-contain"
            // w-full h-[200px] sm:max-w-[200px]  sm:w-auto
          />
        </div>
        <div>
          <span>
            <p className="px-2 bg-gray-50 text-gray-500 border border-gray-300 w-min rounded-md font-medium tracking-[1px] uppercase text-sm">
              {mediumArt}
            </p>
            <h2
              className="font-semibold text-xl md:text-2xl py-3 m-1 uppercase"
              title={name}
            >
              {name.length > 27 ? `${name.slice(0, 27)}...` : name}
            </h2>
          </span>

          <div>
            {beschreibung && (
              <p className="text-base text-justify hyphens-auto md:pr-5 ">
                {showMore
                  ? beschreibung
                  : `${beschreibung.slice(0, 200)}${
                      beschreibung.length > 200 ? "..." : ""
                    }`}
              </p>
            )}
            {beschreibung && beschreibung.length > 200 && (
              <button
                onClick={handleClick}
                className="text-[#c4c4c4] rounded-md py-2"
              >
                {showMore ? "weniger anzeigen" : "mehr anzeigen..."}
              </button>
            )}
          </div>
          <a
            href={url ? url : "/"}
            className="uppercase cursor-pointer"
            target="_blank"
          >
            <div className="mt-8 flex items-center gap-4 justify-center max-w-[200px] p-2 rounded-lg bg-black text-white cursor-pointer hover:bg-slate-300">
              zum medium
              <i className="pi pi-external-link text-sm cursor-pointer"></i>
            </div>
          </a>
        </div>
        {codierung}
      </div>
    </div>
  );
}

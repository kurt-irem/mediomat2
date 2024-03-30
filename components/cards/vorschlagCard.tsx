export default function VorschlagCard({
  name,
  place,
  dot,
  word,
  beschreibung,
  image,
  url,
  mediumArt,
  codierung,
}: {
  codierung?: number;
  mediumArt?: string;
  url?: string;
  name: string;
  place: string;
  dot: string;
  word: string;
  beschreibung: string;
  image: string;
}) {

  if (beschreibung.length > 10) {
      var short = (beschreibung.substring(0, 100));
  }
  else {
      var short = beschreibung;
  }

  if (beschreibung.length > 10) {
      var long =  (beschreibung.substring(100, beschreibung.length));
  }
  else {
      var long = "";
  }
  
  return (
    <div className="bg-white p-6 w-[332px] min-h-[500px] rounded-2xl hover:scale-95 scale-90 flex justify-between flex-col shadow-xl border-2 border-gray-200 transition-all">
      <div id="vCard" className="flex flex-col gap-6">
        <span>
          <p className="px-2 bg-gray-100 text-gray-500 w-min rounded-md font-medium tracking-[1px] uppercase text-sm">
            {mediumArt}
          </p>
          <h2
            className="font-semibold text-2xl px-1 mt-1 uppercase"
            title={name}
          >
            {name.length > 25 ? `${name.slice(0, 27)}...` : name}
          </h2>
        </span>
        <img
          src={image}
          alt="medium"
          className="rounded-lg h-[200px] bg-contain"
        />
        <p className="max-h-[600px] text-base">{short}<span id={dot}>...</span><span id={place}>{long}</span></p>
        <button onClick={() => {
          var dots = document.getElementById(dot);
          var moreText = document.getElementById(place);
          var btnText = document.getElementById(word);
          if(dots && moreText && btnText){
            if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
            } else {
              dots.style.display = "none";
              btnText.innerHTML = "Read less";
              moreText.style.display = "inline";
            }
          }}} id={word}
        >Read more</button>
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

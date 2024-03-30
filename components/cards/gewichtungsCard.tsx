import React from "react";


export default function GewichtungsCard({
                                            frage,
                                        }: {
    frage?: string;
}) {

    let bar: React.RefObject<HTMLDivElement> = React.createRef()
    let marker: React.RefObject<HTMLParagraphElement> = React.createRef()

    function mark() {
        if (bar.current != null) {
            //if (bar.current.classList.contains('bg-white'))
           // bar.current.classList.remove('bg-white')
           // bar.current.classList.add('bg-blue', 'text-white')
            bar.current.classList.toggle('bg-white')
            bar.current.classList.toggle('bg-blue')
            bar.current.classList.toggle('text-white')
        }
        if (marker.current != null) {
            marker.current.classList.toggle('opacity-0')
        }
    }

    return (
        <div id="gKarte" ref={bar} className="p-4 bg-white hover:border-blue rounded-lg relative overflow-hidden cursor-pointer shadow-md">
            <p onClick={mark} ref={marker}
               className="opacity-0 transition-opacity duration-300 absolute inset-0 flex justify-start items-center hover:opacity-100 ml-5 font-semibold text-lg">
                2x
            </p>
            <p id= "gFrage" className="pl-16 font-medium text-2xl">{frage}</p>
        </div>
    );
}

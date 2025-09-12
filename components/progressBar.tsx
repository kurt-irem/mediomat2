import React from "react";

export default function ProgressBar({ 
  

  current, total}: {
  current: number;
  total: number; }) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full md:py-5">
      <div className=" bg-primary-100 rounded-full h-5">
        <div
          className="bg-primary-300 h-5 rounded-full transition-all duration-300 "
          style={{ width: `${progress}%` }}
          
        >
          {/* <div>
          {(current + 1) + "/" + total}
        </div> */}
        </div>
        
      </div>
    </div>
    
  );
}

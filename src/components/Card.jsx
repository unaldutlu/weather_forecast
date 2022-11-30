import React from "react";
import Forecast from "./Forecast";
import Location from "./Location";

function Card() {
  return (
    <div className='border-2 border-solid border-slate-600 rounded-xl w-auto bg-slate-400 m-10 mt-3'>
      <Location />
      <Forecast />
    </div>
  );
}

export default Card;

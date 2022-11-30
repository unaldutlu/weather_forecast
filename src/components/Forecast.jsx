import React from "react";

function Forecast() {
  return (
    <div className='bg-slate-200 p-4 m-4 mt-0 flex flex-wrap justify-evenly items-center rounded-xl gap-3'>
      <div className='border-2 border-solid border-slate-600 w-28 h-36'>
        <div className='bg-red-300 h-9 flex justify-center items-center font-semibold'>
        Monday
        </div>
        <div className='bg-red-500 h-20 flex justify-center items-center'>
          İcon
        </div>
        <div className='bg-red-700 flex justify-center items-center'>
          Derece
        </div>
      </div>
      <div className='border-2 border-solid border-slate-600 w-28 h-36'>
        <div className='bg-red-300 h-9 flex justify-center items-center'>
        Tuesday 
        </div>
        <div className='bg-red-500 h-20 flex justify-center items-center'>
          İcon
        </div>
        <div className='bg-red-700 flex justify-center items-center'>
          Derece
        </div>
      </div>
      <div className='border-2 border-solid border-slate-600 w-28 h-36'>
        <div className='bg-red-300 h-9 flex justify-center items-center'>
        Wednesday 
        </div>
        <div className='bg-red-500 h-20 flex justify-center items-center'>
          İcon
        </div>
        <div className='bg-red-700 flex justify-center items-center'>
          Derece
        </div>
      </div>
      <div className='border-2 border-solid border-slate-600 w-28 h-36'>
        <div className='bg-red-300 h-9 flex justify-center items-center'>
        Thursday 
        </div>
        <div className='bg-red-500 h-20 flex justify-center items-center'>
          İcon
        </div>
        <div className='bg-red-700 flex justify-center items-center'>
          Derece
        </div>
      </div>
      <div className='border-2 border-solid border-slate-600 w-28 h-36'>
        <div className='bg-red-300 h-9 flex justify-center items-center'>
        Friday 
        </div>
        <div className='bg-red-500 h-20 flex justify-center items-center'>
          İcon
        </div>
        <div className='bg-red-700 flex justify-center items-center'>
          Derece
        </div>
      </div>
      <div className='border-2 border-solid border-slate-600 w-28 h-36'>
        <div className='bg-red-300 h-9 flex justify-center items-center'>
        Saturday 
        </div>
        <div className='bg-red-500 h-20 flex justify-center items-center'>
          İcon
        </div>
        <div className='bg-red-700 flex justify-center items-center'>
          Derece
        </div>
      </div>
      <div className='border-2 border-solid border-slate-600 w-28 h-36'>
        <div className='bg-red-300 h-9 flex justify-center items-center'>
        Sunday 
        </div>
        <div className='bg-red-500 h-20 flex justify-center items-center'>
          İcon
        </div>
        <div className='bg-red-700 flex justify-center items-center'>
          Derece
        </div>
      </div>
    </div>
  );
}

export default Forecast;

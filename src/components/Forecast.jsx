import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

function Forecast() {
  const { weather, location } = useContext(WeatherContext);



  return (
    <>
      <div className='flex justify-center'>
        <div className='text-center text-red-700 font-extrabold text-xl border-2 border-slate-200 w-24 rounded-xl'>
          {location}
        </div>
      </div>
      <div className='bg-slate-200 p-4 m-4 mt-0 flex flex-wrap justify-evenly items-center rounded-xl gap-3 lg:w-[57rem] lg:h-40'>
        {weather &&
          weather.data.slice(0,7).map((el, i) => (
            <div key={i} className='w-28 h-36'>
              <div className='h-9 flex justify-center items-center font-bold'>
                {new Date(el.datetime).toDateString().split(" ")[0]}
              </div>
              <div className='bg-slate-300 rounded-full h-20 flex justify-center items-center'>
                <img
                  src={`https://www.weatherbit.io/static/img/icons/${el.weather.icon}.png`}
                  alt=''
                  className='w-20'
                />
              </div>
              <div className='flex justify-around items-center font-bold'>
                <div className='text-blue-500'>
                  {weather.data[i].min_temp}
                  <sup>°C</sup>
                </div>
                <div className='text-blue-700'>
                  {weather.data[i].max_temp}
                  <sup>°C</sup>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Forecast;

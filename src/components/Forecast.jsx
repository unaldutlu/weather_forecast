import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

function Forecast() {
  const { weather, location } = useContext(WeatherContext);

  return (
    <div className='bg-slate-200 p-4 m-4 mt-0 flex flex-wrap justify-evenly items-center rounded-xl gap-3'>
      {weather && console.log(weather.list)}
      {weather &&
        weather.list.map((el, i) => (
          <div
            key={i}
            className='border-2 border-solid border-slate-600 w-28 h-36'
          >
            <div className='bg-red-300 h-9 flex justify-center items-center font-semibold'>
              {new Date(el.dt * 1000).toUTCString().split(",")[0]}
            </div>
            <div className='bg-red-500 h-20 flex justify-center items-center'>
              İcon
            </div>
            <div className='bg-red-700 flex justify-center items-center'>
              Derece
            </div>
          </div>
        ))}
    </div>
  );
}

export default Forecast;

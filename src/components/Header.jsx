import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

function Header() {
  const data = useContext(WeatherContext);
  console.log(data);

  return (
    <div>
      <h1 className='uppercase font-extrabold text-xl sm:text-2xl lg:text-3xl text-red-700 text-center pt-[12%]'>
        weather forecast
      </h1>
    </div>
  );
}

export default Header;

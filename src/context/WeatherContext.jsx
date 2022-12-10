import { createContext, useState, useEffect } from "react";
import axios from "axios";
const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState("Ankara");

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await axios(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${`${location},tr`}&key=7dd8a708d1d348fdacf9bebe21501746`
        );
        setWeather(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getWeatherData();
  }, [location]);

  const values = {
    weather,
    setWeather,
    location,
    setLocation,
  };
  // console.log(weather);

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}

export default WeatherContext;

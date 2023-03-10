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
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${`${location},tr`}&key=bbfc31563fff4f1c8c760c8f62f79cc1&lang=tr`
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

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}

export default WeatherContext;

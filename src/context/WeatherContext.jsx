import { createContext, useState, useEffect } from "react";
import axios from "axios";
const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState("Ankara");

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await axios(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=7&appid=e813d7a57f8e6eaf1c8c534da4ec575a&units=metric&lang=tr`
        );
        setWeather(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getWeather();
  }, [location]);
  const values = {
    weather,
    setWeather,
    location,
    setLocation,
  };

  console.log(weather);

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}

export default WeatherContext;

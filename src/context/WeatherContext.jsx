import { createContext, useState, useEffect } from "react";
import axios from "axios";
const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState({ lat: 39.57, lon: 32.53 });

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await axios(
          `api.openweathermap.org/data/2.5/forecast/daily?lat=${location.lat}&lon={location.lon}&cnt=7&appid=e813d7a57f8e6eaf1c8c534da4ec575a`
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
  console.log(weather);

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}

export default WeatherContext;

import { createContext } from "react";

const WeatherContext = createContext();
export const WeatherProvider = ({ childeren }) => {
  return <WeatherContext.Provider value='dark'></WeatherContext.Provider>;
};

export default WeatherContext;

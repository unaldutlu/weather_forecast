import { createContext } from "react";
const WeatherContext = createContext();

export function WeatherProvider ({ children }) {
  return (
    <WeatherContext.Provider value='dark'>
        {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;

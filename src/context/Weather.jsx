import React from "react";
import Header from "../components/Header";
import { WeatherProvider } from "./WeatherContext";

function Weather() {
  return (
    <WeatherProvider>
      <Header />
    </WeatherProvider>
  );
}

export default Weather;

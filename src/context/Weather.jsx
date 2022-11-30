import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { WeatherProvider } from "./WeatherContext";

function Weather() {
  return (
    <WeatherProvider>
      <Header />
      <div className='flex justify-center items-center mt-8'>
        <Card />
      </div>
    </WeatherProvider>
  );
}

export default Weather;

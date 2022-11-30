import React from "react";
import Header from "./components/Header";
import { WeatherProvider } from "./context/weatherContext";

function App() {
  return (
    <WeatherProvider>
      <Header />
    </WeatherProvider>
  );
}

export default App;

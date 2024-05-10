import React from "react";
import { Routes, Route } from 'react-router-dom';
import Weather from "./Weather";
import Todo from "./Todo";
import CityWeather from "./CityWeather";
import Navbar from "./Navbar";

 
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Todo/>}/>
      <Route path="/weather" element={<Weather/>}/>
      <Route path="/city-weather" element={<CityWeather/>}/>

    </Routes>
    </>
  );
}

export default App;

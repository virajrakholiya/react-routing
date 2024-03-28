import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../Components/Home';
import About from "../Components/About";
import User from '../Components/User';
import Userdata from '../Components/Userdata';

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/User" element={<User />} />
      <Route path="/User/:name" element={<Userdata />} />  //This Is a Dynamic Name
    </Routes>
  );
}

export default RoutesComponent;

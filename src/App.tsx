import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./Rootlayout/Rootlayout";
import Home from "./Pages/Home/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import SelectCategory from "./Pages/selectCategory";
import Profil from "./Pages/Profil";

const App: React.FC = () => {
  return (
    <div className="Container_MEGA">
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="/:categoryName" element={<SelectCategory />} />
            <Route path="profil" element={<Profil />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

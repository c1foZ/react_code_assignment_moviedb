import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailComponent from "./DetailComponent";
import HomeComponent from "./HomeComponent";
import About from "./About";
import Bar from "./Bar";

function App() {
  return (
    <div>
      <Bar />
      <div className="container">
        <h1>Best app ever!</h1>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="/:asset/:id" element={<DetailComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

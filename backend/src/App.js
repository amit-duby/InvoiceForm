import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import CardPage from "./pages/footer/CardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/card" element={<CardPage />} />
    </Routes>
  );
}

export default App;

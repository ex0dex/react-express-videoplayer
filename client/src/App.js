import React from "react";
import ReactPlayer from "react-player";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddVideoPage from "./pages/AddVideoPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/create" element={<AddVideoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

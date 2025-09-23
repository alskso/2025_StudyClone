import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/detailpage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detailpage" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

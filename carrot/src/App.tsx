import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/detailpage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 세부페이지로 이동하고싶으시면 /detailpage/1과 같이 id값 붙여서 치셔야 합니다! */}
        <Route path="/detailpage/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

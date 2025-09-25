import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "./components/Header/MainHeader";
import MainPage from "./pages/mainpage/MainPage";
import DetailPage from "./pages/detailpage/DetailPage";

function App() {
  const [location, setLocation] = useState("쌍문동");
  const [showModal, setShowModal] = useState(false);

  return (
    <BrowserRouter>
      {/* 헤더는 항상 렌더링, 모달도 여기서 렌더 */}
      <MainHeader location={location} showModal={showModal} setShowModal={setShowModal} />

      <Routes>
        <Route path="/mainpage" element={<MainPage location={location} setLocation={setLocation}  setShowModal={setShowModal} />} />
        <Route path="/detailpage/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

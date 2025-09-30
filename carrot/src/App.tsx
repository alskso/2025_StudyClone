import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainHeader from "./components/Header/MainHeader";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/mainpage/MainPage";
import DetailPage from "./pages/detailpage/DetailPage";
import WritePage from "./pages/writepage/WritePage";
import data from "./data/data.json";
import { Product } from "./types";
import StoreMain from "./pages/storemain/StoreMain";

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const [locationState, setLocation] = useState("쌍문동");
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const location = useLocation(); // 현재 경로 가져오기

  useEffect(() => {
    const stored = localStorage.getItem("products");
      if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // 저장된 데이터 + 더미 데이터 합치기 (중복 방지)
        const merged = [
          ...parsed,
          ...data.products.filter(
            (dummy) => !parsed.some((p: Product) => p.id === dummy.id)
          ),
        ];
        setProducts(merged);
        return;
      }
    }
    // 로컬스토리지에 아무 것도 없으면 더미만 세팅
    setProducts(data.products);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product) => {
    setProducts((prev) => [product, ...prev]);
  };

  return (
    <>
      <MainHeader
        location={locationState}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              location={locationState}
              setLocation={setLocation}
              setShowModal={setShowModal}
              products={products}
            />
          }
        />
        <Route
          path="/detailpage/:id"
          element={<DetailPage products={products} setProducts={setProducts} />}
        />
        <Route
          path="/writepage"
          element={<WritePage addProduct={addProduct} />}
        />
        <Route
          path="/storemain"
          element={
            <StoreMain
              location={locationState}
              setLocation={setLocation}
              setShowModal={setShowModal}
              products={products}
            />
          }
        />
      </Routes>
      {location.pathname !== "/writepage" && <Footer />} {/* writepage 제외 */}
    </>
  );
}

export default AppWrapper;

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "./components/Header/MainHeader";
import MainPage from "./pages/mainpage/MainPage";
import DetailPage from "./pages/detailpage/DetailPage";
import WritePage from "./pages/writepage/WritePage";
import data from "./data/data.json";
import { Product } from "./types"; // 타입 가져오기

function App() {
  const [location, setLocation] = useState("쌍문동");
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts(data.products);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product) => {
    setProducts((prev) => [product, ...prev]);
  };

  return (
    <BrowserRouter>
      <MainHeader location={location} showModal={showModal} setShowModal={setShowModal} />

      <Routes>
        <Route
          path="/mainpage"
          element={
            <MainPage
              location={location}
              setLocation={setLocation}
              setShowModal={setShowModal}
              products={products} // 전달
            />
          }
        />
        <Route
          path="/detailpage/:id"
          element={<DetailPage products={products} />} // 전달
        />
        <Route path="/writepage" element={<WritePage addProduct={addProduct} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

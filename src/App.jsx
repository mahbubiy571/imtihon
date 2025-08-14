import { useState } from "react";
import useFetch from "./hooks/useFetch";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import "./index.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: products,
    loading,
    error,
  } = useFetch("https://json-api.uz/api/project/dessertss/desserts");

  if (loading) return <p>Ma’lumotlar yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error}</p>;

  return (
    <>
      <div className="container">
        <div className="products-container">
          <h1 className="product-list__name">Desserts</h1>
          <ProductList products={products} />
        </div>
        <Cart onConfirm={() => setIsModalOpen(true)} />
      </div>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default App;

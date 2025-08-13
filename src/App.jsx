import useFetch from "./hooks/useFetch";
import ProductList from "./components/ProductList";
import Cart from "./components/cart";
import "./index.css";

function App() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://json-api.uz/api/project/dessertss/desserts");

  if (loading)
    return (
      <p className="loading-text">Ma’lumotlar yuklanmoqda, iltimos kuting...</p>
    );
  if (error)
    return (
      <p className="error-text">
        Xatolik yuz berdi: {error}. Iltimos, qayta urinib ko‘ring.
      </p>
    );

  return (
    <div className="app-container">
      <ProductList products={products} />
      <Cart />
    </div>
  );
}

export default App;

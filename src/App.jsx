import useFetch from "./hooks/useFetch";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
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
    <div className="container">
      <div className="products-container">
        <h1 className="product-list__name">Desserts</h1>
        <ProductList products={products} />
      </div>
      <Cart />
    </div>
  );
}

export default App;

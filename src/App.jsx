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

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xato: {error}</p>;

  return (
    <div className="app-container">
      <ProductList products={products} />
      <Cart />
    </div>
  );
}

export default App;

import useFetch from "./hooks/useFetch";
import ProductList from "./components/ProductList";

function App() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=10&skip=100"
  );

  return (
    <section>
      <div>
        {error && (
          <div className="flex items-center justify-center min-h-screen bg-red-50">
            <div className="bg-white border border-red-400 text-red-700 px-6 py-4 rounded shadow-md max-w-xl text-center">
              <h2 className="text-2xl font-bold mb-2">
                ❗ Ma'lumotni olishda xatolik
              </h2>
              <p className="text-lg">{error}</p>
            </div>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-7.5 h-7.5 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <h1 className="text-xl mt-4 text-gray-600">⏳ Loading...</h1>
          </div>
        )}

        {data && <ProductList products={data.products} />}
      </div>
    </section>
  );
}

export default App;

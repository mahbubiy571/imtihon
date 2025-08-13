import { useGlobalContext } from "../hooks/useGlobalContext";

export default function ProductList({ products }) {
  const { dispatch } = useGlobalContext();

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <picture>
            <source
              srcSet={product.image.desktop}
              media="(min-width: 1024px)"
            />
            <source srcSet={product.image.tablet} media="(min-width: 768px)" />
            <source srcSet={product.image.mobile} media="(max-width: 767px)" />
            <img
              src={product.image.thumbnail}
              alt={product.name}
              loading="lazy"
            />
          </picture>
          <p className="product__category">{product.category}</p>
          <h3 className="product__name">{product.name}</h3>
          <p className="price product__price">${product.price}.00</p>
          <button
            className="add-btn"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

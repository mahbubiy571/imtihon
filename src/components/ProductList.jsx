import { useGlobalContext } from "../hooks/useGlobalContext";

export default function ProductList({ products }) {
  const { cart, dispatch } = useGlobalContext();

  const getCartItem = (id) => cart.find((item) => item.id === id);

  return (
    <div className="product-list">
      {products.map((product) => {
        const cartItem = getCartItem(product.id);

        return (
          <div key={product.id} className="product-card">
            <picture>
              <source
                srcSet={product.image.desktop}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={product.image.tablet}
                media="(min-width: 768px)"
              />
              <source
                srcSet={product.image.mobile}
                media="(max-width: 767px)"
              />
              <img
                src={product.image.thumbnail}
                alt={product.name}
                loading="lazy"
              />
            </picture>

            {cartItem ? (
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() =>
                    dispatch({ type: "DECREASE_AMOUNT", payload: product.id })
                  }
                >
                  &#8722;
                </button>
                <span className="quantity-value">{cartItem.amount}</span>
                <button
                  className="quantity-btn"
                  onClick={() =>
                    dispatch({ type: "INCREASE_AMOUNT", payload: product.id })
                  }
                >
                  &#43;
                </button>
              </div>
            ) : (
              <button
                className="add-btn"
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: product })
                }
              >
                <span>
                  <img
                    src="/images/icon-add-to-cart.svg"
                    alt="add-to-cart-icon"
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>{" "}
                Add to Cart
              </button>
            )}

            <p className="product__category">{product.category}</p>
            <h3 className="product__name">{product.name}</h3>
            <p className="price product__price">${product.price}.00</p>
          </div>
        );
      })}
    </div>
  );
}

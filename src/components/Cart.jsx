import { useGlobalContext } from "../hooks/useGlobalContext";

export default function Cart() {
  const { cart, totalPrice } = useGlobalContext();
  const totalAmount = cart.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="cart-container">
      <h2 className="yourCart">Your Cart ({totalAmount})</h2>

      {cart.length === 0 ? (
        <div>
          <img
            src="/images/illustration-empty-cart.svg"
            alt="Empty cart"
            className="cart-img"
          />
          <p className="cart-text">Your added items will appear here</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <h4 className="cart-product__name">{item.name}</h4>
              <div className="cart-info">
                <p className="cart-item__amount"> {item.amount}x</p>
                <p className="price">
                  @ {""} ${item.price}
                  <span className="price-value">
                    {""} ${item.amount * item.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
          <h3 className="totalPrice">
            <span className="totalPrice-value">Order Total: </span>${totalPrice}
          </h3>
        </>
      )}
    </div>
  );
}

import { useGlobalContext } from "../hooks/useGlobalContext";

export default function Cart() {
  const { cart, dispatch } = useGlobalContext();
  const totalAmount = cart.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="cart-container">
      <h2 className="yourCart">You Cart ({totalAmount})</h2>
      {cart.length === 0 ? (
        <div>
          <img
            src="/images/illustration-empty-cart.svg"
            alt="Empty cart"
            className="empty-cart-img"
          />
          <p className="cart-text">Your added items will appear here</p>
        </div>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-info">
              <h4>{item.name}</h4>
              <p className="price">{item.price}$</p>
            </div>
            <div className="cart-controls">
              <button
                className="btn"
                onClick={() =>
                  dispatch({ type: "DECREASE_AMOUNT", payload: item.id })
                }
              >
                -
              </button>
              <span>{item.amount}</span>
              <button
                className="btn"
                onClick={() =>
                  dispatch({ type: "INCREASE_AMOUNT", payload: item.id })
                }
              >
                +
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

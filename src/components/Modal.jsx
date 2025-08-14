import { useGlobalContext } from "../hooks/useGlobalContext";

export default function Modal({ onClose }) {
  const { cart, totalPrice } = useGlobalContext();

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img
          src="/images/icon-order-confirmed.svg"
          alt="Order confirmed"
          width="42"
          height="42"
          className="modal-icon"
        />
        <h1 className="modal-title">Order Confirmed</h1>
        <p className="modal-subtitle">We hope you enjoy your food!</p>

        <div className="modal-products">
          {cart.map((item) => (
            <div key={item.id} className="modal-product">
              <img
                src={item.image?.thumbnail || "/images/default.jpg"}
                alt={item.name}
                className="modal-product-img"
              />
              <div>
                <h4 className="modal-product-name">{item.name}</h4>
                <div className="modal-product-totalPrice">
                  <p className="modal-product-price">
                    {item.amount}x
                    <span className="modal-product-price__highlight">
                      ${item.price}
                    </span>{" "}
                    <span className="modal-products-price__highlight">
                      ${item.amount * item.price}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
          <h3 className="modal-total">
            Order Total:
            <span className="modal-total-highlight">${totalPrice}</span>
          </h3>
        </div>
        <button className="close-btn" onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

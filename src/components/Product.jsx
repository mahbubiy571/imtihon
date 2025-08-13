function Product({ product }) {
  const fallbackImage = "/images/default.jpg";
  const basket = "/icon-add-to-cart.svg";

  const getImage = (size) => {
    return product?.image?.[size] || fallbackImage;
  };

  return (
    <div className="product-card">
      <picture>
        <source srcSet={getImage("desktop")} media="(min-width:1024px)" />
        <source srcSet={getImage("tablet")} media="(min-width:768px)" />
        <source srcSet={getImage("mobile")} media="(max-width:767px)" />
        <img
          src={getImage("thumbnail")}
          alt={product?.name || "Nomsiz mahsulot"}
          className="product-image"
        />
      </picture>

      <h3 className="product-name">{product?.name || "Nomsiz mahsulot"}</h3>

      <p className="product-price">
        {product?.price ? `$${product.price}` : "Narxi ko'rsatilmagan"}
      </p>

      <button className="add-to-cart">
        <img src="/images/icon-add-to-cart.svg" alt="" /> Add to Card
      </button>
    </div>
  );
}

export default Product;

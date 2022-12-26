import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return (
    <>
      <Link className="ProductCard" to={`/product/${product._id}`}>
        <img
          src={product.images}
          alt={product.name}
          className="ProductImg"
        />
        <p className="productName">{product.name}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="offerPriceBox">
            <span className="p__Price">{`$${product.price}`}</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;

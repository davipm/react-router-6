import { Link, useParams } from "react-router-dom";

import products from "../data.js";

export default function SingleProduct() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;

  return (
    <>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products" className="btn">
        back to products
      </Link>
    </>
  );
}

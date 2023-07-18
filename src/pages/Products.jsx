import { Link } from "react-router-dom";
import products from "../data.js";

export default function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <article key={product.id}>
          <h5>{product.name}</h5>
          <Link to={`/products/${product.id}`}>More info</Link>
        </article>
      ))}
    </div>
  );
}

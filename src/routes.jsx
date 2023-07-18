import { Route, Routes as Container } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SharedProductLayout from "./pages/SharedProductLayout.jsx";
import Products from "./pages/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Login from "./pages/Login.jsx";

// import { Container } from "./styles";

export default function Routes() {
  return (
    <Container>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />

      <Route path="products" element={<SharedProductLayout />}>
        <Route index element={<Products />} />
        <Route path=":productId" element={<SingleProduct />} />
      </Route>
    </Container>
  );
}

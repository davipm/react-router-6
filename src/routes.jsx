import { Route, Routes as Container } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SharedProductLayout from "./pages/SharedProductLayout.jsx";
import Products from "./pages/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Login from "./pages/Login.jsx";

import Error from "./pages/Error.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function Routes({ user, setUser }) {
  return (
    <Container>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login setUser={setUser} />} />

      <Route path="/products" element={<SharedProductLayout />}>
        <Route index element={<Products />} />
        <Route path=":productId" element={<SingleProduct />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute user={user}>
            <Dashboard user={user} />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Error />} />
    </Container>
  );
}

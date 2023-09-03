import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import SharedLayout from "./pages/SharedLayout.jsx";
import SharedProductLayout from "./pages/SharedProductLayout.jsx";
import Products from "./pages/Products.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Error from "./pages/Error.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";

import StyledNavbar from "./components/StyledNavbar.jsx";
import Footer from "./components/Footer.jsx";
import AlternativeRoutes from './routes.jsx'

export default function App() {
  const [user, setUser] = useState(null);
  const renderWithRoutes = false

  if (renderWithRoutes) {
    return (
      <>
        <StyledNavbar />
        <AlternativeRoutes user={user} setUser={setUser} />
        <Footer />
      </>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
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
      </Route>
    </Routes>
  );
}

import { Outlet } from "react-router-dom";

import StyledNavbar from "../components/StyledNavbar.jsx";
import Footer from "../components/Footer.jsx";

export default function SharedLayout() {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

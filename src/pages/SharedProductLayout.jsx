import { Outlet } from "react-router-dom";

export default function SharedProductLayout() {
  return (
    <section className="section">
      <h2>Products</h2>
      <Outlet />
    </section>
  );
}

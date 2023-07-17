import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nabar">
      <Link to="/">Home</Link>
      <Link to="/about">Home</Link>
      <Link to="/products">Home</Link>
    </nav>
  );
}

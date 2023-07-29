import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();

  const [formItems, setFormItems] = useState({
    name: '',
    email: ''
  })

  async function handleSubmit(event) {
    event.preventDefault();
    const { name, email } = formItems;

    if (!name || !email) return;
    setUser({ name, email });
    navigate("/dashboard");
  }

  function handleFormInput(event) {
    const { name, value } = event.target
    setFormItems({...formItems, [name]: value})
  }

  return (
    <section className="section">
      <form onSubmit={handleSubmit} className="form">
        <h5>Login</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            value={formItems.name}
            onChange={handleFormInput}
          />
        </div>

        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            value={formItems.email}
            onChange={handleFormInput}
          />
        </div>

        <button type="submit" className="btn btn-block">
          Login
        </button>
      </form>
    </section>
  );
}

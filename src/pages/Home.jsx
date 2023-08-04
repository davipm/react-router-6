import { useSearchParams, useLocation } from "react-router-dom";
import {useState} from "react";

export default function Home() {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState(new URLSearchParams(location.search).get('category'))

  function selectedCategory(category) {
    setSearchParams({ category: category });
    for (const [key, value] of searchParams) {
      console.log({ key, value })
    }
    setParams(category)
    console.log({ category, searchParams })
  }

  return (
    <section className="section">
      <h2>Home Page {params}</h2>

      <button onClick={() => selectedCategory('electronics')}>
        Electronics
      </button>

      <button onClick={() => selectedCategory('cars')}>
        Cars
      </button>
    </section>
  );
}

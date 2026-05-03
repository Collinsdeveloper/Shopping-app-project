import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import products from "./data/products";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Shopping App</h1>

      {/* 🌙 Dark Mode Toggle */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      {/* 🔍 Category Filter */}
      <Filter setSelectedCategory={setSelectedCategory} />

      {/* 🛍️ Product List */}
      <ProductList products={filteredProducts} addToCart={addToCart} />

      {/* 🧾 Cart */}
      <Cart cart={cart} />
    </div>
  );
}

export default App;
function Filter({ setSelectedCategory }) {
  return (
    <div>
      <h2>Filter</h2>

      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruits">Fruits</option>
      </select>
    </div>
  );
}

export default Filter;
import React from "react";

function SitterSearch({ search, setSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Sitters:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a city or name to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SitterSearch;

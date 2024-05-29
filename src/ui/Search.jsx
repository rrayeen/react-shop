import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return null;
    navigate(`/categorie/${search}`);
    setSearch("");
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="rounded-full py-1 px-2 lg:py-2 lg:px-3   md:w-44 lg:w-96 bg-raisin-light placeholder:text-slate-200 focus:outline-none"
      ></input>
    </form>
  );
}

export default Search;

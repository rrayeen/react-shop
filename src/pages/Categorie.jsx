import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import CategorieItem from "../features/categorie/CategorieItem";
import { getAllProducts } from "../services/apiSupabase";
import GoBackButton from "../ui/GoBackButton";
import Spinner from "../ui/Spinner";

function Categorie() {
  const { name } = useParams("name");
  const [sort, setSort] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const categorie = [
    "phones",
    "monitors",
    "laptops",
    "tablets",
    "console",
    "all",
  ];
  useEffect(
    function () {
      setSearchParams({ sort: sort });
    },
    [sort, searchParams, setSearchParams]
  );

  const { data, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  function isWordInParagraph(word, paragraph) {
    if (!word) return false;
    // Create a regular expression to match the word as a whole word, case-insensitive
    const regex = new RegExp(`\\b${word}\\b`, "i");
    return regex.test(paragraph);
  }
  //filtring
  if (isPending) return <Spinner></Spinner>;
  let sortedData;
  let filteredData = data;
  if (name !== "all") {
    filteredData = data.filter((el) => el.categorie === name);
  }
  //search
  if (!categorie.includes(name)) {
    filteredData = data.filter((el) => isWordInParagraph(name, el.name));
    if (!filteredData.length)
      return (
        <div className="flex items-center justify-center h-full">
          No product with {name}
        </div>
      );
  }
  //sort
  const [field, direction] = sort.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  sortedData = filteredData.sort((a, b) => {
    if (field === "price") return (a[field] - b[field]) * modifier;
    else {
      if (direction === "asc")
        return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
      else return b.name.toUpperCase().localeCompare(a.name.toUpperCase());
    }
  });
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-transparent">
        <GoBackButton></GoBackButton>
        <GoBackButton type="home"></GoBackButton>
      </div>
      <div className="flex items-center justify-end px-12 py-4 ">
        <select
          className="rounded-3xl focus:outline-none py-1 px-2"
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value="all">Sort</option>
          <option value="name-asc">Name Asc</option>
          <option value="name-desc">Name Desc</option>
          <option value="price-asc">Price Asc</option>
          <option value="price-desc">Price Desc</option>
        </select>
      </div>
      <div className="  py-12 px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 grid-rows-[auto] gap-8  lg:gap-24 ">
        {sortedData.map((el) => (
          <CategorieItem key={el.id} item={el}></CategorieItem>
        ))}
      </div>
    </>
  );
}

export default Categorie;

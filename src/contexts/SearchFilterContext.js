import React, { createContext, useContext, useEffect, useState } from "react";
import { useProductsContext } from "./ProductsContextProvider";
import { useLocation } from "react-router-dom";

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const { clothes } = useProductsContext();
  const [filteredData, setFilteredData] = useState(clothes);
  const location = useLocation();

  const currentCategory = location.pathname.slice(1);

  const handleFilter = () => {
    if (search === "") {
      setFilteredData(clothes);
    } else {
      const filteredResult = clothes.filter((item) => {
        const nameMatch = item.name
          .toLowerCase()
          .includes(search.toLowerCase());
        const categoryMatch = item.category
          .toLowerCase()
          .includes(search.toLowerCase());
        const colorMatch = item.color
          .toLowerCase()
          .includes(search.toLowerCase());
        const newMatch = item?.result
          ?.toLowerCase()
          .includes(search.toLowerCase());
        return nameMatch || categoryMatch || colorMatch || newMatch;
      });

      setFilteredData(filteredResult);
    }
  };

  useEffect(() => {
    if (currentCategory !== "allProducts") {
      setFilteredData(clothes);
    }
  }, [currentCategory, clothes]);

  return (
    <SearchContext.Provider
      value={{ search, setSearch, filteredData, handleFilter }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};

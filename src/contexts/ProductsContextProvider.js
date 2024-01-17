import products from "../data/products";
import useLocalStorage from "../hooks/useLocalStorage";
import { createContext, useContext, useState, useEffect } from "react";

const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [mainPhoto, setMainPhoto] = useState(null);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [clothes, setClothes] = useState(products);
  const [currentPage, setCurrentPage] = useLocalStorage("currentPage", 1);
  const [loading, setLoading] = useState(true);

  const addFav = (product) => {
    setFavorites((prevState) => {
      if (!prevState) {
        return [product];
      }
      const index = prevState.findIndex((prod) => prod.id === product.id);

      if (index !== -1) {
        const updatedState = [...prevState];
        updatedState.splice(index, 1);
        return updatedState;
      } else {
        return [product, ...prevState];
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const contextValue = {
    mainPhoto,
    setMainPhoto,
    addFav,
    favorites,
    clothes,
    setClothes,
    currentPage,
    setCurrentPage,
    loading,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  const contextValue = useContext(ProductsContext);
  return contextValue;
};

export default ProductsContextProvider;

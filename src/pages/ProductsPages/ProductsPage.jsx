import ProductList from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useProductsContext } from "../../contexts/ProductsContextProvider";
import { useFilterContext } from "../../contexts/FilterContextProvider";
import { useLocation } from "react-router-dom";

const ProductsPage = () => {
  const { t } = useTranslation();
  const { clothes } = useProductsContext();
  const { filteredProducts } = useFilterContext();
  const location = useLocation();

  const currentCategory = location.pathname.slice(1);
  const filteredClothes = filteredProducts
    ? filteredProducts.filter((prod) => prod.category === currentCategory)
    : clothes.filter((prod) => prod.category === currentCategory);

  return (
    <ProductList
      products={filteredClothes}
      productsPerPage={20}
      category={t(currentCategory)}
    />
  );
};

export default ProductsPage;

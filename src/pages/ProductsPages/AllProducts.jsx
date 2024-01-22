import ProductList from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useFilterContext } from "../../contexts/FilterContextProvider";

const AllProducts = () => {
  const { t } = useTranslation();
  const { filteredProducts } = useFilterContext();

  const AllProducts = filteredProducts.map((prod) => prod);

  const productsPerPage = 20;

  return (
    <div
      className="container refresh-page"
      style={{ height: AllProducts.length === 0 ? "100vh" : "" }}
    >
      <ProductList
        products={AllProducts}
        productsPerPage={productsPerPage}
        category={t("allProducts")}
      />
    </div>
  );
};

export default AllProducts;

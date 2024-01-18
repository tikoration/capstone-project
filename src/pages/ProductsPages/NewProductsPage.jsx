import ProductList from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useProductsContext } from "../../contexts/ProductsContextProvider";

const NewProductsPage = () => {
  const { t } = useTranslation();
  const { clothes } = useProductsContext();
  const newClothes = clothes.filter((prod) => prod.result === "new product");

  return (
    <div className="container">
      <ProductList
        products={newClothes}
        productsPerPage={20}
        category={t("New products")}
      />
    </div>
  );
};

export default NewProductsPage;

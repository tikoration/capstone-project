import ProductList from "../AdminComponents/AdminPagination";
import { useTranslation } from "react-i18next";
import { useFilterContext } from "../../contexts/FilterContextProvider";
import { useNavigate } from "react-router-dom";
import useProductFetch from "../AdminHooks/useProductFetch";
import { LoadingDiv, SubmitButton } from "../../components/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { useAdminAuth } from "../AdminContexts/AdminAuthContext";
// import { useProductsContext } from "../../contexts/ProductsContextProvider";

const AdminProducts = () => {
  const { t } = useTranslation();
  const { filteredProducts } = useFilterContext();
  const { logout } = useAdminAuth();
  // const {clothes} = useProductsContext()

  const AdminProducts = filteredProducts.map((prod) => prod);
  const navigate = useNavigate();

  const { error, loading, products, resendRequest } = useProductFetch({
    url: "/api/v1/products",
    method: "GET",
  });

  const productsList =
    products?.items.map((product) => {
      return {
        name: product.name,
        price: product.price,
        description: product.description,
        category: product.category,
        color: product.color,
        id: product._uuid,
        image: product.url,
        moreImages: product.sliderImages,
      };
    }) || [];

  const combinedProducts = [...productsList, ...AdminProducts];

  const onClick = () => {
    navigate("/admin/add");
  };

  // useEffect(() => {
  //   setClothes
  // }, [])

  const handleLogout = () => {
    logout();
  };

  if (loading)
    return (
      <LoadingDiv style={{ left: "50%" }}>
        <FontAwesomeIcon icon={faArrowsRotate} />
      </LoadingDiv>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <div style={{ margin: "16px 0 0 16px" }}>
        <SubmitButton style={{ marginRight: "16px" }} onClick={handleLogout}>
          Logout
        </SubmitButton>
        <SubmitButton style={{ marginRight: "16px" }} onClick={onClick}>
          Add Product
        </SubmitButton>
        <SubmitButton onClick={() => navigate("/admin/users")}>
          User Information
        </SubmitButton>
      </div>
      <ProductList
        products={combinedProducts}
        resendRequest={resendRequest}
        productsPerPage={20}
        category={t("allProducts")}
      />
    </div>
  );
};

export default AdminProducts;

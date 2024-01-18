import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductsContext } from "../../contexts/ProductsContextProvider";
import { DetailedProducts } from "../../pages/AllPages";
import SliderForMobile from "../../components/SliderForMobile";
import { useState, useRef } from "react";
import useProductRequest from "../AdminHooks/useProductRequest";
import { useFilterContext } from "../../contexts/FilterContextProvider";
import useProductFetch from "../AdminHooks/useProductFetch";
import { SubmitButton } from "../../components/components";

const EditProductPage = () => {
  const { t } = useTranslation();
  const { productId } = useParams();
  const { mainPhoto } = useProductsContext();
  const [details, setDetails] = useState(false);
  const navigate = useNavigate();
  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const { filteredProducts } = useFilterContext();
  const AdminProducts = filteredProducts.map((prod) => prod);

  const { sendRequest } = useProductRequest({
    url: `/api/v1/products/${productId}`,
    method: "PUT",
  });

  const { products } = useProductFetch({
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
        id: product._uuid,
        image: product.url
      };
    }) || [];

  const combinedProducts = [...productsList, ...AdminProducts];

  const onSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current && priceRef.current && descriptionRef.current) {
      sendRequest({
        name: nameRef.current.value,
        price: priceRef.current.value,
        description: descriptionRef.current.value,
      });
    }
  };

  const isMobileView = window.innerWidth <= 1300;
  return (
    <div className="container">
      {combinedProducts?.map(
        (prod) =>
          prod.id === productId && (
            <DetailedProducts key={prod.id}>
              {isMobileView && (
                <FontAwesomeIcon
                  className="back-button"
                  onClick={() => navigate(-1)}
                  icon={faChevronLeft}
                  size="lg"
                />
              )}
              {isMobileView && (
                <SliderForMobile images={[prod.image, ...prod.moreImages]} />
              )}
              <div
                style={{ marginBottom: "30px" }}
                className="detailed-slider"
              ></div>
              {!isMobileView && (
                <div style={{ position: "relative" }}>
                  <img
                    className="detailed-product-image edit-mode"
                    src={mainPhoto || prod.image}
                    alt="img"
                  />
                  <div
                    style={{
                      display: "flex",
                      width: "108px",
                      justifyContent: "space-between",
                      position: "absolute",
                      top: "35%",
                      left: "57%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <FontAwesomeIcon
                      size="2xl"
                      style={{ color: "#0000FF" }}
                      icon={faPen}
                    />
                  </div>
                </div>
              )}
              <div>
                <div className="detailed-product-details">
                  <div className="detailed-name-price">
                    <input
                      style={{ borderColor: "#0000FF", padding: "10px" }}
                      className="detailed-product-name"
                      name="name"
                      type="text"
                      defaultValue={prod.name}
                      ref={nameRef}
                    />
                    <h2 style={{ padding: "10px" }} className="d-p-id">
                      {prod.id.slice(-6)}
                    </h2>
                    <input
                      style={{ borderColor: "#0000FF", padding: "10px" }}
                      className="detailed-product-name"
                      name="price"
                      type="number"
                      defaultValue={prod.price}
                      ref={priceRef}
                    />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ color: `${prod.color}` }}
                      className="color-icon"
                    />
                  </div>
                  <h5 className="product-description">
                    {t("Description")}
                    {isMobileView && (
                      <FontAwesomeIcon
                        onClick={() => setDetails((prevState) => !prevState)}
                        icon={faChevronRight}
                      />
                    )}
                  </h5>
                  {(!isMobileView || details) && (
                    <textarea
                      style={{
                        borderColor: "#0000FF",
                        height: "150px",
                        resize: "none",
                        padding: "10px",
                      }}
                      className="product-description-text"
                      type="text"
                      name="description"
                      defaultValue={prod.description}
                      ref={descriptionRef}
                    ></textarea>
                  )}
                </div>
              </div>
              <div>
                <SubmitButton onClick={onSubmit}>Update</SubmitButton>
                <SubmitButton
                  style={{ marginLeft: "16px" }}
                  onClick={() => navigate("/admin/products")}
                >
                  Go back
                </SubmitButton>
              </div>
            </DetailedProducts>
          )
      )}
    </div>
  );
};
export default EditProductPage;

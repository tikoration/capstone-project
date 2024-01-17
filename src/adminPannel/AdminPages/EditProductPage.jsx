import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faTrash,
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

const EditProductPage = () => {
  const { t } = useTranslation();
  const { productId } = useParams();
  const { mainPhoto } = useProductsContext();
  const {sendRequest} = useProductRequest({url: `/api/v1/products/${productId}`, method: "PUT"})
  const [details, setDetails] = useState(false);
  const navigate = useNavigate();
  const nameRef = useRef()
  const priceRef = useRef()
  const descriptionRef = useRef()
  const { filteredProducts } = useFilterContext();
  const AdminProducts = filteredProducts.map((prod) => prod);


// დროებით ეს ყველაფერი გადმოვაკოპირე რომ ჩვენი დამატებულიც
// გამოჩნდეს და დაედითება შეგვეძლოს -->>
  const { products} = useProductFetch({
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
      };
    }) || [];

  const combinedProducts = [...productsList, ...AdminProducts];
// <<---
  const onSubmit = (e) => {
    e.preventDefault()
    if(nameRef.current && priceRef.current && descriptionRef.current){
       sendRequest({name: nameRef.current.value, price: priceRef.current.value, description: descriptionRef.current.value})
    }
}

  const isMobileView = window.innerWidth <= 1300;
  return (
    <div>
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
              <div style={{marginBottom: "30px"}} className="detailed-slider">
              </div>
              {!isMobileView && (
                <div>
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
                      top: "50%",
                      left: "35%",
                    }}
                  >
                    <FontAwesomeIcon
                      size="2xl"
                      style={{ color: "#0000FF" }}
                      icon={faPen}
                    />
                    <FontAwesomeIcon
                      size="2xl"
                      style={{ color: "#D80000" }}
                      icon={faTrash}
                    />
                  </div>
                </div>
              )}
              <div>
                <div className="detailed-product-details">
                  <div className="detailed-name-price">
                    <input
                      style={{ borderColor: "#0000FF" }}
                      className="detailed-product-name"
                      name="name"
                      type="text"
                      defaultValue={prod.name}
                      ref={nameRef}
                    />
                    <h2 className="d-p-id">{prod.id.slice(-6)}</h2>
                    <input
                      style={{ borderColor: "#0000FF" }}
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
                      style={{ borderColor: "#0000FF" }}
                      className="product-description-text"
                      type="text"
                      name="description"
                      defaultValue={prod.description}
                      ref={descriptionRef}
                      >
                      </textarea>
                  )}
                </div>
              </div>
              <div>
                <button onClick={onSubmit}>Update</button>
              </div>
            </DetailedProducts>
          )
      )}
    </div>
  );
};
export default EditProductPage;

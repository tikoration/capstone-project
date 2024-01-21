import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faPen,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductsContext } from "../../contexts/ProductsContextProvider";
import { DetailedProducts } from "../../pages/AllPages";
import SliderForMobile from "../../components/SliderForMobile";
import { useState, useRef } from "react";
import useProductRequest from "../AdminHooks/useProductRequest";
import { useFilterContext } from "../../contexts/FilterContextProvider";
import { LoadingDiv, SubmitButton } from "../../components/components";
import UploadWidget from "../AdminComponents/UploadWidget";
import PhotoSwiper from "../../components/PhotoSwiper";

const EditProductPage = () => {
  const { t } = useTranslation();
  const { productId } = useParams();
  const { mainPhoto } = useProductsContext();
  const [details, setDetails] = useState(false);
  const navigate = useNavigate();
  const nameRef = useRef();
  const priceRef = useRef();
  const colorRef = useRef(null);
  const descriptionRef = useRef();
  const { filteredProducts } = useFilterContext();
  const AdminProducts = filteredProducts.map((prod) => prod);
  const [url, updateUrl] = useState();
  const [, updateError] = useState();
  const [sliderImages, setSliderImages] = useState();

  const { sendRequest, loading } = useProductRequest({
    url: `/api/v1/products/${productId}`,
    method: "PUT",
  });

  const handleOnUpload = (error, result, widget) => {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    updateUrl(result?.info?.secure_url);
  };

  const handleOnMoreImagesUpload = (error, result, widget) => {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    setSliderImages((prevState) =>
      prevState
        ? [...prevState, result?.info?.secure_url]
        : [result?.info?.secure_url]
    );
  };

  if (loading)
    return (
      <LoadingDiv style={{ left: "50%" }}>
        <FontAwesomeIcon icon={faArrowsRotate} />
      </LoadingDiv>
    );

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      nameRef.current &&
      priceRef.current &&
      descriptionRef.current &&
      colorRef.current
    ) {
      sendRequest({
        name: nameRef.current.value,
        price: priceRef.current.value,
        color: colorRef.current.value,
        description: descriptionRef.current.value,
        url: url,
        sliderImages: sliderImages,
      }).then(() => window.location.reload());
    }
  };

  const isMobileView = window.innerWidth <= 1300;
  return (
    <div className="container">
      {AdminProducts?.map(
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
              {!isMobileView && (
                <div style={{ position: "relative" }}>
                  <img
                    className="detailed-product-image edit-mode"
                    src={url || mainPhoto || prod.image}
                    alt="img"
                  />
                  <div
                    style={{
                      display: "flex",
                      width: "108px",
                      justifyContent: "space-between",
                      position: "absolute",
                      top: "50%",
                      left: "57%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <UploadWidget onUpload={handleOnUpload}>
                      {({ open }) => {
                        function handleOnClick(e) {
                          e.preventDefault();
                          open();
                        }
                        return (
                          <FontAwesomeIcon
                            size="2xl"
                            style={{ color: "#0000FF" }}
                            icon={faPen}
                            onClick={handleOnClick}
                          />
                        );
                      }}
                    </UploadWidget>
                  </div>
                  <div
                    style={{ position: "relative" }}
                    className="detailed-slider edit-mode"
                  >
                    {!isMobileView && (
                      <PhotoSwiper
                        photos={[prod.image, ...prod.moreImages]}
                        id={prod.id}
                      />
                    )}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "160px",
                        left: "-30%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 99,
                      }}
                    >
                      <UploadWidget onUpload={handleOnMoreImagesUpload}>
                        {({ open }) => {
                          function handleOnClick(e) {
                            e.preventDefault();
                            open();
                          }
                          return (
                            <FontAwesomeIcon
                              size="2xl"
                              style={{ color: "#0000FF" }}
                              icon={faPen}
                              onClick={handleOnClick}
                            />
                          );
                        }}
                      </UploadWidget>
                    </div>
                  </div>
                </div>
              )}
              <div>
                <div className="detailed-product-details">
                  <div className="detailed-name-price">
                    <label htmlFor="NaMe" className="NoneLabel">
                      name
                    </label>
                    <input
                      id="NaMe"
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
                    <label htmlFor="PriCe" className="NoneLabel">
                      price
                    </label>
                    <input
                      id="PriCe"
                      style={{ borderColor: "#0000FF", padding: "10px" }}
                      className="detailed-product-name"
                      name="price"
                      type="number"
                      defaultValue={prod.price}
                      ref={priceRef}
                    />
                  </div>
                  <div>
                    <label htmlFor="Color2" className="NoneLabel">
                      Color
                    </label>
                    <input
                      id="Color2"
                      style={{ borderColor: "#0000FF", padding: "10px" }}
                      name="color"
                      type="text"
                      defaultValue={prod.color}
                      ref={colorRef}
                    />
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{
                        color: `${colorRef?.current?.value || prod.color}`,
                      }}
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
                  <label htmlFor="DesCription" className="NoneLabel">
                    Descr
                  </label>
                  {(!isMobileView || details) && (
                    <textarea
                      style={{
                        borderColor: "#0000FF",
                        height: "150px",
                        resize: "none",
                        padding: "10px",
                      }}
                      id="DesCription"
                      className="product-description-text"
                      type="text"
                      name="description"
                      defaultValue={prod.description}
                      ref={descriptionRef}
                    ></textarea>
                  )}
                </div>
              </div>
              <div style={{ position: "absolute", right: "10%" }}>
                <SubmitButton onClick={onSubmit}>{t("update")}</SubmitButton>
                <SubmitButton
                  style={{ marginLeft: "16px" }}
                  onClick={() => navigate("/admin/products")}
                >
                  {t("go back")}
                </SubmitButton>
              </div>
            </DetailedProducts>
          )
      )}
    </div>
  );
};
export default EditProductPage;

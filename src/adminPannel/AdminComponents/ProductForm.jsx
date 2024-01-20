import React, { useRef, useState } from "react";
import { AdminLoginDiv } from "../../pages/AllPages";
import { useNavigate } from "react-router-dom";
import UploadWidget from "./UploadWidget";
import { useTranslation } from "react-i18next";

const ProductForm = ({
  onFormSubmit,
  name,
  description,
  price,
  category,
  subCategory,
  color,
}) => {
  const { t } = useTranslation();
  const titleNameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();
  const colorRef = useRef();
  const subCategoryRef = useRef();
  const navigate = useNavigate();
  const [url, updateUrl] = useState();
  const [sliderImages, setSliderImages] = useState([]);
  const [, updateError] = useState();

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
    setSliderImages((prevState) => [...prevState, result?.info?.secure_url]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (url) {
      onFormSubmit(
        titleNameRef.current.value,
        priceRef.current.value,
        descRef.current.value,
        colorRef.current.value,
        categoryRef.current.value,
        subCategoryRef.current.value,
        url,
        sliderImages
      );
    } else {
      window.alert("Please choose Photo");
    }
  };

  return (
    <AdminLoginDiv>
      <form onSubmit={onSubmit}>
        <input
          name="title"
          type="text"
          placeholder={t("Product title")}
          ref={titleNameRef}
          defaultValue={name}
          required
        />
        <input
          name="price"
          type="text"
          placeholder={t("Product price")}
          ref={priceRef}
          defaultValue={price}
          required
        />
        <textarea
          name="description"
          type="text"
          placeholder={t("Product description")}
          ref={descRef}
          defaultValue={description}
          required
        />
        <input
          name="category"
          type="text"
          placeholder={t("Product Category")}
          ref={categoryRef}
          defaultValue={category}
          required
        />
        <input
          name="sCategory"
          type="text"
          placeholder={t("Sub Category")}
          ref={subCategoryRef}
          defaultValue={subCategory}
        />
        <input
          name="color"
          type="text"
          placeholder={t("color")}
          ref={colorRef}
          defaultValue={color}
          required
        />
        <UploadWidget onUpload={handleOnUpload}>
          {({ open }) => {
            function handleOnClick(e) {
              e.preventDefault();
              open();
            }
            return <button onClick={handleOnClick}>{t("upload image")}</button>;
          }}
        </UploadWidget>
        <h2 style={{ textAlign: "center" }}>{t("slider text")}</h2>
        <UploadWidget onUpload={handleOnMoreImagesUpload}>
          {({ open }) => {
            function handleOnClick(e) {
              e.preventDefault();
              open();
            }
            return (
              <button onClick={handleOnClick}>
                {t("upload slider images")}
              </button>
            );
          }}
        </UploadWidget>
        {url && (
          <img className="UploadImage" src={url} alt="Uploaded resource" />
        )}
        <button type="submit">{t("add")}</button>
      </form>
      <button onClick={() => navigate("/admin/products")}>
        {t("go back")}
      </button>
    </AdminLoginDiv>
  );
};

export default ProductForm;

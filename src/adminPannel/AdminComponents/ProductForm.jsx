import React, { useRef, useState } from "react";
import { AdminLoginDiv } from "../../pages/AllPages";
import { useNavigate } from "react-router-dom";
import UploadWidget from "./UploadWidget";
import { useTranslation } from "react-i18next";

const ProductForm = ({ onFormSubmit, name, description, price, category }) => {
  const {t} = useTranslation();
  const titleNameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();
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

  const handleOnMoreImagesUpload =  (error, result, widget) => {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    setSliderImages(prevState => [...prevState, result?.info?.secure_url]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      titleNameRef.current &&
      priceRef.current &&
      descRef.current &&
      categoryRef.current &&
      url
    ) {
      onFormSubmit(
        titleNameRef.current.value,
        priceRef.current.value,
        descRef.current.value,
        categoryRef.current.value,
        url,
        sliderImages
      );
    } else {
      window.alert("Please fill in all the information.");
    }
  };

  return (
    <AdminLoginDiv>
      <form onSubmit={onSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Product Title"
          ref={titleNameRef}
          defaultValue={name}
        />
        <input
          name="price"
          type="text"
          placeholder="Product Price"
          ref={priceRef}
          defaultValue={price}
        />
        <textarea
          name="description"
          type="text"
          placeholder="Product description"
          ref={descRef}
          defaultValue={description}
        />
        <input
          name="category"
          type="text"
          placeholder="Product Category"
          ref={categoryRef}
          defaultValue={category}
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
        <h2>{t("slider text")}</h2>
        <UploadWidget onUpload={handleOnMoreImagesUpload}>
          {({ open }) => {
            function handleOnClick(e) {
              e.preventDefault();
              open();
            }
            return <button onClick={handleOnClick}>{t("upload slider images")}</button>;
          }}
        </UploadWidget>
        {url && <img className="UploadImage" src={url} alt="Uploaded resource" />}
        <button type="submit">{t("add")}</button>
      </form>
      <button onClick={() => navigate("/admin/products")}>{t("go back")}</button>
    </AdminLoginDiv>
  );
};

export default ProductForm;

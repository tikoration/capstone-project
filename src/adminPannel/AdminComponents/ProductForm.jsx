import React, { useRef, useState } from "react";
import { AdminLoginDiv } from "../../pages/AllPages";
import { useNavigate } from "react-router-dom";
import UploadWidget from "./UploadWidget";

const ProductForm = ({ onFormSubmit, name, description, price, category }) => {
  const titleNameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();
  const navigate = useNavigate();
  const [url, updateUrl] = useState();
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
        url
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
            return <button onClick={handleOnClick}>Upload an Image</button>;
          }}
        </UploadWidget>
        {url && <img className="UploadImage" src={url} alt="Uploaded resource" />}
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => navigate("/admin/products")}>Go back</button>
    </AdminLoginDiv>
  );
};

export default ProductForm;

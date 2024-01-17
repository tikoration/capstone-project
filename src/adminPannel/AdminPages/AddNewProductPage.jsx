import { useNavigate } from "react-router-dom";
import ProductForm from "../AdminComponents/ProductForm";
import useProductRequest from "../AdminHooks/useProductRequest";
import { LoadingDiv } from "../../components/components.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const AddNewProduct = () => {
  const navigate = useNavigate();

  const { loading, sendRequest } = useProductRequest({
    url: "/api/v1/products",
    method: "POST",
  });

  const onSubmit = (name, price, description, category) => {
    sendRequest([{ name, price, description, category }]);
    navigate(-1);
  };

  if (loading)
    return (
      <LoadingDiv style={{ left: "40px" }}>
        <FontAwesomeIcon icon={faArrowsRotate} />
      </LoadingDiv>
    );

  return (
    <div>
      <ProductForm onFormSubmit={onSubmit} />
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default AddNewProduct;

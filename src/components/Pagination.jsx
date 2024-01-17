import Filter from "./Filter/Filter";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import useScrollToTop from "../hooks/useScrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { ProductGrid, ProductsListTop } from "../pages/AllPages";
import { useProductsContext } from "../contexts/ProductsContextProvider";
import { useEffect, useState } from "react";

const ProductList = ({ products, productsPerPage, category }) => {
  const { setMainPhoto, currentPage, setCurrentPage, favorites } = useProductsContext();
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  const { handleClick } = useScrollToTop();
  const { productId } = useParams();
  const [photoLoaded, setPhotoLoaded] = useState(false);

  useEffect(() => {
    setMainPhoto(null);
  }, [productId, setMainPhoto]);

  const handlePageChange = (event, value) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage(value);
  };

  const favoritesIds = favorites ? favorites.map(product => product.id) : [];

  return (
    <div>
      <ProductsListTop>
        <h2 className="new-collection-title">{category}</h2>
        <Filter />
      </ProductsListTop>
      <ProductGrid>
        {currentProducts.map((product) => (
          <div
            className="product-container"
            key={product.id}
            onClick={handleClick}
          >
            <Link
              style={{ color: "black" }}
              to={`/${product.category}/products/${product.id}`}
            >
              <div className="product-img-and-icon">
                <img
                  className="product-image"
                  src={product.image}
                  alt=""
                  onLoad={() => setPhotoLoaded(true)}
                />
                {favoritesIds.includes(product.id) && (
                  <FontAwesomeIcon
                    size="lg"
                    className="product-heart-icon"
                    icon={faHeart}
                  />
                )}
              </div>
              {photoLoaded && <h2 className="product-name">{product.name}</h2>}
              {photoLoaded && (
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <h3 className="product-price">{`${product.price}$`}</h3>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ color: `${product.color}` }}
                  />
                </div>
              )}
            </Link>
          </div>
        ))}
      </ProductGrid>
      {photoLoaded && (
        <Stack spacing={2}>
          <Pagination
            className="pagination"
            count={Math.ceil(products.length / productsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      )}
    </div>
  );
};

export default ProductList;

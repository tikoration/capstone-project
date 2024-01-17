import "./FilterStyle.css";
import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useFilterContext } from "../../contexts/FilterContextProvider";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedPriceOption, setSelectedPriceOption] = useState("");
  const [selectedColorOption, setSelectedColorOption] = useState("");
  const { t } = useTranslation();
  const { setSortByPrice, setFilterByColor, setFilterBySale, setSortByNewestDate } = useFilterContext();

  useEffect(() => {
    setSortByPrice(selectedPriceOption);
  }, [selectedPriceOption, setSortByPrice]);

  useEffect(() => {
    setFilterByColor(selectedColorOption);
  }, [selectedColorOption, setFilterByColor]);

  const handleClick = () => {
    setShowFilter((prevState) => !prevState);
  };

  const handlePriceChange = (event) => {
    setSelectedPriceOption(event.target.value);
    setShowFilter(false);
  };

  const handleOnSale = () => {
    setFilterBySale(true)
    setShowFilter(false);
  }

  const handleNewest = () => {
    setSortByNewestDate(true)
    setShowFilter(false)
  }

  const handleColorChange = useCallback(
    (event) => {
      setSelectedColorOption((prevColor) => {
        if (event.target.value !== prevColor) {
          setShowFilter(false);
        }
        return event.target.value;
      });
    },
    [setSelectedColorOption, setShowFilter]
  );

  return (
    <div className="filter-container">
      <span
        className="material-symbols-outlined filter-icon"
        onClick={handleClick}
      >
        page_info
      </span>
      {showFilter && (
        <div className="filter-dropdown">
          <select
            className="filter-select-options"
            name="select-size"
            value={selectedPriceOption}
            onChange={handlePriceChange}
          >
            <option value="price">{t("Price")}</option>
            <option value="low-to-high">{t("Low to High")}</option>
            <option value="high-to-low">{t("High to Low")}</option>
          </select>
          <select
            className="filter-select-options"
            name="select-color"
            value={selectedColorOption}
            onChange={handleColorChange}
          >
            <option value="color">{t("Color")}</option>
            <option value="red">{t("Red")}</option>
            <option value="blue">{t("Blue")}</option>
            <option value="white">{t("White")}</option>
            <option value="black">{t("Black")}</option>
          </select>
          <span onClick={handleOnSale} className="filter-options">{t("With Discount")}</span>
          <span onClick={handleNewest}className="filter-options">{t("Newest")}</span>
        </div>
      )}
    </div>
  );
};

export default Filter;

import React from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "./SwiperStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import SubmitBtn from "../Buttons/SubmitBtn";
import { useTranslation } from "react-i18next";
import weddingCategory from "../../assets/weddingCategory.jpg"
import weddingCategory1 from "../../assets/weddingCategory1.png"
import weddingCategory2 from "../../assets/weddingCategory2.png"
import weddingCategory3 from "../../assets/weddingCategory3.png"
import banquetPhoto from "../../assets/banquetPhoto.png"
import kidsPhoto from "../../assets/kidPhoto.jpg"
import paginationImage11 from "../../assets/paginationImage11.png"
import paginationImage12 from "../../assets/paginationImage12.png"
import paginationImage13 from "../../assets/paginationImage13.png"
import paginationImage1 from "../../assets/paginationImage1.png"
import paginationImage6 from "../../assets/paginationImage6.png"
import paginationImage3 from "../../assets/paginationImage3.png"

const SwiperSlider = () => {
  const { t } = useTranslation();
  const weddingSlider = [weddingCategory,weddingCategory1 , weddingCategory2, weddingCategory3]
  const banquetSlider = [banquetPhoto, paginationImage1, paginationImage6, paginationImage3]
  const kidsSlider = [kidsPhoto, paginationImage11, paginationImage12, paginationImage13]
  
  return (
    <div className="swiper-slide swiper_container">
      <div className="swiper_content">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          {banquetSlider.map((img, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={img} alt="nature" />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <SubmitBtn name={t("Banquet")} nav={"banquet"} category={"Banquet"} />
      </div>
      <div className="swiper_content">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          {weddingSlider.map((img, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={img} alt="nature" />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <SubmitBtn name={t("Wedding")} nav={"wedding"} category={"Wedding"} />
      </div>
      <div className="swiper_content">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          {kidsSlider
            .map((img, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={img} alt="nature" />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <SubmitBtn name={t("Childish")} nav={"kids"} />
      </div>
    </div>
  );
};

export default SwiperSlider;

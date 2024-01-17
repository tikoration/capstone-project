import styled from "styled-components";
import i18next from "i18next";

const isEnglish = i18next.language === "en";
const FontFamily = isEnglish ? "Helvetica" : "Montserrat";

export const ErrorElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  padding: 0 40px;
  text-align: center;

  h1 {
    font-family: ${FontFamily};
    padding-top: 63px;
    font-size: 435px;
    font-weight: 500;
    line-height: 548px;
    margin-bottom: 20px;
  }

  h2 {
    font-family: ${FontFamily};
    font-size: 40px;
    font-weght: 600;
    line-height: 48px;
    margin-bottom: 100px;
  }

  h3 {
    font-family: ${FontFamily};
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  }

  @media screen and (max-width: 1032px) {
    padding: 0 16px;

    h1 {
      font-size: 215px;
      line-height: 224px;
      margin-top: 50px;
    }

    h2 {
      font-size: 24px;
      line-height: 25px;
      margin-bottom: 40px;
    }

    h3 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 530px) {
    h1 {
      font-size: 144px;
      line-height: 150px;
    }
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 14px;
    }
  }
`;

// Main Page

export const MainContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s ease-in-out;
  width: 100%;

  .main-page-photo {
    width: 100%;
    height: auto;
    display: block;

    @media screen and (max-width: 767px) {
      height: 481px;
    }
  }

  .main-content {
    position: relative;

    .mainBtn {
      position: absolute;
      top: 85%;
      left: 50%;
      transform: translate(-50%, -50%);

      button {
        background-color: transparent;
        border: 1px solid white;

        &:hover {
          border: 1px solid rgba(0, 0, 142, 1);
        }
      }
    }
  }
`;

export const PopularCollections = styled.div`
  background-color: rgba(34, 34, 34, 1);
  padding: 30px 30px 60px 30px;
  color: white;

  .popular-collection-title {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    font-family: ${FontFamily};
    font-size: 26px;
    font-weight: 300;
    text-transform: uppercase;
    padding: 20px 0px;
  }

  .mainBtn {
    display: flex;
    justify-content: end;
    margin: 0 10px 15px 0;

    button {
      background-color: transparent;
      border: 1px solid white;

      &:hover {
        border: 1px solid rgba(0, 0, 142, 1);
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 10px 16px 40px;

    .popular-collection-title {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .mainBtn {
      display: none;
    }
  }
`;

export const SwiperContainer = styled.div`
  padding: 0 10px;
  margin: 0 auto;

  .swiper-button-next,
  .swiper-button-prev {
    display: block;
    color: white;
    transition: 0.3s;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: gray;
  }

  @media screen and (max-width: 767px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

export const SliderDiv = styled.div`
  height: 550px;

  @media screen and (max-width: 1200px) {
    height: 400px;
  }

  @media screen and (max-width: 767px) {
    height: 350px;
  }

  @media screen and (max-width: 560px) {
    height: 280px;
  }

  @media screen and (max-width: 450px) {
    height: 220px;
  }
`;

export const SlidesImages = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;

  @media screen and (max-width: 1023px) {
    // height: 170px;
  }
`;

export const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  margin: 5px;

  .product-container {
    width: 25%;
    padding: 5px;
    margin: 12px 0px;
    color: white;
  }

  .product-img-and-icon {
    position: relative;
    cursor: pointer;

    &:hover .product-admin-icons {
      display: flex;
    }
  }

  .product-heart-icon {
    color: brown;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .product-name {
    font-family: ${FontFamily};
    font-size: 20px;
    font-weight: 300;
    text-transform: capitalize;
    margin: 9px 0px;
  }

  .product-price {
    font-family: ${FontFamily};
    font-size: 20px;
    font-weight: 400;
  }

  .product-image {
    width: 100%;
    height: 500px;
    object-fit: cover;

    @media screen and (max-width: 1023px) {
      height: 400px;
    }
  }

  // //admin features -->>

  .product-container-admin:hover {
    filter: brightness(70%);
  }

  .product-edit-icon {
    color: #0000ff;
    z-index: 999;

    &:hover {
      color: white;
    }
  }

  .product-delete-icon {
    color: #d80000;
    z-index: 999;

    &:hover {
      color: white;
    }
  }

  .product-admin-icons {
    display: none;
    gap: 20px;
    position: absolute;
    top: 45%;
    right: 42%;
    z-index: 999;
  }

  // <<--

  @media screen and (max-width: 1023px) {
    .product-container {
      width: 33%;
    }
  }

  @media screen and (max-width: 650px) {
    .product-container {
      width: 50%;
      margin: 5px 0;
    }

    .product-image {
      height: 312px;
    }

    .product-container:nth-child(5n) {
      width: 100%;

      img {
        height: 512px;
      }
    }

    .product-name,
    .product-price {
      margin-top: 5px;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
    }

    .product-price {
      font-weight: 700;
    }
  }
`;

// Admin Login
export const AdminLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 10px;

  form {
    display: flex;
    flex-direction: column;
    width: 440px;
    gap: 30px;
    margin-top: 60px;

    .form-input {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    input {
      height: 40px;
      padding: 10px;
    }

    button {
      border: none;
      color: white;
      background: #000;
    }
  }

  button {
    border-radius: 3px;
    border: 1px solid #000;
    width: 440px;
    background: rgba(0, 0, 0, 0);
    padding: 15px 0px;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 16px;

    form {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;

export const ProductsListTop = styled.div`
  position: relative;
  display: flex;
  padding: 0 45px 40px;
  justify-content: space-between;
  margin-top: 140px;

  .new-collection-title {
    font-family: ${FontFamily};
    font-size: 28px;
  }

  @media screen and (max-width: 1023px) {
    margin-top: 100px;
    padding: 0 16px 20px;

    .filter-container,
    .filter-dropdown {
      right: 16px;
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 60px;
  }
`;

// Detaild Page

export const DetailedProducts = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 100px;
  gap: 30px;
  height: 991px;

  .detailed-product-image {
    width: 660px;
    flex-shrink: 0;
    object-fit: cover;
  }

  .detailed-product-details {
    padding: 10px;
    margin-top: 172px;
  }

  .detailed-product-name {
    font-family: ${FontFamily};
    font-size: 22px;
  }

  .detailed-product-price {
    font-family: ${FontFamily};
    font-size: 22px;
    margin-top: 10px;
    font-weight: 700;
  }

  .d-p-id {
    color: rgba(0, 0, 0, 0.4);
    font-weight: 300;
    margin-top: 5px;
  }

  .d-p-favorite {
    border: 1px solid black;
    padding: 5px 15px;
    border-radius: 10px;
    gap: 10px;
    display: inline-flex;
    margin-top: 30px;
    width: auto;
    cursor: pointer;
  }

  .product-description {
    margin-top: 41px;
  }

  .product-description-text {
    width: 300px;
    margin-top: 25px;
  }

  .product-sizes {
    display: flex;
    gap: 10px;
  }

  .product-size {
    border-radius: 10px;
    border: 1px solid black;
    padding: 10px 12px;
    width: 35px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .color-icon {
    margin-top: 15px;
  }

  .slider-for-mobile {
    width: 375px;
    height: 492px;
    flex-shrink: 0;

    @media screen and (max-width: 375px) {
      width: 100%;
    }
  }

  // admin mode -->>

  .edit-mode {
    filter: brightness(60%);
  }
  //  <<--

  @media screen and (max-width: 1300px) {
    margin-top: 50px;
    flex-direction: column;
    height: auto;
    display: block;

    .detailed-product-details {
      padding: 16px;
      margin-top: 10px;
    }

    .d-p-id {
      display: none;
    }

    .detailed-product-price {
      margin-top: 0;
    }

    .detailed-name-price {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .product-description {
      border-radius: 5px;
      border: 0.5px solid #000;
      display: flex;
      width: 343px;
      height: 32px;
      padding: 5px 15px;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: 767px) {
        width: 320px;
      }
    }

    .favorites-text {
      display: none;
    }

    .d-p-favorite {
      right: 20px;
      top: 480px;
      position: absolute;
      z-index: 3;
      justify-content: center;
      background-color: white;
      border-radius: 50%;
      border: none;
      padding: 10px;
      margin-top: 0px;
    }

    .back-button {
      margin-bottom: 10px;
      margin-left: 15px;
    }
  }
`;

export const SimilarProductTitle = styled.h3`
  font-family: ${FontFamily};
  font-size: 28px;
  font-weight: 300;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const PhotoSwiperContainer = styled.div`
  position: absolute;
  right: 75%;
  bottom: 9%;
  z-index: 2;
  max-width: 532px;

  .detailed-slider-images {
    object-fit: cover;
    width: 266px;
    height: 400px;
    aspect-ratio: 266/400;
    flex-shrink: 0;
    min-width: 0;
  }

  @media screen and (max-width: 1300px) {
    display: none;
  }
   }
`;

// Favorite Page

export const FavoritePage = styled.div`
  min-height: 600px;

  .pagination {
    display: flex;
    justify-content: center;
    padding: 50px;
  }

  .favorites-no-products {
    margin-top: 200px;
    text-align: center;
    text-transform: uppercase;
  }

  .favorites-text {
    font-family: ${FontFamily};
    font-size: 28px;
    margin-bottom: 80px;
  }

  .favorites-back-button {
    font-family: ${FontFamily};
    border: 1px solid black;
    padding: 10px 15px;
    background-color: white;
    color: black;
    transition: 0.3s;
    font-size: 20px;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

// Location Page

export const LocationStyle = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;

  .location_desc {
    width: 50%;
    padding: 70px 50px 0 40px;

    .location_display {
      display: flex;
      justify-content: start;
      align-items: start;
      gap: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid gray;
      margin-bottom: 50px;

      .AtelieLogo {
        width: 210px;
        height: 148px;
      }
    }

    .title {
      color: #000;
      font-family: ${FontFamily};
      font-size: 26px;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 38px;
    }

    h3 {
      position: relative;
      color: #000;
      font-family: ${FontFamily};
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 10px;

      img {
        position: absolute;
        right: -80px;
        bottom: 0;
      }
    }

    .Working_days {
      color: #000;
      font-family: ${FontFamily};
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 30px;
    }

    p {
      color: #000;
      font-family: ${FontFamily};
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
    }
  }

  .location_map {
    width: 50%;
    height: 925px;
  }

  @media screen and (max-width: 1177px) {
    flex-direction: column;
    gap: 50px;

    .location_desc,
    .location_map {
      width: 100%;
    }

    .location_map {
      height: 650px;
      margin-bottom: 1px;
    }
  }

  @media screen and (max-width: 767px) {

    .location_desc {
      padding-top: 0;
      padding-left: 16px;
  
    .location_display {
      width: 100%;
      flex-direction: column;
      align-items: start;
      justify-content: start;

      h3 {
  
        img {
          right: -50px;
        }
      }
    }
  }
`;

// Contact Us Page

export const ContactStyle = styled.div`
  margin-top: 140px;
  padding: 0 40px;

  @media screen and (max-width: 767px) {
    margin-top: 70px;
  }

  h1 {
    font-family: ${FontFamily};
    color: black;
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 50px;
  }

  .about_info {
    display: flex;
    justify-content: space-between;

    .contact_info {
      width: 50%;

      .contact_about {
        margin-left: 50px;
        width: 446px;
        height: 300px;
        padding: 58px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        background-color: #e7e7e7;
        box-shadow: 2.332px 4.665px 4.665px 0px rgba(0, 0, 0, 0.5);

        @media screen and (max-width: 1300px) {
          margin: 0;
        }

        @media screen and (max-width: 767px) {
          padding: 30px;
        }

        h2,
        h3 {
          color: #000;
          font-family: ${FontFamily};
          font-size: 23.324px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          margin-bottom: 50px;

          @media screen and (max-width: 767px) {
            font-size: 18px;
          }
        }

        h3 {
          font-weight: 400;
          margin-bottom: 10px;
        }
      }
    }

    form {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;

      .inputBtn {
        position: relative;
      }

      .emailIcons {
        position: absolute;
        top: 50%;
        left: 75%;
        transform: translate(-50%, -50%);

        @media screen and (max-width: 1095px) {
            left: 95px;
        }

        svg {
          font-size: 18px;
        }
      }

      label {
        font-family: ${FontFamily};
        font-size: 16px;
        font-weight: 700;
        line-height: 18px;
        margin-bottom: 10px;
      }

      input {
        width: 440px;
        height: 40px;
        padding-left: 20px;
        outline: none;
        border: 1px solid black;
        margin-bottom: 30px;
        color: black;

        &::placeholder {
          font-family: ${FontFamily};
          font-size: 14px;
          gont-weight: 700;
          line-height: 16px;
          color: $b4b4b4;
        }
      }

      textarea {
        max-width: 670px;
        width: 100%;
        height: 205px;
        padding: 10px;
        outline: none;
        border: 1px solid black;
        resize: none;
        margin-bottom: 40px;
      }

      input[type="submit"] {
        padding: 0;
        width: 194px;
        height: 50px;
        font-size: 24px;
        font-family: ${FontFamily};
        font-weight: 700;
        line-height: 36px;
        color: white;
        background-color: black;
        border: 1px solid black;
        dusplay: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
        cursor: pointer;
        margin-bottom: 100px;
        margin-left: 233px;

        &:hover {
          background-color: white;
          color: rgba(0, 0, 142, 1);
          border: 1px solid rgba(0, 0, 142, 1);
          transition: 0.5s;
        }
      }
    }

    @media screen and (max-width: 1158px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;

      .contact_info, form {
        width: 100%;
      }

      .contact_info {
        .contact_about {
          width: 100%;
        }
      }

      form {
        input {
          width: 100%;
        }

        textarea {
          max-width: 100%;
        }

        input[type="submit"] {
          margin-left: 0;
        }
      }
    }
  }
  @media screen and (max-width: 1158px) {
    padding: 0 16px;
  }
}
`;

export const AboutStyle = styled.div`
  margin-top: 140px;
  padding: 0 40px;

  h2 {
    font-family: ${FontFamily};
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 21px;
  }

  .aboutContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;

    h1 {
      font-family: ${FontFamily};
      font-size: 70px;
      font-weight: 500;
      line-height: 88px;
      text-transform: uppercase;
      max-width: 376px;
      text-align: center;
      margin-left: 115px;
    }

    img {
      width: 50%;
      height: 556px;
    }
  }

  .aboutContentInfo {
    margin-bottom: 100px;

    h1 {
      font-family: ${FontFamily};
      font-weight: 400;
      font-size: 40px;
      line-height: 46px;
      text-align: center;
      margin-bottom: 78px;
    }

    p {
      font-family: ${FontFamily};
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
    }

    .first_paragraph,
    .third_paragraph {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 11px;

      p {
        width: 60%;
      }

      video {
        width: 550px;
        height: 393px;

        @media screen and (max-width: 1096px) {
          width: 100%;
        }
      }
    }

    .second_paragraph {
      margin-bottom: 41px;
    }

    .third_paragraph {
      gap: 80px;
      img {
        width: 40%;
      }

      p {
        width: 60%;
      }
    }
  }

  @media screen and (max-width: 1096px) {
    margin-top: 80px;
    padding: 16px;

    h2 {
      font-weight: 500;
    }

    .aboutContent {
      flex-direction: column;
      justify-content: center;
      margin-bottom: 20px;
      margin-top: 40px;

      h1 {
        margin: 0;
        max-width: 100%;
        margin-bottom: 20px;
        font-size: 40px;
        line-height: 40px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .aboutContentInfo {
      h1 {
        margin-bottom: 25px;
        font-size: 32px;
      }

      p {
        font-size: 16px;
      }

      .first_paragraph,
      .third_paragraph {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        gap: 20px;

        p {
          width: 100%;
        }

        img {
          width: 100%;
          height: 500px;
        }
      }

      .third_paragraph {
        img {
          height: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 50px;
  }
`;

export const RatesStyle = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {

  }

  h1 {
    font-family: ${FontFamily};
    font-weight: 400;
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 30px;

    @media screen and (max-width: 767px) {
      font-size: 28px;
      line-height: 30px;
    }
  }

  form {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    label {
      font-family: ${FontFamily};
      font-size: 20px;
      font-weight: 700;
      line-height: 23px;

      @media screen and (max-width: 767px) {
        font-weight: 500;
        font-size: 18px;
      }
    }

    textarea {
      padding: 10px;
      width: 670px;
      height: 150px;
      resize: none;
      outline: none;
      color: black;
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;

      @media screen and (max-width: 767px) {
        width: 450px;
      }

      @media screen and (max-width: 460px) {
        width: 320px;
      }

      ::placeholder {
        color #B4B4B4;
      }
    }
    .submitBtn {
      align-self: end;
      position: relative;
    }

      svg {
        color: #14ae5c;
        font-size: 20px;
        position: absolute;
        left: -28px;
        top: 20%;
        }

        .icon {
          color: gray;
          animation: rotate 3s linear infinite;

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
        
      button {
        padding: 10px 20px;
        margin-bottom: 50px;
      }
    }  
  }

  .commentSection {
    margin-bottom: 102px;
    @media screen and (max-width: 767px) {
      margin-bottom: 50px;
    }
    
    .comments {
      width: 670px;
      align-self: center;
      text-align: start;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      margin-bottom: 30px;
      padding-bottom: 30px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.30);;

      @media screen and (max-width: 767px) {
        width: 450px; 
      }

      @media screen and (max-width: 460px) {
        width: 320px;
      }
      
      .comment-sub-section{
        display: flex;
        flex-direction: column;
        gap: 38px;
        
        h2 {
          font-family: ${FontFamily};
          font-size: 20px;
          font-weight: 700;
          line-height: 23px;
          align-self: start;

          @media screen and (max-width: 767px) {
            font-size: 18px;
            font-weight: 500;
          }
        }
    
        p {
          color: #000;
          font-family: Helvetica;
          font-size: 20px;
          font-weight: 300;

          @media screen and (max-width: 767px) {
            font-size: 18px;
            font-weight: 500;
          }
        }
        
      }

      .comment-menu{
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        padding: 10px;
        right: 6px;
        top: 6px;
        background-color: #F2F2F2;

        span{
          cursor: pointer;
        }
      }

    }

    .viewMore {
      color: #000;
      font-family: ${FontFamily};
      font-size: 16px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: .3s;

      &:hover {
        color: rgba(0, 0, 142, 1);
      }
    }
  }

  .showComments {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

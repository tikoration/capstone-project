import AboutUs from "../../assets/New.png";
import AboutUs2 from "../../assets/mariamsAtelier.mp4";
import AboutUs3 from "../../assets/aboutUs3.jpg";
import { useTranslation } from "react-i18next";
import { AboutStyle } from "../AllPages";
import { useState } from "react";

const AboutUsPage = () => {
  const { t } = useTranslation();
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted((prev) => !prev);
  };

  return (
    <AboutStyle>
      <h2>{t("About Us")}</h2>
      <div className="aboutContent">
        <h1>{t("mariam’s atelier")}</h1>
        <img src={AboutUs} alt="Logo" />
      </div>
      <div className="aboutContentInfo">
        <h1>{t("title")}</h1>
        <div className="first_paragraph">
          <p>
            {t("lorem1")}
            {t("lorem1")}
          </p>
          <video autoPlay muted={muted} onClick={toggleMute}>
            <source src={AboutUs2} type="video/mp4" />
          </video>
        </div>
        <div className="second_paragraph">
          <p>{t("lorem1")}</p>
        </div>
        <div className="third_paragraph">
          <img src={AboutUs3} alt="aboutUs" />
          <p>
            {t("lorem1")}
            {t("lorem1")}
          </p>
        </div>
      </div>
    </AboutStyle>
  );
};

export default AboutUsPage;

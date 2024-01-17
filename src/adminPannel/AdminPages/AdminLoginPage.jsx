import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../AdminContexts/AdminAuthContext";
import { useState } from "react";
import { AdminLoginDiv } from "../../pages/AllPages";
import Logo from "../../assets/MA.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAdminAuth();
  //   დროებით ესე და მერე .env-ში შევინახოთ
  const validUserName = "cap";
  const validPassword = "12";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === validUserName && password === validPassword) {
      login();
      navigate("products");
    } else {
      setError("Invalid user or password");
    }
  };

  return (
    <AdminLoginDiv>
      <Link to={"/"}>
        <img src={Logo} alt="Logo" />
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>{t("user")}</label>
          <input
            name="adminName"
            type="text"
            placeholder={t("user")}
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label>{t("Password")}</label>
          <input
            name="adminPassword"
            type="password"
            placeholder={t("Password")}
            autoComplete="off"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{t("Log in")}</button>
      </form>
      <button className="goBack" onClick={() => navigate("/")}>
        {t("go back")}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </AdminLoginDiv>
  );
};

export default AdminLogin;

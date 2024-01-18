import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../AdminContexts/AdminAuthContext";
import { useEffect, useState } from "react";
import { AdminLoginDiv } from "../../pages/AllPages";
import Logo from "../../assets/MA.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login, authenticated } = useAdminAuth();

  const validUserName = process.env.REACT_APP_ADMIN_USERNAME ;
  const validPassword = process.env.REACT_APP_ADMIN_PASSWORD ;
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

  useEffect(() => {
    authenticated && navigate('/admin/products')
  }, [authenticated, navigate])

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

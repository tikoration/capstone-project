import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faChevronLeft,
  faArrowsRotate,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import useRequest from "../../hooks/useRequest";
import { useAuthorization } from "../../contexts/AuthorizationContext";
import { useTranslation } from "react-i18next";
import useToggle from "../../hooks/useToggle";
import useRegistration from "../../hooks/useRegistration";
import { Loading } from "../components";

function UserInfo({ users, setUserInfo }) {
  const { userName } = useAuthorization();
  const loggedInUser = users.find((user) => user.UName === userName);
  const { showPassword: showPassword1, togglePassword: toggle1 } =
    useToggle(false);
  const { showPassword: showPassword2, togglePassword: toggle2 } =
    useToggle(false);

  const { t } = useTranslation();
  const { loading, sentRequest, sendRequest } = useRequest({
    url: `/api/v1/users/${loggedInUser.id}`,
    method: "PUT",
    envVariable: "REACT_APP_USERS",
  });
  const { PasswordRef, CPasswordRef, validateInputs, handleInput } =
    useRegistration();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const userRegister = {
      Email: loggedInUser.Email,
      Password: PasswordRef.current.value,
      CPassword: CPasswordRef.current.value,
    };

    const isValid = validateInputs(userRegister);

    if (isValid) {
      sendRequest({ Password: userRegister.Password }).catch((err) =>
        console.log(err)
      );
    }
  };
  return (
    <div>
      <FontAwesomeIcon
        onClick={() => setUserInfo(false)}
        icon={faChevronLeft}
      />
      UserInfo
      <h3>{t("Email address")}</h3>
      <h3>{loggedInUser.Name}</h3>
      <h3>{loggedInUser.Email}</h3>
      <h3>{t("name")}</h3>
      <h3>{loggedInUser.FName.split(" ")[0]}</h3>
      <h3>{t("last name")}</h3>
      <h3>{loggedInUser.FName.split(" ")[1]}</h3>
      <form onSubmit={onFormSubmit}>
        {/* აქ შენი UserRessetPasswordის ინფუთების კოდი გადმოვაკოპირე უბრალოდ */}
        <div className="input PasInput marginDel">
          <label htmlFor="Password2">{t("Password")}</label>
          <input
            name="Password"
            id="Password2"
            type={showPassword1 ? "text" : "password"}
            placeholder={t("New Password")}
            ref={PasswordRef}
            onChange={handleInput}
            autoComplete="new-password"
          />
          <FontAwesomeIcon
            id="PasEye1"
            icon={showPassword1 ? faEye : faEyeSlash}
            onClick={toggle1}
          />
        </div>
        <div className="input PasInput">
          <label htmlFor="CPassword2">{t("Confirm Password")}</label>
          <input
            name="CPassword"
            id="CPassword2"
            type={showPassword2 ? "text" : "password"}
            placeholder={t("Confirm Password")}
            ref={CPasswordRef}
            onChange={handleInput}
            autoComplete="new-password"
          />
          <FontAwesomeIcon
            id="PasEye2"
            icon={showPassword2 ? faEye : faEyeSlash}
            onClick={toggle2}
          />
        </div>
        <button type="submit">{t("Resset Password")}</button>
      </form>
      <div className="formLoadings">
        {loading && (
          <Loading>
            <FontAwesomeIcon icon={faArrowsRotate} />
          </Loading>
        )}
        {sentRequest && (
          <FontAwesomeIcon style={{ color: "green" }} icon={faCheck} />
        )}
      </div>
    </div>
  );
}

export default UserInfo;

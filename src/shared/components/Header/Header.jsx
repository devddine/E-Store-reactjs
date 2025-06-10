/**
 * @fileoverview Header component renders the application header with language selector.
 */

import { Link } from "react-router-dom";
import Divider from "../common/Divider";
import { useTranslation } from "react-i18next";
import { Form } from "react-bootstrap";

/**
 * Header component to display app name and language selection dropdown.
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <header className="bg-light py-3 px-4 d-flex justify-content-between align-items-center">
        <Link className="text-decoration-none text-dark fw-bolder fs-4" to="/">
          {t("header.appName")}
        </Link>
        <Form.Select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language} className="w-auto">
          <option value="en">🇺🇸 {t("sidebar.english")}</option>
          <option value="fr">🇫🇷 {t("sidebar.french")}</option>
        </Form.Select>
      </header>
      <Divider />
    </>
  );
};
export default Header;

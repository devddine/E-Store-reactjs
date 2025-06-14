/**
 * @fileoverview ErrorPage component displays a 404 error message with navigation back to dashboard.
 */

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./../assets/styles/App.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

/**
 * ErrorPage component to show error message and a button to navigate back to dashboard.
 * @returns {JSX.Element} The rendered error page component.
 */
const ErrorPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("header.appName")} - ${t("pages.error404.title")}`;
  });

  return (
    <div className="text-dark">
      <div
        className={`${styles.errorpage} position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center min-vh-100 px-2`}
      >
        <div className="text-center">
          <h1 className="display-1 fw-bold">{t("pages.error404.title")}</h1>
          <p className="fs-2 fw-medium mt-4">{t("pages.error404.message")}</p>
          <p className="mt-4 mb-5">{t("pages.error404.description")}</p>
          <Button as={Link} to="/" variant="dark" className="fw-semibold rounded-pill px-4 py-2">
            {t("pages.error404.goDashboard")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

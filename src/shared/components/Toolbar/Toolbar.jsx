/**
 * @fileoverview Toolbar component provides a search bar and add button for products, stock, or sales.
 */

import { Button, Form } from "react-bootstrap";
import { HiOutlineSearch } from "react-icons/hi";
import styles from "../../../assets/styles/App.module.css";
import { useTranslation } from "react-i18next";

/**
 * Toolbar component to search and add new items.
 * @param {Object} props - Component props.
 * @param {string} props.type - Type of item ('product', 'stock', or 'sale').
 * @param {string} props.searchValue - Current search input value.
 * @param {Function} props.onSearch - Callback for search input changes.
 * @param {Function} props.onAdd - Callback for add button click.
 * @returns {JSX.Element} The rendered toolbar component.
 */
const Toolbar = ({ type, searchValue, onSearch, onAdd }) => {
  const { t } = useTranslation();
  return (
    <div className="d-flex justify-content-between mt-3">
      <div className={`${styles.searchBar} d-flex align-items-center`}>
        <Form.Control
          type="search"
          name="search"
          placeholder={
            type === "product"
              ? t("toolbar.searchPlaceholder.product")
              : type === "stock"
              ? t("toolbar.searchPlaceholder.stock")
              : t("toolbar.searchPlaceholder.sale")
          }
          value={searchValue}
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
        <Button variant="link" size="sm" className="text-dark border-0">
          <HiOutlineSearch />
        </Button>
      </div>
      <Button
        variant="dark"
        className={`${styles.buttonPrimary} ${styles.submitButton} px-3 text-nowrap border-0`}
        onClick={onAdd}
      >
        {type === "product" ? t("toolbar.newButton.product") : t("toolbar.newButton.operation")}
      </Button>
    </div>
  );
};
export default Toolbar;

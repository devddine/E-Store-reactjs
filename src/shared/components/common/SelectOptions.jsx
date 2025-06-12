/**
 * @fileoverview SelectOptions component renders a dropdown select for products.
 */

import { Form } from "react-bootstrap";
import useProducts from "../../../features/products/hooks/useProducts";
import { useTranslation } from "react-i18next";

/**
 * SelectOptions component to select a product from the list.
 * @param {Object} props - Component props.
 * @param {string} props.value - Selected product ID.
 * @param {Function} props.onChange - Change event handler.
 * @param {boolean} props.isInvalid - Flag to indicate invalid state.
 * @returns {JSX.Element} The rendered select options component.
 */
const SelectOptions = ({ value, onChange, isInvalid }) => {
  const { products } = useProducts();
  const { t } = useTranslation();

  return (
    <>
      <Form.Select value={value} onChange={onChange} isInvalid={isInvalid}>
        <option value="" disabled>
          {t("common.selectProducts")}
        </option>
        {products.map((p) => (
          <option key={p._id} value={p._id}>
            {p.title}
          </option>
        ))}
      </Form.Select>
    </>
  );
};
export default SelectOptions;

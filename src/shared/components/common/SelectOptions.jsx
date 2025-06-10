import { Form } from "react-bootstrap";
import useProducts from "../../../features/products/hooks/useProducts";
import { useTranslation } from "react-i18next";

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

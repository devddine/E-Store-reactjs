import { useEffect, useState } from "react";
import { fetchProducts } from "../../../features/products/services/productService";
import { Form } from "react-bootstrap";

const SelectOptions = ({ value, onChange, isInvalid }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchProducts();
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Form.Select value={value} onChange={onChange} isInvalid={isInvalid}>
        <option value="" disabled>
          Choisir un Produit
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

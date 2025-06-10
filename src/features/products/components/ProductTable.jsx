/**
 * @fileoverview ProductTable component renders a table of products using the shared TableDefault component.
 */

import TableDefault from "../../../shared/components/common/TableDefault";

/**
 * ProductTable component to display a list of products with view, edit, and delete handlers.
 * @param {Object} props - Component props.
 * @param {Array<Object>} props.productsList - List of product objects to display.
 * @param {Function} props.onView - Handler for viewing a product.
 * @param {Function} props.onEdit - Handler for editing a product.
 * @param {Function} props.onDelete - Handler for deleting a product.
 * @returns {JSX.Element} The rendered product table component.
 */
const ProductTable = ({ productsList, onView, onEdit, onDelete }) => {
  const tableConfig = { type: "products", data: productsList };

  return (
    <>
      <TableDefault config={tableConfig} onView={onView} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
};
export default ProductTable;

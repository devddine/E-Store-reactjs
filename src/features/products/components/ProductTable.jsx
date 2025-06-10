import TableDefault from "../../../shared/components/common/TableDefault";

const ProductTable = ({ productsList, onView, onEdit, onDelete }) => {
  const tableConfig = { type: "products", data: productsList };

  return (
    <>
      <TableDefault config={tableConfig} onView={onView} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
};
export default ProductTable;

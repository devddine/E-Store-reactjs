import TableDefault from "../../../shared/components/common/TableDefault";

const ProductTable = ({ productsList, onView, onEdit, onDelete }) => {
  const tableConfig = { page: "products", col1: "Titre", col2: "Qté en Stock", col3: "Qté Vendue", data: productsList };

  return (
    <>
      <TableDefault config={tableConfig} onView={onView} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
};
export default ProductTable;

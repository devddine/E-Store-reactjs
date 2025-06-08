import TableDefault from "../../../shared/components/common/TableDefault";

const SaleTable = ({ salesList, onView, onEdit, onDelete }) => {
  const tableConfig = { type: "operation", col1: "Client", col2: "Date", col3: "Nombre Produits", data: salesList };

  return (
    <>
      <TableDefault config={tableConfig} onView={onView} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
};
export default SaleTable;

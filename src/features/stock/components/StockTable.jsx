import TableDefault from "../../../shared/components/common/TableDefault";

const StockTable = ({ stockList, onView, onEdit, onDelete }) => {
  const tableConfig = { page: "stock", col1: "Fournisseur", col2: "Date", col3: "Nombre Produits", data: stockList };

  return (
    <>
      <TableDefault config={tableConfig} onView={onView} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
};
export default StockTable;

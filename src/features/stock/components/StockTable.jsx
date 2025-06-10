import TableDefault from "../../../shared/components/common/TableDefault";

const StockTable = ({ stockList, onView, onEdit, onDelete }) => {
  const tableConfig = { type: "stock", data: stockList };

  return (
    <>
      <TableDefault config={tableConfig} onView={onView} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
};
export default StockTable;

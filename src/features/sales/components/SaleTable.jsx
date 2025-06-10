import TableDefault from "../../../shared/components/common/TableDefault";

const SaleTable = ({ salesList, onView, onEdit, onDelete }) => {
  const tableConfig = { type: "sales", data: salesList };

  return (
    <>
      <TableDefault config={tableConfig} onView={onView} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
};
export default SaleTable;

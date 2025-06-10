/**
 * @fileoverview SaleTable component renders a table of sales using the shared TableDefault component.
 */

import TableDefault from "../../../shared/components/common/TableDefault";

/**
 * SaleTable component to display a list of sales with view, edit, and delete handlers.
 * @param {Object} props - Component props.
 * @param {Array<Object>} props.salesList - List of sale objects to display.
 * @param {Function} props.onView - Handler for viewing a sale.
 * @param {Function} props.onEdit - Handler for editing a sale.
 * @param {Function} props.onDelete - Handler for deleting a sale.
 * @returns {JSX.Element} The rendered sale table component.
 */
const SaleTable = ({ salesList, onView, onEdit, onDelete }) => {
  const tableConfig = { type: "sales", data: salesList };

  return (
    <>
      <TableDefault config={tableConfig} onView={onView} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
};
export default SaleTable;

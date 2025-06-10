/**
 * @fileoverview StockTable component renders a table of stock items using the shared TableDefault component.
 */

import TableDefault from "../../../shared/components/common/TableDefault";

/**
 * StockTable component to display a list of stock items with view, edit, and delete handlers.
 * @param {Object} props - Component props.
 * @param {Array<Object>} props.stockList - List of stock objects to display.
 * @param {Function} props.onView - Handler for viewing a stock item.
 * @param {Function} props.onEdit - Handler for editing a stock item.
 * @param {Function} props.onDelete - Handler for deleting a stock item.
 * @returns {JSX.Element} The rendered stock table component.
 */
const StockTable = ({ stockList, onView, onEdit, onDelete }) => {
  const tableConfig = { type: "stock", data: stockList };

  return (
    <>
      <TableDefault config={tableConfig} onView={onView} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
};
export default StockTable;

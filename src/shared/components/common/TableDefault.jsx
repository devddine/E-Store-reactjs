/**
 * @fileoverview TableDefault component renders a table with configurable data and actions.
 */

import { Table } from "react-bootstrap";
import { formatDate } from "../../utils/dateUtils";
("react-icons/bi");
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin2Line } from "react-icons/ri";
import styles from "../../../assets/styles/App.module.css";
import { useTranslation } from "react-i18next";

/**
 * TableDefault component to display data in a table with view, edit, and delete actions.
 * @param {Object} props - Component props.
 * @param {Object} props.config - Configuration object containing type and data array.
 * @param {Function} props.onView - Callback for viewing an item.
 * @param {Function} props.onEdit - Callback for editing an item.
 * @param {Function} props.onDelete - Callback for deleting an item.
 * @returns {JSX.Element} The rendered table component.
 */
const TableDefault = ({ config, onView, onEdit, onDelete }) => {
  const { t } = useTranslation();
  const { type, data } = config;
  const isProducts = type === "products";

  return (
    <Table hover responsive className="text-center mt-3">
      <thead className="align-baseline">
        <tr>
          <th>#</th>
          <th>{t(`${type}.table.column1`)}</th>
          <th>{t(`${type}.table.column2`)}</th>
          <th>{t(`${type}.table.column3`)}</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="align-baseline">
        {data.map((item, i) => (
          <tr key={i}>
            <th scope="row" className={styles.pointer} onClick={() => onView(item)}>
              {++i}
            </th>
            <td className={`${styles.pointer} text-capitalize`} onClick={() => onView(item)}>
              {isProducts ? item.title : item.name}
            </td>
            <td className={styles.pointer} onClick={() => onView(item)}>
              {isProducts ? `${item.stock_available} ${t(`${type}.table.unit`)}` : formatDate(item.date)}{" "}
            </td>
            <td className={styles.pointer} onClick={() => onView(item)}>
              {isProducts
                ? `${item.sells} ${t(`${type}.table.unit`)}`
                : `${item.articles.length}  ${t(`${type}.table.unit`)}`}
            </td>
            <td>
              <TbEdit className={`${styles.pointer} mx-3`} onClick={() => onEdit(item)} />
              <RiDeleteBin2Line className={`${styles.pointer} mx-3`} onClick={() => onDelete(item)} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default TableDefault;

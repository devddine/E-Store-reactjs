/**
 * @fileoverview ListTable component renders a table of articles with optional remove functionality.
 */

import { Table } from "react-bootstrap";
import { MdPlaylistRemove } from "react-icons/md";
import styles from "../../../assets/styles/App.module.css";

/**
 * ListTable component to display a list of articles in a table.
 * @param {Object} props - Component props.
 * @param {Array} props.articles - Array of article objects with title and quantity.
 * @param {boolean} props.isView - Flag to indicate if the table is in view-only mode.
 * @param {Function} props.onRemove - Callback function to remove an article.
 * @returns {JSX.Element} The rendered list table component.
 */
const ListTable = ({ articles, isView, onRemove }) => {
  return (
    <Table borderless hover responsive size="sm">
      <tbody className="small">
        {articles.map((article, i) => (
          <tr key={i} className="align-middle">
            <td className="text-capitalize">{article.title}</td>
            <td className="">{article.quantity}</td>
            {!isView && (
              <td className="text-end">
                <MdPlaylistRemove className={`${styles.pointer} p-0`} onClick={() => onRemove(article)} />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default ListTable;

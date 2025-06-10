import { Table } from "react-bootstrap";
import { MdPlaylistRemove } from "react-icons/md";
import styles from "../../../assets/styles/App.module.css";

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

import { Button, Table } from "react-bootstrap";
import { MdPlaylistRemove } from "react-icons/md";
import { RxCross1, RxCross2 } from "react-icons/rx";

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
                <Button variant="link" size="sm" onClick={() => onRemove(article)} className="p-0">
                  <MdPlaylistRemove />
                </Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default ListTable;

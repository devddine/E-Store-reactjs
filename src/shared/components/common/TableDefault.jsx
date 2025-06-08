import { Button, Table } from "react-bootstrap";
import { formatDate } from "../../utils/dateUtils"; "react-icons/bi";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin2Line } from "react-icons/ri";

const TableDefault = ({ config, onView, onEdit, onDelete }) => {
  const { type, col1, col2, col3, data } = config;
  const isProducts = type === "product";

  return (
    <Table hover responsive className="table table-hover table-responsive text-center mt-3">
      <thead className="align-baseline">
        <tr>
          <th>#</th>
          <th>{col1}</th>
          <th>{col2}</th>
          <th>{col3}</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="align-baseline">
        {data.map((item, i) => (
          <tr key={i}>
            <th scope="row" onClick={() => onView(item)}>
              {++i}
            </th>
            <td className="text-capitalize" onClick={() => onView(item)}>
              {isProducts ? item.title : item.name}
            </td>
            <td onClick={() => onView(item)}>
              {isProducts ? `${item.stock_available} unités` : formatDate(item.date)}{" "}
            </td>
            <td onClick={() => onView(item)}>
              {isProducts ? `${item.sells} unités` : `${item.articles.length} produits`}
            </td>
            <td>
              <Button variant="link" size="sm"  className="text-dark border-0" onClick={() => onEdit(item)}>
                <TbEdit />
              </Button>
              <Button variant="link" size="sm" className="text-dark border-0" onClick={() => onDelete(item)}>
                <RiDeleteBin2Line />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default TableDefault;

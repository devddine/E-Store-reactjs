import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";
import ListTable from "./ListTable";
import SelectOptions from "./SelectOptions";
import { formatDate } from "../../utils/dateUtils";

const AdvModal = ({ type, show, onHide, mode, currentItem = {}, onAdd, onEdit, onDelete }) => {
  const [item, setItem] = useState({ name: "", date: new Date().toISOString().split("T")[0], articles: [] });

  let config;
  const titles = {
    stock: {
      view: "Détails Opération Stock",
      add: "Nouvelle Opération Stock",
      edit: "Editer Opération Stock",
      delete: "Supprimer Opération Stock",
    },
    sales: {
      view: "Détails Opération Vente",
      add: "Nouvelle Opération Vente",
      edit: "Editer Opération Vente",
      delete: "Supprimer Opération Vente",
    },
  };
  type === "stock" ? (config = titles.stock) : (config = titles.sales);

  const isView = mode === "view";
  const isEdit = mode === "edit";
  const isAdd = mode === "add";
  const isDelete = mode === "delete";

  useEffect(() => {
    (isEdit || isView || isDelete) &&
      setItem({
        name: currentItem.name,
        date: currentItem.date.split("T")[0],
        articles: currentItem.articles.map((article) => ({
          title: article.product.title,
          product: article.product.id,
          quantity: article.quantity,
        })),
      });
    isAdd && show && setItem({ name: "", date: new Date().toISOString().split("T")[0], articles: [] });
  }, [currentItem, isEdit, isView, isDelete, isAdd, show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.name.trim() || !item.date.trim()) return;

    try {
      isAdd && onAdd && onAdd(item);
      isEdit && onEdit && onEdit(currentItem._id, item);
      isDelete && onDelete && onDelete(currentItem._id);
      setProductList({ title: "", product: "", quantity: "" })
      onHide();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const [productList, setProductList] = useState({ title: "", product: "", quantity: "" });
  const handleListAdd = () => {
    setItem({ ...item, articles: [...item.articles, productList] });
    setProductList({ title: "", product: "", quantity: "" })
  };
  const handleRemove = (articleToRemove) => {
    setItem({
      ...item,
      articles: item.articles.filter((article) => article.product !== articleToRemove.product),
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" backdrop="static" centered>
      <Modal.Header className="border-0 pb-0">
        <Modal.Title>
          <h6 className="mb-0">{config[mode]}</h6>
        </Modal.Title>
      </Modal.Header>
      {isAdd || isEdit ? (
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="name">
                <Form.Label>le nom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Saisir le nom"
                  value={item.name}
                  onChange={(e) => setItem({ ...item, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={item.date}
                  onChange={(e) => setItem({ ...item, date: e.target.value })}
                />
              </Form.Group>
            </Row>
            <hr />
            <h6 className="mt-4 fw-bold">Produits:</h6>
            <ListTable articles={item.articles} isView={isView} onRemove={handleRemove} />
            <Row>
              <Form.Group as={Col} sm={6} className="pe-0">
                <SelectOptions
                  value={productList.product}
                  onChange={(e) =>
                    setProductList({
                      ...productList,
                      title: e.target.options[e.target.selectedIndex].text,
                      product: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group as={Col} sm={5} className="pe-0">
                <Form.Control
                  type="number"
                  placeholder="Saisir la Quantité"
                  min="0"
                  value={productList.quantity}
                  onChange={(e) => setProductList({ ...productList, quantity: e.target.value })}
                />
              </Form.Group>
              <Form.Group as={Col} sm={1} className="px-0">
                <div className="d-flex justify-content-center align-content-center">
                  <FaCirclePlus style={{ height: "38px" }} onClick={handleListAdd} />
                </div>
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0">
            <Button variant="secondary" onClick={onHide} size="sm">
              Annuler
            </Button>
            <Button variant="primary" type="submit" size="sm">
              {isAdd ? "Enregistrer" : "Enregistrer"}
            </Button>
          </Modal.Footer>
        </Form>
      ) : isDelete ? (
        <>
          <Modal.Body>
            <p className="mb-0">
              Vous êtes entrain de supprimer operation de stock de
              <span className="text-danger fw-medium"> {item.name} </span> le
              <span className="text-danger fw-medium"> {formatDate(item.date)}</span>!<br />
              <br />
              La suppression de cette opération va impacter la quantité du stock des produits qui y sont inclus. <br />
              <br />
              Etes vous sûre de vouloir supprimer cette opération?
            </p>
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0">
            <Button variant="secondary" onClick={onHide} size="sm">
              Annuler
            </Button>
            <Button variant="danger" onClick={handleSubmit} size="sm">
              Delete
            </Button>
          </Modal.Footer>
        </>
      ) : isView ? (
        <>
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="name">
                <Form.Label>le nom</Form.Label>
                <Form.Control type="text" value={item.name} disabled />
              </Form.Group>
              <Form.Group as={Col} controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" value={item.date} disabled />
              </Form.Group>
            </Row>
            <hr />
            <h6 className="mt-4 fw-bold">Produits</h6>
            <ListTable articles={item.articles} isView={isView} />
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0">
            <Button variant="secondary" onClick={onHide} size="sm">
              Annuler
            </Button>
          </Modal.Footer>
        </>
      ) : null}
    </Modal>
  );
};
export default AdvModal;

import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const MainModal = ({
  show,
  onHide,
  mode, // 'add', 'edit', 'delete', 'view'
  item = {},
  onAdd,
  onEdit,
  onDelete,
}) => {
  const isView = mode === "view";
  const isEdit = mode === "edit";
  const isAdd = mode === "add";
  const isDelete = mode === "delete";

  // Form state
  const [title, setTitle] = useState("");

  useEffect(() => {
    (isEdit || isView || isDelete) && setTitle(item.title);
    isAdd && show && setTitle("");
  }, [item, isEdit, isView, isDelete, isAdd, show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      isAdd && onAdd && onAdd({ title });
      isEdit && onEdit && onEdit(item._id, { title });
      isDelete && onDelete && onDelete(item._id);
      onHide();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const titles = {
    view: "Détails Produit",
    add: "Nouveau Produit",
    edit: "Editer Produit",
    delete: "Supprimer Produit",
  };

  return (
    <Modal show={show} onHide={onHide} backdrop="static" centered>
      <Modal.Header className="border-0 pb-0">
        <Modal.Title>
          <h6 className="mb-0">{titles[mode]}</h6>
        </Modal.Title>
      </Modal.Header>
      {isAdd || isEdit ? (
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Saisir le Titre du Produit"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
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
              Êtes-vous sûr de vouloir supprimer le produit <span class="text-danger">{title}</span>?
            </p>
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0">
            <Button variant="secondary" onClick={onHide}>
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
            <Form.Group>
              <Form.Control type="text" placeholder="Saisir le Titre du Produit" value={title} disabled />
            </Form.Group>
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
export default MainModal;

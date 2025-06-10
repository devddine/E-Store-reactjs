import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import ListTable from "./ListTable";
import SelectOptions from "./SelectOptions";
import useModalState from "../../hooks/useModalState";
import { FaCirclePlus } from "react-icons/fa6";
import styles from "../../../assets/styles/App.module.css";
import { useTranslation } from "react-i18next";

const EntityModal = ({
  type, // 'product' or 'operation'
  show,
  onHide,
  mode, // 'add', 'edit', 'delete', 'view'
  item = {},
  onAdd,
  onEdit,
  onDelete,
}) => {
  const { t } = useTranslation();
  const {
    isProduct,
    isAdd,
    isEdit,
    isDelete,
    isView,
    title,
    setTitle,
    operation,
    setOperation,
    handleSubmit,
    productList,
    setProductList,
    handleListAdd,
    handleListRemove,
    titleError,
    nameError,
    dateError,
    articlesError,
    productError,
    quantityError,
  } = useModalState(type, show, onHide, mode, item, onAdd, onEdit, onDelete);

  return (
    <Modal show={show} onHide={onHide} backdrop="static" centered size={isProduct ? "md" : "lg"}>
      <Modal.Header className="border-0 pb-0">
        <Modal.Title>
          <h6 className="mb-0">{t(`common.modal.title.${type}.${mode}`)}</h6>
        </Modal.Title>
      </Modal.Header>
      {(isAdd || isEdit) && (
        <Form noValidate onSubmit={handleSubmit}>
          <Modal.Body>
            {isProduct ? (
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder={t("common.modal.body.productTitlePlaceholder")}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  isInvalid={!!titleError}
                />
                <Form.Control.Feedback type="invalid">{titleError}</Form.Control.Feedback>
              </Form.Group>
            ) : (
              <>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="name">
                    <Form.Label>{t(`common.modal.body.name.${type}`)}</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={t(`common.modal.body.namePlaceholder.${type}`)}
                      value={operation.name}
                      onChange={(e) => setOperation({ ...operation, name: e.target.value })}
                      isInvalid={!!nameError}
                    />
                    <Form.Control.Feedback type="invalid">{nameError}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="date">
                    <Form.Label>{t("common.modal.body.date")}</Form.Label>
                    <Form.Control
                      type="date"
                      value={operation.date}
                      onChange={(e) => setOperation({ ...operation, date: e.target.value })}
                      isInvalid={!!dateError}
                    />
                    <Form.Control.Feedback type="invalid">{dateError}</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <hr />
                <h6 className="mt-4 fw-bold">
                  {t("common.modal.body.productList")}:{" "}
                  <span className="text-danger font-monospace fst-italic h6">{articlesError}</span>{" "}
                </h6>
                <ListTable articles={operation.articles} isView={isView} onRemove={handleListRemove} />
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
                      isInvalid={!!productError}
                    />
                    <Form.Control.Feedback type="invalid">{productError}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} sm={5} className="pe-0">
                    <Form.Control
                      type="number"
                      placeholder={t("common.modal.body.quantityPlaceholder")}
                      min="0"
                      value={productList.quantity}
                      onChange={(e) => setProductList({ ...productList, quantity: e.target.value })}
                      isInvalid={!!quantityError}
                    />
                    <Form.Control.Feedback type="invalid">{quantityError}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} sm={1} className="px-0">
                    <div className="d-flex justify-content-center py-2">
                      <FaCirclePlus className={styles.pointer} onClick={handleListAdd} />
                    </div>
                  </Form.Group>
                </Row>
              </>
            )}
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0">
            <Button variant="secondary" onClick={onHide} size="sm">
              {t("common.modal.buttons.cancel")}
            </Button>
            <Button variant="primary" type="submit" size="sm" className={styles.buttonPrimary}>
              {isAdd ? t("common.modal.buttons.save") : t("common.modal.buttons.modify")}
            </Button>
          </Modal.Footer>
        </Form>
      )}
      {isDelete && (
        <>
          <Modal.Body>
            <p className="mb-0">
              {isProduct
                ? t("common.modal.body.deleteConfirm.product") + " "
                : t(`common.modal.body.deleteConfirm.${type}.1`) + " "}
              <span className="text-danger fw-medium">{isProduct ? title : operation.name}</span>
              {isProduct ? (
                " ?"
              ) : (
                <>
                  {" " + t(`common.modal.body.deleteConfirm.${type}.2`) + " "}
                  <span className="text-danger fw-medium">{operation.date}</span>!<br />
                  <br />
                  {t(`common.modal.body.deleteConfirm.${type}.3`)}
                  <br />
                  <br />
                  {t(`common.modal.body.deleteConfirm.${type}.4`)}
                </>
              )}
            </p>
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0">
            <Button variant="secondary" onClick={onHide} size="sm">
              {t("common.modal.buttons.cancel")}
            </Button>
            <Button variant="danger" onClick={handleSubmit} size="sm">
              {t("common.modal.buttons.delete")}
            </Button>
          </Modal.Footer>
        </>
      )}
      {isView && (
        <>
          <Modal.Body>
            {isProduct ? (
              <Form.Group>
                <Form.Control type="text" value={title} disabled />
              </Form.Group>
            ) : (
              <>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="name">
                    <Form.Label>{t(`common.modal.body.name.${type}`)}</Form.Label>
                    <Form.Control type="text" value={operation.name} disabled />
                  </Form.Group>
                  <Form.Group as={Col} controlId="date">
                    <Form.Label>{t("common.modal.body.date")}</Form.Label>
                    <Form.Control type="date" value={operation.date} disabled />
                  </Form.Group>
                </Row>
                <hr />
                <h6 className="mt-4 fw-bold">{t("common.modal.body.productList")}</h6>
                <ListTable articles={operation.articles} isView={isView} />
              </>
            )}
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0">
            <Button variant="secondary" onClick={onHide} size="sm">
              {t("common.modal.buttons.cancel")}
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default EntityModal;

import { Button, Form, InputGroup } from "react-bootstrap";
import { HiOutlineSearch } from "react-icons/hi";

const Toolbar = ({ onAdd }) => {
  return (
    <div className="d-flex justify-content-between mt-3">
      <div className="search-bar">
        <div className="d-flex align-items-center">
          <Form.Control type="search" placeholder="Chercher un produit" />
          <Button variant="link" size="sm" className="text-dark border-0" id="search-button">
            <HiOutlineSearch />
          </Button>
        </div>
      </div>
      <Button variant="dark" className="main-button px-3 text-nowrap border-0" onClick={onAdd}>
      Nouveau Produit
      </Button>
    </div>
  );
};
export default Toolbar;

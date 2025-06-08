import { Link } from "react-router-dom";
import Divider from "../common/Divider";

const Header = () => {
  return (
    <>
      <header className="bg-light py-3 px-4">
        <Link className="text-decoration-none text-dark fw-semibold h4" to="/">
          E-STORE
        </Link>
      </header>
      <Divider />
    </>
  );
};
export default Header;

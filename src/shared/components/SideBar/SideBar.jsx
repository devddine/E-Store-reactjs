import { useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const SideBar = () => {
  const location = useLocation();
  const links = [
    { name: "Tableau de Bord", url: "/" },
    { name: "Gestion Produits", url: "/products" },
    { name: "Opérations Stock", url: "/stock" },
    { name: "Opérations Ventes", url: "/sales" },
  ];

  return (
    <aside className="bg-light px-3 py-3">
      <Nav activeKey={location.pathname} className="flex-column fw-semibold text-nowrap">
        {links.map((link, i) => (
          <Nav.Item key={i} className="py-1">
            <Nav.Link href={link.url}>{link.name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </aside>
  );
};

export default SideBar;

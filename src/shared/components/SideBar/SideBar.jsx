/**
 * @fileoverview SideBar component renders the navigation sidebar with links.
 */

import { useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useTranslation } from "react-i18next";

/**
 * SideBar component to display navigation links with active highlighting.
 * @returns {JSX.Element} The rendered sidebar component.
 */
const SideBar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const links = [
    { name: t("sidebar.dashboard"), url: "/" },
    { name: t("sidebar.products"), url: "/products" },
    { name: t("sidebar.stockOperations"), url: "/stock" },
    { name: t("sidebar.salesOperations"), url: "/sales" },
  ];

  return (
    <aside className="bg-light px-3 py-3 d-flex flex-column justify">
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

/**
 * @fileoverview MainLayout component provides the main layout structure with header, sidebar, and content outlet.
 */

import { Outlet } from "react-router-dom";
import Header from "../shared/components/Header/Header";
import SideBar from "../shared/components/SideBar/SideBar";
import { IconContext } from "react-icons";
import styles from "./../assets/styles/App.module.css";

/**
 * MainLayout component wraps the application layout with header, sidebar, and main content area.
 * @returns {JSX.Element} The rendered main layout component.
 */
const MainLayout = () => {
  return (
    <div className={`${styles.layout} d-flex flex-column`}>
      <Header />

      <div className="d-flex flex-grow-1">
        <SideBar />

        <main className="flex-grow-1 p-4">
          <IconContext.Provider value={{ size: "1.5rem", color: "black" }}>
            <Outlet />
          </IconContext.Provider>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

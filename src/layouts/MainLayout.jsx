import { Outlet } from "react-router-dom";
import Header from "../shared/components/Header/Header";
import SideBar from "../shared/components/SideBar/SideBar";
import { IconContext } from "react-icons";

const MainLayout = () => {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
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

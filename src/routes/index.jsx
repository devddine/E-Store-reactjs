import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Products from "../pages/Products";
import Stock from "../pages/Stock";
import Sales from "../pages/Sales";
import NoPage from "../pages/NoPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<NoPage />} />
        <Route path="products" element={<Products />} />
        <Route path="stock" element={<Stock />} />
        <Route path="sales" element={<Sales />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

/**
 * @fileoverview AppRoutes component defines the routing structure of the application.
 */

import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../features/dashboard";
import ProductsPage from "../features/products";
import StockPage from "../features/stock";
import SalesPage from "../features/sales";
import ErrorPage from "../pages/ErrorPage";

/**
 * AppRoutes component sets up routes for dashboard, products, stock, sales, and error pages.
 * @returns {JSX.Element} The rendered routes component.
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="stock" element={<StockPage />} />
        <Route path="sales" element={<SalesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

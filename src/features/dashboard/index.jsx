/**
 * @fileoverview Dashboard page component displaying key stats, charts, and recent activities.
 */

import { Col, Container, Row } from "react-bootstrap";
import Loading from "../../shared/components/common/Loading";
import CardStats from "./components/CardStats";
import { FaBoxOpen } from "react-icons/fa";
import { FaDolly } from "react-icons/fa6";
import { MdOutlinePointOfSale } from "react-icons/md";
import AreaChart from "./components/charts/AreaChart";
import useGetData from "./hooks/useGetData";
import useStockSalesData from "./hooks/useStockSalesData";
import PieChart from "./components/charts/PieChart";
import useProductsStats from "./hooks/useProductsStats";
import BarChart from "./components/charts/BarChart";
import useRecentActivities from "./hooks/useRecentActivities";
import Activity from "./components/Activity";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

/**
 * DashboardPage component renders the dashboard with stats, charts, and recent activities.
 * @component
 * @returns {JSX.Element} The dashboard page UI.
 */
const DashboardPage = () => {
  const { t } = useTranslation();

  // Fetch products, stock, sales data and loading state
  const { productsData, stockData, salesData, loading } = useGetData();

  // Process stock and sales data for charts
  const { stock, sales, stockLength, salesLength } = useStockSalesData(stockData, salesData);

  // Get recent activity actions from stock and sales data
  const { actions } = useRecentActivities(stockData, salesData);

  // Get product statistics for pie chart
  const stats = useProductsStats(productsData);

  const isLoading = loading;

  useEffect(() => {
    document.title = `${t("header.appName")} - ${t("dashboard.title")}`;
  });

  return (
    <>
      {isLoading && <Loading />}

      <h2 className="fw-bolder">{t("dashboard.title")}</h2>

      <Container className=" mt-3">
        <Row>
          <Col>
            <CardStats
              title={t("dashboard.stats.products")}
              value={productsData.length}
              icon={<FaBoxOpen size={"10rem"} color="#6032dd" />}
            />
          </Col>
          <Col>
            <CardStats
              title={t("dashboard.stats.stockOperations")}
              value={stockData.length}
              icon={<FaDolly size={"10rem"} color="#6032dd" />}
            />
          </Col>
          <Col>
            <CardStats
              title={t("dashboard.stats.salesOperations")}
              value={salesData.length}
              icon={<MdOutlinePointOfSale size={"10rem"} color="#6032dd" />}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <AreaChart stockData={stock} salesData={sales} />
        </Row>
        <Row className="mt-2">
          <Col>
            <PieChart stats={stats} />
          </Col>
          <Col>
            <BarChart stockData={stockLength} salesData={salesLength} />
          </Col>
        </Row>

        <Row className="mt-2">
          {actions.map((action, i) => (
            <div key={i} className="d-flex align-items-center mb-3">
              <Activity item={action} />
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DashboardPage;

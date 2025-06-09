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

const DashboardPage = () => {
  const { productsData, stockData, salesData, loading } = useGetData();
  const { stock, sales, stockLength, salesLength } = useStockSalesData(stockData, salesData);
  const { actions } = useRecentActivities(stockData, salesData);
  const stats = useProductsStats(productsData);
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const isLoading = loading;

  return (
    <>
      {isLoading && <Loading />}

      <h2 className="fw-bolder">Tableau de Bord</h2>

      <Container className=" mt-3">
        <Row>
          <Col>
            <CardStats title="Produits" value={productsData.length} icon={<FaBoxOpen size={"10rem"} />} />
          </Col>
          <Col>
            <CardStats title="Opérations Stock" value={stockData.length} icon={<FaDolly size={"10rem"} />} />
          </Col>
          <Col>
            <CardStats
              title="Opérations Ventes"
              value={salesData.length}
              icon={<MdOutlinePointOfSale size={"10rem"} />}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <AreaChart stockData={stock} salesData={sales} weekdays={weekdays} />
        </Row>
        <Row className="mt-2">
          <Col>
            <PieChart stats={stats} />
          </Col>
          <Col>
            <BarChart stockData={stockLength} salesData={salesLength} weekdays={weekdays} />
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

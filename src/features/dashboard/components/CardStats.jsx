import { Card } from "react-bootstrap";

const CardStats = ({ title, value, icon }) => {
  
  return (
    <Card className="bg-light">
      <Card.Body className="d-flex position-relative overflow-hidden">
        <div>
          <h2 className="mb-0">{value}</h2>
          <h6 className="text-muted fw-semibold">{title}</h6>
        </div>
        <span className="opacity-50 fs-1 position-absolute" style={{ right: "-0.5rem", top: 0 }}>
          {icon}
        </span>
      </Card.Body>
    </Card>
  );
};
export default CardStats;

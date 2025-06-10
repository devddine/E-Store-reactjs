/**
 * @fileoverview CardStats component displays a statistic card with a title, value, and icon.
 */

import { Card } from "react-bootstrap";

/**
 * CardStats component to show a statistic with title, value, and icon.
 * @param {Object} props - Component props.
 * @param {string} props.title - Title of the statistic.
 * @param {number|string} props.value - Value of the statistic.
 * @param {JSX.Element} props.icon - Icon to display on the card.
 * @returns {JSX.Element} The rendered statistic card component.
 */
const CardStats = ({ title, value, icon }) => {
  return (
    <Card className="bg-light">
      <Card.Body className="d-flex position-relative overflow-hidden">
        <div>
          <h2 className="mb-0">{value}</h2>
          <h6 className="text-muted fw-semibold">{title}</h6>
        </div>
        <span className="opacity-25 fs-1 position-absolute top-0 end-0 ">{icon}</span>
      </Card.Body>
    </Card>
  );
};
export default CardStats;

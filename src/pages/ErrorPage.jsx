import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="custom-bg text-dark">
      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center min-vh-100 px-2"
        style={{ zIndex: 2, backgroundColor: "rgb(255, 255, 255)" }}
      >
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-2 fw-medium mt-4">Oops! Page not found</p>
          <p className="mt-4 mb-5">The page you're looking for doesn't exist or has been moved.</p>
          <Button as={Link} to="/stock" variant="dark" className="fw-semibold rounded-pill px-4 py-2">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;

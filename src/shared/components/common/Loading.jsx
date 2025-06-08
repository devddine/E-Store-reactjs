import { BarLoader, ClimbingBoxLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ zIndex: 2, backgroundColor: "rgba(0, 0, 0, 0.75)" }}
    >
      <BarLoader color="#f20707" size={25} />
    </div>
  );
};

export default Loading;

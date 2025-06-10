import { RiseLoader } from "react-spinners";
import styles from "./../../../assets/styles/App.module.css";

const Loading = () => {
  return (
    <div
      className={`${styles.loading} position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}
    >
      <RiseLoader color="#7749f8" size={25} />
    </div>
  );
};

export default Loading;

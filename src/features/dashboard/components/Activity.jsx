import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { timeAgo } from "../../../shared/utils/dateUtils";
import styles from "./../../../assets/styles/App.module.css";
import { useTranslation } from "react-i18next";

const Activity = ({ item }) => {
  const { t } = useTranslation();
  const isStock = item.source === "stock";

  return (
    <div className="d-flex align-items-start mb-3">
      {isStock ? (
        <div className={`${styles.icons} btn btn-outline-warning rounded-circle d-flex align-items-center mt-3`}>
          <BsClipboard2CheckFill color="#ffc107" />
        </div>
      ) : (
        <div className={`${styles.icons} btn btn-outline-info rounded-circle d-flex align-items-center mt-3`}>
          <FaCartShopping color="#0dcaf0" />
        </div>
      )}

      <div className="ms-3 mt-1">
        <h6 className="text-muted fw-medium mb-1">
          {isStock ? t("dashboard.activity.newStockAdded") : t("dashboard.activity.newSaleRecorded")}
        </h6>

        <p className="text-muted mb-1">
          {item.name} {isStock ? t("dashboard.activity.added") : t("dashboard.activity.bought")}
          {item.articles.map((article) => ` ${article.quantity} ${article.product.title}`).join(" et ")}
          {isStock ? " " + t("dashboard.activity.inStock") : "."}
        </p>

        <span className="fw-light text-muted">{timeAgo(item.createdAt)}</span>
      </div>
    </div>
  );
};

export default Activity;

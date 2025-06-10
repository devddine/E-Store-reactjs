/**
 * @fileoverview StockPage component manages stock data and UI including table, modal, and toolbar.
 */

import StockTable from "./components/StockTable";
import useAddStock from "./hooks/useAddStock";
import useDeleteStock from "./hooks/useDeleteStock";
import useEditStock from "./hooks/useEditStock";
import useStock from "./hooks/useStock";
import useStockModal from "./hooks/useStockModal";
import EntityModal from "../../shared/components/common/EntityModal";
import Loading from "../../shared/components/common/Loading";
import Toolbar from "../../shared/components/Toolbar/Toolbar";
import useSearch from "../../shared/hooks/useSearch";
import { useTranslation } from "react-i18next";

/**
 * StockPage component to display and manage stock items with search, add, edit, delete, and modal functionalities.
 * @returns {JSX.Element} The rendered stock page component.
 */
const StockPage = () => {
  const { t } = useTranslation();
  const { stock, loading, refreshStock } = useStock();
  const { handleAddStock, adding } = useAddStock(refreshStock);
  const { handleEditStock, updating } = useEditStock(refreshStock);
  const { handleDeleteStock, deleting } = useDeleteStock(refreshStock);
  const { modalMode, currentStock, openModal, closeModal } = useStockModal();
  const isLoading = loading || adding || updating || deleting;

  const { filteredData, searchValue, setSearchValue } = useSearch("operation", stock);
  return (
    <>
      {isLoading && <Loading />}

      <h2 className="fw-bolder">{t("stock.title")}</h2>

      <Toolbar type="stock" searchValue={searchValue} onSearch={setSearchValue} onAdd={() => openModal("add")} />

      <StockTable
        stockList={filteredData.length || searchValue ? filteredData : stock}
        onView={(stock) => openModal("view", stock)}
        onEdit={(stock) => openModal("edit", stock)}
        onDelete={(stock) => openModal("delete", stock)}
      />

      <EntityModal
        type="stock"
        show={!!modalMode}
        onHide={closeModal}
        mode={modalMode}
        item={currentStock}
        onAdd={handleAddStock}
        onEdit={handleEditStock}
        onDelete={handleDeleteStock}
      />
    </>
  );
};
export default StockPage;

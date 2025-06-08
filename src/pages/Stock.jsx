import StockTable from "../features/stock/components/StockTable";
import useAddStock from "../features/stock/hooks/useAddStock";
import useDeleteStock from "../features/stock/hooks/useDeleteStock";
import useEditStock from "../features/stock/hooks/useEditStock";
import useStock from "../features/stock/hooks/useStock";
import useStockModal from "../features/stock/hooks/useStockModal";
import EntityModal from "../shared/components/common/EntityModal";
import Loading from "../shared/components/common/Loading";
import Toolbar from "../shared/components/Toolbar/Toolbar";

const Stock = () => {
  const { stock, loading, refreshStock } = useStock();
  const { handleAddStock, adding } = useAddStock(refreshStock);
  const { handleEditStock, updating } = useEditStock(refreshStock);
  const { handleDeleteStock, deleting } = useDeleteStock(refreshStock);
  const { modalMode, currentStock, openModal, closeModal } = useStockModal();
  const isLoading = loading || adding || updating || deleting;

  return (
    <>
      {isLoading && <Loading />}

      <h2 className="fw-bolder">Opérations Stock</h2>

      <Toolbar onAdd={() => openModal("add")} />

      <StockTable
        stockList={stock}
        onView={(stock) => openModal("view", stock)}
        onEdit={(stock) => openModal("edit", stock)}
        onDelete={(stock) => openModal("delete", stock)}
      />

      <EntityModal
        type="operation"
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
export default Stock;

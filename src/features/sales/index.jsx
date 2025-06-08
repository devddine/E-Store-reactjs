import EntityModal from "../../shared/components/common/EntityModal";
import Loading from "../../shared/components/common/Loading";
import Toolbar from "../../shared/components/Toolbar/Toolbar";
import SaleTable from "./components/SaleTable";
import useAddSale from "./hooks/useAddSale";
import useDeleteSale from "./hooks/useDeleteSale";
import useEditSale from "./hooks/useEditSale";
import useSale from "./hooks/useSale";
import useSaleModal from "./hooks/useSaleModal";

const SalesPage = () => {
  const { sales, loading, refreshSales } = useSale();
  const { handleAddSale, adding } = useAddSale(refreshSales);
  const { handleEditSale, updating } = useEditSale(refreshSales);
  const { handleDeleteSale, deleting } = useDeleteSale(refreshSales);
  const { modalMode, currentSale, openModal, closeModal } = useSaleModal();
  const isLoading = loading || adding || updating || deleting;

  return (
    <>
      {isLoading && <Loading />}

      <h2 className="fw-bolder">Opérations Stock</h2>

      <Toolbar onAdd={() => openModal("add")} />

      <SaleTable
        salesList={sales}
        onView={(sale) => openModal("view", sale)}
        onEdit={(sale) => openModal("edit", sale)}
        onDelete={(sale) => openModal("delete", sale)}
      />

      <EntityModal
        type="operation"
        show={!!modalMode}
        onHide={closeModal}
        mode={modalMode}
        item={currentSale}
        onAdd={handleAddSale}
        onEdit={handleEditSale}
        onDelete={handleDeleteSale}
      />
    </>
  );
};
export default SalesPage;

import { useTranslation } from "react-i18next";
import EntityModal from "../../shared/components/common/EntityModal";
import Loading from "../../shared/components/common/Loading";
import Toolbar from "../../shared/components/Toolbar/Toolbar";
import useSearch from "../../shared/hooks/useSearch";
import SaleTable from "./components/SaleTable";
import useAddSale from "./hooks/useAddSale";
import useDeleteSale from "./hooks/useDeleteSale";
import useEditSale from "./hooks/useEditSale";
import useSale from "./hooks/useSale";
import useSaleModal from "./hooks/useSaleModal";

const SalesPage = () => {
  const { t } = useTranslation();
  const { sales, loading, refreshSales } = useSale();
  const { handleAddSale, adding } = useAddSale(refreshSales);
  const { handleEditSale, updating } = useEditSale(refreshSales);
  const { handleDeleteSale, deleting } = useDeleteSale(refreshSales);
  const { modalMode, currentSale, openModal, closeModal } = useSaleModal();
  const isLoading = loading || adding || updating || deleting;

  const { filteredData, searchValue, setSearchValue } = useSearch("operation", sales);

  return (
    <>
      {isLoading && <Loading />}

      <h2 className="fw-bolder">{t("sales.title")}</h2>

      <Toolbar type="sale" searchValue={searchValue} onSearch={setSearchValue} onAdd={() => openModal("add")} />

      <SaleTable
        salesList={filteredData.length || searchValue ? filteredData : sales}
        onView={(sale) => openModal("view", sale)}
        onEdit={(sale) => openModal("edit", sale)}
        onDelete={(sale) => openModal("delete", sale)}
      />

      <EntityModal
        type="sale"
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

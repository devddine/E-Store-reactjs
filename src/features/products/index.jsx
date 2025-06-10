import { useTranslation } from "react-i18next";
import Toolbar from "../../shared/components/Toolbar/Toolbar";
import ProductTable from "./components/ProductTable";
import Loading from "../../shared/components/common/Loading";

import useProducts from "./hooks/useProducts";
import useAddProduct from "./hooks/useAddProduct";
import useEditProduct from "./hooks/useEditProduct";
import useDeleteProduct from "./hooks/useDeleteProduct";
import useProductModal from "./hooks/useProductModal";
import EntityModal from "../../shared/components/common/EntityModal";
import useSearch from "../../shared/hooks/useSearch";

const ProductsPage = () => {
  const { t } = useTranslation();
  const { products, loading, refreshProducts } = useProducts();
  const { handleAddProduct, adding } = useAddProduct(refreshProducts);
  const { handleEditProduct, updating } = useEditProduct(refreshProducts);
  const { handleDeleteProduct, deleting } = useDeleteProduct(refreshProducts);
  const { modalMode, currentProduct, openModal, closeModal } = useProductModal();
  const isLoading = loading || adding || updating || deleting;

  const { filteredData, searchValue, setSearchValue } = useSearch("product", products);
  return (
    <>
      {isLoading && <Loading />}

      <h2 className="fw-bolder">{t("products.title")}</h2>

      <Toolbar type="product" searchValue={searchValue} onSearch={setSearchValue} onAdd={() => openModal("add")} />

      <ProductTable
        productsList={filteredData.length || searchValue ? filteredData : products}
        onView={(product) => openModal("view", product)}
        onEdit={(product) => openModal("edit", product)}
        onDelete={(product) => openModal("delete", product)}
      />

      <EntityModal
        type="product"
        show={!!modalMode}
        onHide={closeModal}
        mode={modalMode}
        item={currentProduct}
        onAdd={handleAddProduct}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
    </>
  );
};

export default ProductsPage;

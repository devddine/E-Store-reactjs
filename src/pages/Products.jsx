import Toolbar from "../shared/components/Toolbar/Toolbar";
import ProductTable from "../features/products/components/ProductTable";
import Loading from "../shared/components/common/Loading";

import useProducts from "../features/products/hooks/useProducts";
import useAddProduct from "../features/products/hooks/useAddProduct";
import useEditProduct from "../features/products/hooks/useEditProduct";
import useDeleteProduct from "../features/products/hooks/useDeleteProduct";
import useProductModal from "../features/products/hooks/useProductModal";
import EntityModal from "../shared/components/common/EntityModal";

const Products = () => {
  const { products, loading, refreshProducts } = useProducts();
  const { handleAddProduct, adding } = useAddProduct(refreshProducts);
  const { handleEditProduct, updating } = useEditProduct(refreshProducts);
  const { handleDeleteProduct, deleting } = useDeleteProduct(refreshProducts);
  const { modalMode, currentProduct, openModal, closeModal } = useProductModal();
  const isLoading = loading || adding || updating || deleting;

  return (
    <>
      {isLoading && <Loading />}

      <h2 className="fw-bolder">Produits</h2>

      <Toolbar onAdd={() => openModal("add")} />

      <ProductTable
        productsList={products}
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

export default Products;

import { FC } from "react";
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../services/ProductsApi";

export const MultiActionFunc: FC = () => {
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  // const { refetch } = useGetAllProductsQuery(); // refetching data
  const productToCreate = {
    id: "6",
    name: "Crips",
    quantity: 28,
    price: 0.5,
  };

  const productToUpdate = {
    id: "5",
    name: "Cup_cakes",
    quantity: 14,
    price: 0.58,
  };

  const handleAddProduct = async () => {
    await addProduct(productToCreate);
    // refetch();
  };
  const handleUpdateProduct = async () => {
    await updateProduct(productToUpdate);
    // refetch();
  };
  const handleDeleteProduct = async () => {
    await deleteProduct(productToCreate.id);
    // refetch();
  };

  return (
    <>
      <button onClick={handleAddProduct}>Add Product</button>
      <button onClick={handleUpdateProduct}>Update</button>
      <button onClick={handleDeleteProduct}>Delete</button>
    </>
  );
};

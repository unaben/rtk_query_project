import { useGetOneproductQuery } from "../services/ProductsApi";

const ProductDetail = ({ id }: { id: string }) => {
  const { data } = useGetOneproductQuery(id);
  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};
export default ProductDetail;

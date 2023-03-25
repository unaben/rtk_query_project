import { FC } from "react";
import "./App.css";
import { MultiActionFunc } from "./components/MultiActionFunc";
import ProductDetail from "./components/ProductDetail";
import { Product } from "./model/product";
import { useGetAllProductsQuery } from "./services/ProductsApi";

const App: FC = () => {
  const { data : products, error, isLoading, isFetching, isSuccess } =
    useGetAllProductsQuery();
  console.log(products);
  return (
    <div className="App">
      <h1>RTK Query</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {products?.map((product: Product) => {
            return (
              <div className="data" key={product.id}>
                <span>{product.name}</span>
                <span>
                  <ProductDetail id={product.id} />
                </span>
              </div>
            );
          })}
          <MultiActionFunc />
          <div></div>
        </div>
      )}
    </div>
  );
};

export default App;

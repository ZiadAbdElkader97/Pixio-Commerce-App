import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { assets } from "../assets/assets";

export default function FilterData() {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1024px]:lg:grid-cols-5 gap-6">
            {filterProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <img src={assets.no_products} />
        </div>
      )}
    </div>
  );
}

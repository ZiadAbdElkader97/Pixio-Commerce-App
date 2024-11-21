/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { assets, categories } from "../assets/assets";
import CategorySection from "../components/CategorySection";
import InfoSection from "../components/InfoSection";
import { setProducts } from "../redux/products-slice";
import { useSelector, useDispatch } from "react-redux";
import { productsData } from "../assets/assets";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";

export default function Home() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(productsData));
  }, []);

  return (
    <>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-3/12">
            <div
              id="cate-heading"
              className="uppercase text-white bg-blue-600 font-bold px-2 py-2.5"
            >
              shop by categories
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  id="cate-list"
                  className="flex items-center font-medium"
                >
                  <div className="w-3 h-3 border-2 border-blue-500 rounded-full mr-2"></div>
                  {cat}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-9/12 mt-6 md:mt-0 relative">
            <img className="w-full" src={assets.home_background} />
            <div id="home-content" className="absolute top-16 left-8">
              <p id="pixio-p" className="text-gray-700 font-bold text-xl mb-4">
                Pixio | Shop
              </p>
              <h2
                id="welcome-heading"
                className="uppercase text-2xl font-bold md:text-3xl"
              >
                welcome to pixio shop
              </h2>
              <p
                id="welcome-p"
                className="uppercase text-md md:text-xl mt-2.5 font-bold"
              >
                millions+ prouducts
              </p>
              <button
                id="shop-now-btn"
                className="text-white uppercase bg-blue-600 px-8 py-2 mt-4 rounded-md hover:bg-blue-700 transform transition-transform duration-300"
              >
                shop now
              </button>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />
        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1024px]:lg:grid-cols-5 gap-6">
            {products.products.slice(0, 5).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </>
  );
}

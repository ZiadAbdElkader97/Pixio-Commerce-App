import { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();

  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    console.log(id);
    setProduct(newProduct);
  }, [id, products]);

  if (!product) return <div>Loading ...</div>;

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* Product Image */}
        <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
          <img src={product.image} alt={product.name} className="h-full" />
        </div>
        {/* Product Information */}
        <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${product.price}
          </p>
          <div className="flex items-center mb-4 gab-x-2">
            {/* <label htmlFor="quantity" className="mr-2">Quantity:</label> */}
            <input
              id="quantity"
              type="number"
              min="1"
              className="border-2 p-1 w-16"
            />
            <button className="bg-blue-600 text-white py-1.5 px-4 hover:bg-blue-800 rounded">
              Add To Cart
            </button>
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" />
              Delivery & Return
            </p>
            <p className="flex items-center">
              <FaQuestion className="mr-1" />
              Ask a Question
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Product Description</h3>
        <p>Product description will goes here.</p>
      </div>
    </div>
  );
}

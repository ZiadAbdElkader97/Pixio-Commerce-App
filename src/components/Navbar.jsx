import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import { setSearchTerm } from "../redux/products-slice.jsx";

export default function Navbar() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const products = useSelector((state) => state.cart.products);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center md:px-16 lg:px-24">
        <div className="w-[30%]">
          <Link to="/">
            <img src={assets.login_icon} />
          </Link>
        </div>
        <div className="w-full relative mx-4">
          <form
            onSubmit={handleSearch}
            className="flex justify-between items-center"
          >
            <input
              id="navbar-search-input"
              type="text"
              className="py-2 text-[18px] px-4 w-full border-2 rounded-md"
              placeholder="Search Product"
              onChange={(e) => setSearch(e.target.value)}
            />
            <img
              id="navbar-search-icon"
              className="absolute right-3 w-6 cursor-pointer"
              src={assets.search_icon}
            />
          </form>
        </div>
        <div className="w-[30%] flex items-center justify-center gap-3">
          <Link to="/cart" className="relative">
            <img className="w-7" src={assets.cart_icon} />
            {products.length > 0 && (
              <span className="absolute top-0 left-3 w-3 text-xs bg-blue-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            id="navbar-login-button"
            className="text-[18px] hidden md:block"
            onClick={() => setIsModelOpen(true)}
          >
            Login | Register
          </button>
          <img
            className="w-6 block md:hidden cursor-pointer"
            src={assets.profile_icon}
            onClick={() => setIsModelOpen(true)}
          />
        </div>
      </div>
      <div
        id="navbar-menu"
        className="flex items-center justify-center gap-5 py-4 font-[500] text-md"
      >
        <Link to="/" className="hover:underline uppercase">
          home
        </Link>
        <Link to="/shop" className="hover:underline uppercase">
          shop
        </Link>
        <Link to="/contact" className="hover:underline uppercase">
          contact
        </Link>
        <Link to="/about" className="hover:underline uppercase">
          about
        </Link>
      </div>
      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
}

import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Pixio Shop</h3>
          <p className="mt-4">
            Your one-step for all your needs. Shop with use and experience the
            best online shopping experiences.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex gap-2 mt-4">
            <a href="" className="hover:text-blue-500">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="" className="hover:text-blue-500">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="" className="hover:text-blue-500">
              <FaGithub className="text-2xl" />
            </a>
            <a href="" className="hover:text-blue-500">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 pl-4 rounded-l-lg bg-gray-800 border border-gray-600"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg border border-blue-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div
        id="footer-copyright"
        className="container mx-auto text-center mt-8 border-t border-gray-700 pt-4"
      >
        <p>Copyright 2024 © pixio.com - All Right Reserved.</p>
      </div>
    </footer>
  );
}

import login_icon from "./imgs/logo.svg";
import search_icon from "./icons/search_icon.png";
import cart_icon from "./icons/cart_icon.png";
import profile_icon from "./icons/profile_icon.png";
import home_background from "./imgs/home_background.jpg";
import men_section from "./imgs/men_section.jpg";
import women_section from "./imgs/women_section.jpg";
import kids_section from "./imgs/kids_section.jpg";
import bag_pro from "./imgs/bag_pro.jpg";
import headphone_pro from "./imgs/headphone_pro.jpg";
import cap_pro from "./imgs/cap_pro.jpg";
import boot_pro from "./imgs/boot_pro.jpg";
import mobile_pro from "./imgs/mobile_pro.jpg";
import shampoo_pro from "./imgs/shampoo_pro.jpg";
import shirt_pro from "./imgs/shirt_pro.jpg";
import shoes_pro from "./imgs/shoes_pro.jpg";
import trouser_pro from "./imgs/trouser_pro.jpg";
import watch_pro from "./imgs/watch_pro.jpg";
import empty_cart from "./imgs/empty_cart.png";
import no_products from "./imgs/no_products.png";

export const assets = {
  login_icon,
  search_icon,
  cart_icon,
  profile_icon,
  home_background,
  empty_cart,
  no_products
};

export const categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Automotive",
];

export const categorySection = [
  {
    title: "Men",
    imageUrl: men_section,
  },
  {
    title: "Women",
    imageUrl: women_section,
  },
  {
    title: "Kids",
    imageUrl: kids_section,
  },
];

export const productsData = [
  {
    id: 1,
    image: bag_pro,
    name: "Product 1",
    price: 29.99,
  },
  {
    id: 2,
    image: headphone_pro,
    name: "Product 2",
    price: 39.99,
  },
  {
    id: 3,
    image: cap_pro,
    name: "Product 3",
    price: 19.99,
  },
  {
    id: 4,
    image: boot_pro,
    name: "Product 4",
    price: 49.99,
  },
  {
    id: 5,
    image: mobile_pro,
    name: "Product 5",
    price: 255.99,
  },
  {
    id: 6,
    image: shampoo_pro,
    name: "Product 6",
    price: 12.99,
  },
  {
    id: 7,
    image: shirt_pro,
    name: "Product 7",
    price: 55.99,
  },
  {
    id: 8,
    image: shoes_pro,
    name: "Product 8",
    price: 82.99,
  },
  {
    id: 9,
    image: trouser_pro,
    name: "Product 9",
    price: 66.99,
  },
  {
    id: 10,
    image: watch_pro,
    name: "Product 10",
    price: 150.99,
  },
];

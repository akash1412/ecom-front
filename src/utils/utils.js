import flash from "../assets/icons/icons8-flash-on.svg";
import cap from "../assets/icons/icons8-cap.svg";
import cloth from "../assets/icons/icons8-t-shirt.svg";
import diamond from "../assets/icons/icons8-diamond.svg";
import shoe from "../assets/icons/icons8-trainers.svg";
import gifts from "../assets/icons/icons8-gift.svg";
import activewear from "../assets/icons/icons8-tracksuit.svg";
import purse from "../assets/icons/icons8-red-purse.svg";

import { FiSettings, FiUser } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

const Items = [
  {
    path: "/shop/new-in",
    icon: flash,
    name: "New In",
  },
  {
    path: "/shop/casual",
    icon: cloth,
    name: "casual",
  },
  {
    path: "/shop/sneaker",
    icon: shoe,
    name: "sneakers",
  },
  {
    path: "/shop/cap",
    icon: cap,
    name: "cap",
  },
  {
    path: "/shop/accessories",
    icon: purse,
    name: "Accessories",
  },
  {
    path: "/shop/activewear",
    icon: activewear,
    name: "Activewear",
  },
  {
    path: "/shop/gifts&living",
    icon: gifts,
    name: "Gifts & Living",
  },
  {
    path: "/shop/inspiration",
    icon: diamond,
    name: "Inspiration",
  },
];

export const dropDownIcons = [
  {
    icon: FiUser,
    path: "/profile",
    bgColor: "#b2d430",
  },
  {
    icon: FiSettings,
    path: "/profile/settings",
    bgColor: "#fe5f55",
  },
  {
    icon: BsBag,
    path: "/profile/cart",
    bgColor: "#bf5caa",
  },
  {
    icon: AiOutlineHeart,
    path: "/profile/liked-products",
    bgColor: "#fd0054",
  },
  {
    icon: IoIosAddCircleOutline,
    path: "/add-products",
    bgColor: "#df8931",
  },
];

export default Items;

export const addToCartFunc = (item, cartItemsArray) => {
  const ItemExisting = cartItemsArray.find(
    (cartItem) => cartItem.productId === item.productId
  );

  if (ItemExisting) {
    return cartItemsArray.map((cartItem) => {
      if (cartItem.productId === item.productId) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  }

  return [...cartItemsArray, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (cartItemToRemove, cartItems) => {
  const ItemExists = cartItems.find(
    (cartItem) => cartItem.productId === cartItemToRemove.productId
  );

  if (ItemExists.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.productId !== cartItemToRemove.productId
    );
  }

  return cartItems.map((cartItem) => {
    if (cartItem.productId === cartItemToRemove.productId) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    } else {
      return cartItem;
    }
  });
};

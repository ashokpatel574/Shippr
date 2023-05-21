import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "ashok",
    lastName: "patel",
    email: "ashokpatel574@gmail.com",
    password: "ashokpatel",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "adim",
    lastName: "adim",
    email: "adim@gmail.com",
    password: "adim",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

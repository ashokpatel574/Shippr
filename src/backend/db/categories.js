import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "tshirt",
    image:
      "https://res.cloudinary.com/dz0snqho8/image/upload/v1684437295/shippr/Shippr%20Images/categories/categoryTshirtImg_ncged2.webp",
  },
  {
    _id: uuid(),
    categoryName: "shirt",
    iamge:
      "https://res.cloudinary.com/dz0snqho8/image/upload/v1684437295/shippr/Shippr%20Images/categories/categoryShirtImg_gvjnnn.webp",
  },
  {
    _id: uuid(),
    categoryName: "looseTshirt",
    image:
      "https://res.cloudinary.com/dz0snqho8/image/upload/v1684437297/shippr/Shippr%20Images/categories/categoryLooseTshirtImg_zovvbc.webp",
  },
];

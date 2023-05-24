import {
  GetAllProducts,
  GetAllCategories,
  GetCartList,
  GetWishList,
} from "./apiUtils";

import { ActionType } from "../constant";

export const getServerData = async (token, dispatch) => {
  try {
    const productsData = await GetAllProducts();
    if (productsData.status === 200 || productsData.status === 201) {
      dispatch({
        type: ActionType.InitialDataFetch,
        payload: { products: productsData.data.products },
      });
    }

    const categoriesData = await GetAllCategories();
    if (categoriesData.status === 200 || categoriesData.status === 201) {
      dispatch({
        type: ActionType.InitialDataFetch,
        payload: { categories: categoriesData.data.categories },
      });
    }

    const cartData = await GetCartList({ encodedToken: token });
    if (cartData.status === 200 || cartData.status === 201) {
      dispatch({
        type: ActionType.SetCartList,
        payload: { cart: cartData.data.cart },
      });
    }

    if (token) {
      const wishListData = await GetWishList({ encodedToken: token });
      if (wishListData.status === 200 || wishListData.status === 201) {
        dispatch({
          type: ActionType.SetWishList,
          payload: { wishlist: wishListData.data.wishlist },
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
};

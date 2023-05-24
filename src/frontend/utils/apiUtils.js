import axios from "axios";
import { ActionType } from "../constant";

export const LoginService = async ({ email, password }) =>
  axios.post("/api/auth/login", {
    email,
    password,
  });

export const SignUpService = async ({ email, password, name }) => {
  return axios.post("/api/auth/signup", {
    email,
    password,
    name,
  });
};

export const GetAllProducts = async () => axios.get("/api/products");

export const GetAllCategories = async () => axios.get("/api/categories");

export const GetWishList = async ({ encodedToken }) =>
  axios.get("/api/user/wishlist", {
    headers: {
      authorization: encodedToken,
    },
  });

export const GetCartList = async ({ encodedToken }) =>
  axios.get("/api/user/cart", {
    headers: {
      authorization: encodedToken,
    },
  });

export const PostWishListItem = async ({ product, encodedToken, dispatch }) => {
  const wishlistData = await axios.post(
    "/api/user/wishlist",
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

  if (wishlistData.status === 200 || wishlistData.status === 201) {
    dispatch({
      type: ActionType.SetWishList,
      payload: {
        wishlist: wishlistData?.data?.wishlist,
      },
    });
  }
};

export const DeleteWishListItem = async ({
  productId,
  encodedToken,
  dispatch,
}) => {
  const wishlistData = await axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

  if (wishlistData.status === 200 || wishlistData.status === 201) {
    dispatch({
      type: ActionType.SetWishList,
      payload: {
        wishlist: wishlistData?.data?.wishlist,
      },
    });
  }
};

export const PostCartItem = async ({ product, encodedToken, dispatch }) => {
  const cartData = await axios.post(
    "/api/user/cart",
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

  if (cartData.status === 200 || cartData.status === 201) {
    dispatch({
      type: ActionType.SetCartList,
      payload: {
        cart: cartData?.data?.cart,
      },
    });
  }
};

export const DeleteCartItem = async ({ productId, encodedToken, dispatch }) => {
  const cartData = await axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

  if (cartData.status === 200 || cartData.status === 201) {
    dispatch({
      type: ActionType.SetCartList,
      payload: {
        cart: cartData?.data?.cart,
      },
    });
  }
};

export const IncDecCartItem = async ({ productId, encodedToken, type }) => {
  return axios.post(
    `/api/user/cart/${productId}`,
    {
      action: { type },
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

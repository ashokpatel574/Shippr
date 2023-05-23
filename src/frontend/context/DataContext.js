import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ActionType } from "../constant";
import DataReducer, { initialState } from "../reducer/DataReducer";
import { useAuth } from "./AuthContext";
import {
  GetAllCategories,
  GetAllProducts,
  GetCartList,
  GetWishList,
} from "../utils/apiRequest";
import { useFilterData } from "../utils/utils";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const { token } = useAuth();

  const getServerData = async () => {
    try {
      const productsData = await GetAllProducts();

      if (productsData.status === 200 || productsData.status === 201) {
        dispatch({
          type: ActionType.InitialDataFetch,
          payload: { products: productsData.data.products },
        });

        const categoriesData = await GetAllCategories();

        if (categoriesData.status === 200 || categoriesData.status === 201) {
          dispatch({
            type: ActionType.InitialDataFetch,
            payload: { categories: categoriesData.data.categories },
          });
        }

        const cartData = await GetCartList();

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
              payload: { cart: wishListData.data.wishlist },
            });
          }
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    getServerData();
  }, [token]);

  const { filteredData } = useFilterData(state.products, state.filters);

  return (
    <DataContext.Provider value={{ state, dispatch, filteredData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export const useData = () => useContext(DataContext);

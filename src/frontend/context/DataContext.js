import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import DataReducer, { initialState } from "../reducer/DataReducer";
import { useAuth } from "./AuthContext";
import { getServerData } from "../utils/apiService";
import { useFilterData } from "../utils/filterUtils";
import { ActionType } from "../constant";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [addressDetails, setAddressDetails] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    mobile: "",
  });
  const [filterDrawer, setFilterDrawer] = useState(false);
  const [editAddressTask, setEditAddressTask] = useState(false);
  const { token, currentUser } = useAuth();

  const cartPriceSummary = state.cartlist.reduce(
    (acc, curr) => {
      return {
        ...acc,
        totalprice: Math.ceil(curr.price * curr.qty + acc.totalprice),
        totaldiscount: Math.ceil(
          Number(curr.price * curr.discountpercent * curr.qty) +
            acc.totaldiscount
        ),
        discountprice: curr.discountprice * curr.qty + acc.discountprice,
      };
    },
    {
      totalprice: 0,
      totaldiscount: 0,
      discountprice: 0,
    }
  );

  const { filteredData } = useFilterData(state.products, state.filters);

  useEffect(() => {
    getServerData(token, dispatch, setIsLoading);
  }, [token]);

  useEffect(() => {
    if (currentUser) {
      dispatch({
        type: ActionType.SetWishList,
        payload: { wishlist: currentUser?.wishlist || [] },
      });
      dispatch({
        type: ActionType.SetCartList,
        payload: { cartlist: currentUser?.cart || [] },
      });
      dispatch({
        type: ActionType.SetOrderList,
        payload: { order: currentUser?.orderlist || [] },
      });
    }
  }, [currentUser]);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        isLoading,
        setIsLoading,
        filteredData,
        isAddressModalOpen,
        setIsAddressModalOpen,
        addressDetails,
        setAddressDetails,
        cartPriceSummary,
        editAddressTask,
        setEditAddressTask,
        filterDrawer,
        setFilterDrawer,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export const useData = () => useContext(DataContext);

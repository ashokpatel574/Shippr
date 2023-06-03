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

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [addressDetails, setAddressDetails] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    mobile: "",
  });

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

  const { token } = useAuth();
  const { filteredData } = useFilterData(state.products, state.filters);

  useEffect(() => {
    if (token) {
      getServerData(token, dispatch);
    }
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        filteredData,
        isAddressModalOpen,
        setIsAddressModalOpen,
        addressDetails,
        setAddressDetails,
        cartPriceSummary,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export const useData = () => useContext(DataContext);

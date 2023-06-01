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

  const { token } = useAuth();
  const { filteredData } = useFilterData(state.products, state.filters);

  useEffect(() => {
    getServerData(token, dispatch);
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export const useData = () => useContext(DataContext);

import React, { createContext, useContext, useEffect, useReducer } from "react";
import DataReducer, { initialState } from "../reducer/DataReducer";
import { useAuth } from "./AuthContext";
import { getServerData } from "../utils/apiService";
import { useFilterData } from "../utils/filterUtils";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const { token } = useAuth();

  const { filteredData } = useFilterData(state.products, state.filters);

  useEffect(() => {
    getServerData(token, dispatch);
  }, [token]);

  return (
    <DataContext.Provider value={{ state, dispatch, filteredData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export const useData = () => useContext(DataContext);

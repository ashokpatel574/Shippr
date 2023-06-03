import { ActionType } from "../constant";
import { v4 as uuid } from "uuid";

export const initialState = {
  filters: {
    sortBy: "",
    categories: [],
    rating: "",
    sizes: [],
    searchText: "",
    priceRange: 0,
    stockAvailabilty: [],
  },
  products: [],
  categories: [],
  wishlist: [],
  cartlist: [],
  cartPriceDetails: {},
  showNav: true,
  addressList: [
    {
      id: uuid(),
      name: "Ashok Patel",
      address: "101, 100Ft Road, MG Street ",
      city: "Bangalore",
      mobile: "+91 9876543210",
      pincode: "560043",
      state: "Karnataka",
      country: "India",
    },
  ],
  checkoutAddress: null,
  orderList: [],
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case ActionType.InitialDataFetch: {
      if (action.payload.products) {
        const maxPriceValue = action.payload.products.reduce(
          (acc, { discountprice }) =>
            Number(discountprice) > acc ? Number(discountprice) : Number(acc),
          0
        );

        return {
          ...state,
          products: action.payload.products?.map((productItem) => ({
            ...productItem,
            qty: 0,
          })),
          filters: { ...state.filters, priceRange: maxPriceValue },
        };
      }

      if (action.payload.categories) {
        return {
          ...state,
          categories: action.payload.categories?.map((categoryItem) => ({
            ...categoryItem,
          })),
        };
      }

      return state;
    }

    case ActionType.SetWishList: {
      return {
        ...state,
        wishlist: [...action.payload.wishlist],
      };
    }

    case ActionType.SetCartList: {
      return {
        ...state,
        cartlist: [...action.payload.cart],
      };
    }

    case ActionType.ClearFilter: {
      const maxPriceValue = state.products.reduce(
        (acc, { discountprice }) =>
          Number(discountprice) > acc ? Number(discountprice) : acc,
        0
      );

      return {
        ...state,
        filters: { ...initialState.filters, priceRange: maxPriceValue },
      };
    }

    case ActionType.ChangeFilter: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterType]: action.payload.filterValue,
        },
      };
    }

    case ActionType.AddAddress: {
      return {
        ...state,
        addressList: [
          ...state.addressList,
          { country: "India", id: uuid(), ...action.payload.address },
        ],
      };
    }

    case ActionType.DeleteAddress: {
      return {
        ...state,
        addressList: state.addressList.filter(
          (item) => item.id !== action.payload.address.id
        ),
        checkoutAddress:
          action.payload.address.id === state.checkoutAddress?.id
            ? null
            : state.checkoutAddress,
      };
    }

    case ActionType.Updated_checkoutAddress: {
      return {
        ...state,
        checkoutAddress: action.payload.checkoutAddress,
      };
    }

    default:
      return state;
  }
};

export default DataReducer;

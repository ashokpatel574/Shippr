import { ActionType } from "../constant";

export const initialState = {
  filters: {
    sortBy: "",
    categories: {},
    rating: "",
    sizes: {},
    searchText: "",
    priceRange: 0,
  },
  products: [],
  categories: [],
  wishlist: [],
  cartlist: [],
  cartPriceDetails: {},
  showNav: true,
  addressList: [
    {
      address: "101, ",
      alternatemobile: 1234567891,
      city: "Bangalore",
      id: "2364c34d-7645-49cb-8b74",
      mobile: 1987654321,
      name: "Ashok Patel",
      pincode: "560043",
      state: "Karnataka",
    },
  ],
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
          filters: {
            ...state.filters,
            categories: action.payload.categories.reduce(
              (acc, curr) => ({ ...acc, [curr.categoryName]: false }),
              {}
            ),
          },
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

    default:
      return state;
  }
};

export default DataReducer;

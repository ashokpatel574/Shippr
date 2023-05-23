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
            Number(discountprice) > acc ? Number(discountprice) : acc,
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

    case ActionType.SetWishList: {
      return {
        ...state,
        wishlist: [...action.payload.wishlist],
        products: state.products.map((productItem) => {
          return {
            ...productItem,
            inWishList: action.payload.wishlist?.some(
              (wishlistItem) => wishlistItem._id === productItem._id
            ),
          };
        }),
      };
    }

    case ActionType.SetCartList: {
      return {
        ...state,
        cartlist: [...action.payload.cartlist],
        products: state.products.map((productItem) => {
          const productInCart = action.payload.cartlist?.find(
            (cartItem) => cartItem._id === productItem._id
          );
          return {
            ...productItem,
            inCart: productInCart ? true : false,
            qty: productInCart?.length || 0,
          };
        }),
      };
    }

    default:
      return state;
  }
};

export default DataReducer;

import {
  ADD_PRODUCT_WISHLIST,
  GET_WISHLIST,
  GET_WISHLIST_ID,
  DELETE_WISHLIST
} from "../../Utils/constants";

const initialState = {
  wishlists: [],
  filteredWishlist: [],
};


const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WISHLIST:
      return {
        ...state,
        wishlists: action.payload,
      };
    case GET_WISHLIST_ID:
      return {
        ...state,
        filteredWishlist: state.wishlists.filter((e) =>e.id.includes(action.payload)
        ),
      };
      case ADD_PRODUCT_WISHLIST:
      return {
        ...state,
        wishlists: action.payload
      };
      case DELETE_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlists.filter(e => e.id !== action.payload)
      };
    default:
      return state;
  }
};
export default wishlistReducer;

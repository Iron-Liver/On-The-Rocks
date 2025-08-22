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
        wishlists: state.wishlists
      };
      case DELETE_WISHLIST:
        console.log(state.wishlists,'test')
        console.log(state.wishlists.filter(e => e.id !== action.payload))
        console.log(state.wishlists[0].id)
        console.log(action.payload)
      return {
        ...state,
        wishlist: state.wishlists
      };
    default:
      return state;
  }
};
export default wishlistReducer;

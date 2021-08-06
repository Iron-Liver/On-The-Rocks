import { CREATE_USER, LOGIN, LOGOUT, ADMIN_ALLOWED } from "../../Utils/constants";

const initialState = {
  users: [],
  currentUser: undefined,
  userDetail: undefined,
  adminAllowed: undefined,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        userDetail: action.payload,
      };
    case LOGIN:
      console.log("login action", action.payload);
      return {
        ...state,
        currentUser: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: undefined,
        adminAllowed: undefined,
      };
    case ADMIN_ALLOWED:
      return {
        ...state,
        adminAllowed: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;

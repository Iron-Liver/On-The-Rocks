import { GET_ALL_USERS, CREATE_USER, LOGIN, LOGOUT, ADMIN_ALLOWED, READ_USER, UPDATE_USER, DELETE_USER } from "../../Utils/constants";

const initialState = {
  users: [],
  currentUser: undefined,
  userDetail: undefined,
  adminAllowed: undefined,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
			return {
				...state,
				users: action.payload,
			};
    case CREATE_USER:
      return {
        ...state,
        userDetail: action.payload,
      };
    case READ_USER:
			return {
				...state,
				userDetail: action.payload,
			};
    case UPDATE_USER:
			return {
				...state,
				userDetail: action.payload,
			};
		case DELETE_USER:
			return {
				...state,
				userDetail: action.payload,
			};
    case LOGIN:
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

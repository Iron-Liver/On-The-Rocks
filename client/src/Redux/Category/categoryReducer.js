import { CREATE_CATEGORY, CLEAR_CATEGORY_REPLY, READ_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORIES } from '../../Utils/constants';

const initialState = {
	categories: [],
    categoryDetail: undefined,
	categoryReply: undefined
};

const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_CATEGORIES: {
			return {
				...state,
				categories: action.payload,
			}
		}
		case CREATE_CATEGORY:
			return {
				...state,
				categoryReply: action.payload,
			};
		case READ_CATEGORY:
			return {
				...state,
				categoryDetail: action.payload,
			}
		case UPDATE_CATEGORY:
			return {
				...state,
				categoryReply: action.payload,
			}
		case DELETE_CATEGORY:
			return {
				...state,
				categoryReply: action.payload,
			}
		case CLEAR_CATEGORY_REPLY:
			return {
				...state,
				categoryReply: undefined,
			}
		default:
			return state;
	}
};
export default categoryReducer;

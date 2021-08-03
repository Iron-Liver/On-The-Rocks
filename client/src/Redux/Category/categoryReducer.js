import { CREATE_CATEGORY, CLEAR_CATEGORY_REPLY, READ_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../../Utils/constants';

const initialState = {
	categories: [],
    categoryDetail: undefined,
	categoryReply: undefined
};

const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
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

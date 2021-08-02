import { CREATE_CATEGORY, CLEAR_CATEGORY } from '../../Utils/constants';

const initialState = {
	categories: [],
    categoryDetail: undefined,
};

const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_CATEGORY:
			return {
				...state,
				categoryDetail: action.payload,
			};
		case CLEAR_CATEGORY:
			return {
				...state,
				categoryDetail: undefined,
			}
		default:
			return state;
	}
};
export default categoryReducer;

import {CREATE_USER} from '../../Utils/constants'

const initialState = {
	users: [],
	userDetail: undefined,
};


const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_USER:
			return {
				...state,
				userDetail: action.payload,
			};
		default:
			return state;
	}
};
export default userReducer;

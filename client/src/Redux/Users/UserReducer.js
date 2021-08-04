import {CREATE_USER, LOGIN} from '../../Utils/constants'

const initialState = {
	users: [],
	currentUser: undefined,
	userDetail: undefined,
};


const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_USER:
			return {
				...state,
				userDetail: action.payload,
			};
		case LOGIN:
			console.log("login action",action.payload)
			return {
				...state,
				currentUser: action.payload,
			} 	
		default:
			return state;
	}
};
export default userReducer;

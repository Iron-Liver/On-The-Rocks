import axios from 'axios';
import {CREATE_USER} from '../../Utils/constants'

export function createUser(user) {
    return async function (dispatch) {
      const { data } = await axios.post(`/user/addUser`, user);
      dispatch({ type: CREATE_USER, payload: data });
    };
}
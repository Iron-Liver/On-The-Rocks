import axios from 'axios';
import {CREATE_USER, LOGIN} from '../../Utils/constants'
import swal from 'sweetalert'

export function createUser(user) {
    return async function (dispatch) {
      const { data } = await axios.post(`/user/addUser`, user);
      dispatch({ type: CREATE_USER, payload: data });
    };
}

export function loginUser(login) {
  return async function (dispatch) {
    try {
      await axios.post(
        `/auth/login`,
        { email: login.email.toLowerCase(), password: login.password },
        { withCredentials: true }
      );
      const user = await axios.get(`/auth/user`, { withCredentials: true });
      localStorage.setItem("profile", JSON.stringify(user.data));
      dispatch({ type: LOGIN, payload: user.data });
    } catch (e) {
      swal(e.message, "An error has occurred", "error");
    }
  };
}

export function sendEmail(email, type) {
  return async function (dispatch) {
    try {
      await axios.post(`/auth/email`, { email, type });
    } catch (e) {
      console.log(e.message);
    }
  };
}

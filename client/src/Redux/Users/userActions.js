import dotenv from "dotenv";
import axios from "axios";
import {
    CREATE_USER,
    GET_ALL_USERS,
    LOGIN,
    LOGOUT,
    ADMIN_ALLOWED,
    READ_USER,
    UPDATE_USER,
} from "../../Utils/constants";
import swal from "sweetalert";
import jwt from "jsonwebtoken";
dotenv.config();

export function getAllUsers() {
    return async function (dispatch) {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axios.get(`/user/getAll`, {
                headers: { Authorization: `Bearer ${token}` },
            
            });
            dispatch({ type: GET_ALL_USERS, payload: data });
        } catch (err) {
            console.log(err);
        }
    };
}

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
            const token = await axios.get(`/auth/user`, {
                withCredentials: true,
            });
            const { id, email, isAdmin } = jwt.verify(token.data, process.env.REACT_APP_SECRET_KEY);
            localStorage.setItem("token", JSON.stringify(token.data));
            dispatch({ type: LOGIN, payload: { id, email, isAdmin } });
        } catch (e) {
            swal(e.message, "An error has occurred", "error");
        }
    };
}

export function readUser(id) {
    return async function (dispatch) {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`user/getUser/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        dispatch({ type: READ_USER, payload: data });
    };
}

export function updateUser(user) {
    return async function (dispatch) {
        const token = localStorage.getItem("token");
        const { data } = await axios.put(
            `user/updateUser/${user.id}`,
            user,
            { headers: { Authorization: `Bearer ${token}` } }
        );
        dispatch({ type: UPDATE_USER, payload: data });
    };
}

export function fetchAuthUser() {
    return async (dispatch) => {
        try {
            const token = await axios.get(`auth/user`, {
                withCredentials: true,
            });
            if (token) {
                localStorage.setItem("token", JSON.stringify(token.data));
                dispatch({ type: LOGIN, payload: token.data });
            } else {
                throw new Error("Error fetching user");
            }
        } catch (e) {
            swal(e.message, "ha sucedido un error", "error");
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

export function logOutUser() {
    return async function (dispatch) {
        try {
            await localStorage.removeItem("token");
            await localStorage.removeItem("2FA");
            await localStorage.removeItem("cartItems");
            await localStorage.removeItem("shippingAddress");
            await localStorage.removeItem("wishListItems");
            await axios.get(`/auth/logout`, { withCredentials: true });
            dispatch({ type: LOGOUT });
        } catch (e) {
            console.log(e.message);
        }
    };
}

export function resetPass(token, newPassword) {
    return async function (dispatch) {
        try {
            await axios.post(`/auth/passwordreset`, { token, newPassword });
        } catch (e) {
            console.log(e.message);
        }
    };
}

export function allowAdmin(token) {
    return async function (dispatch) {
        try {
            
            const { data } = await axios.post(`/auth/admin`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            localStorage.setItem("2FA", JSON.stringify(data));
            dispatch({ type: ADMIN_ALLOWED, payload: data });
        } catch (e) {
            console.log(e.message);
        }
    };
}

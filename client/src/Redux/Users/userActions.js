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
    GET_COINS,
} from "../../Utils/constants";
import swal from "sweetalert";
import jwt from "jsonwebtoken";
import decode from "jwt-decode";
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
            const token = await axios.post(
                `/auth/login`,
                { email: login.email.toLowerCase(), password: login.password },
                { withCredentials: true }
            );
            const { id, email, isAdmin, isDeleted} = jwt.verify(
                token.data,
                process.env.REACT_APP_SECRET_KEY
            );
            if (decode(token.data).isDeleted) {
                swal("You are banned.", "Contact us if you have a question about it.", "error")
            }else{
                localStorage.setItem("token", JSON.stringify(token.data));
                dispatch({ type: LOGIN, payload: { id, email, isAdmin, isDeleted } });
            }
        } catch (e) {
            swal(e.message, "An error has occurred", "error");
        }
    };
}

export function readUser(id) {
    return async function (dispatch) {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`/user/getUser/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        dispatch({ type: READ_USER, payload: data });
    };
}

export function updateUser(user) {
    return async function (dispatch) {
        const token = localStorage.getItem("token");
        const { data } = await axios.put(`/user/updateUser/${user.id}`, user, {
            headers: { Authorization: `Bearer ${token}` },
        });
        dispatch({ type: UPDATE_USER, payload: data });
    };
}

export const GLogin = (response) => {
    return async function (dispatch) {
        try {
            const token = await axios.post(
                "/auth/google/login",
                {
                    tokenId: response.tokenId,
                    //
                }
            );
            if (decode(token.data).isDeleted) {
                swal("You are banned.", "Contact us if you have a question about it.", "error")
            } else {
                    localStorage.setItem("token", JSON.stringify(token.data));
                    window.location.reload()
            }
        } catch (e) {
            swal("error", e.message)
        }
    };
};

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
            await localStorage.removeItem("coup")
            await localStorage.removeItem("total")
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
            await axios.post(`/auth/passwordreset`, { token, newPassword }, {
                headers: { Authorization: `Bearer ${token}` },
            });
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
            if(data?.hasOwnProperty('success')){
                localStorage.setItem("2FA", JSON.stringify(data));
                dispatch({ type: ADMIN_ALLOWED, payload: data });
            }
        } catch (e) {
            console.log(e.message);
        }
    };
}

export function addCoin(id, coins) {
    return async function (dispatch) {
        try {
            await axios.post(`/game/coins/${id}`, { coins });
        } catch (e) {
            console.log(e.message);
        }
    };
}

export function removeCoin(id) {
    return async function (dispatch) {
        try {
            await axios.post(`/game/coins/${id}`, { coins: -1 });
        } catch (e) {
            console.log(e.message);
        }
    };
}

export function getCoins(id) {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`/game/getCoins/${id}`);
            dispatch({ type: GET_COINS, payload: data.coins });
        } catch (e) {
            console.log(e.message);
        }
    };
}

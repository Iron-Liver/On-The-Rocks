import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { allowAdmin, logOutUser } from "../../../Redux/Users/userActions";
import verifyUser from "../../../Utils/verifyUser";
import swal from "sweetalert";

export const Admin2FA = () => {
    const token = new URLSearchParams(window.location.search).get("token");
    localStorage.setItem("token", JSON.stringify(token));
    const currentUser = verifyUser();
    const dispatch = useDispatch();
    if (currentUser?.hasOwnProperty("logout")) {
        dispatch(logOutUser());
        window.location.replace(`${window.location.origin}/login`);
        alert("Session expired. Please login");
    }
    const history = useHistory();

    useEffect(() => {
        if (typeof currentUser?.Authenticated !== "undefined") {
            if (currentUser?.Authenticated) {
                history.push("/");
                swal("Successful authentication", "Welcome", "success");
            } else {
                history.push("/");
                swal("Authentication failed", "We are sorry!", "error");
            }
        }
    }, [currentUser?.Authenticated, history]);

    const adminAllowHandler = () => {
        dispatch(allowAdmin(token));
    };

    return (
        <>
            {token ? (
                typeof currentUser?.Authenticated === "undefined" &&
                adminAllowHandler()
            ) : (
                <Redirect to={"/login"} />
            )}
        </>
    );
};

export default Admin2FA;

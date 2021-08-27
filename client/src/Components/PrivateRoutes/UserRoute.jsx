import { Redirect, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../Redux/Users/userActions";
import verifyUser from "../../Utils/verifyUser";

const UserRoute = ({ component: Component, ...props }) => {
    const dispatch = useDispatch();
    const currentUser = verifyUser();
    if (currentUser?.hasOwnProperty("logout")) {
        dispatch(logOutUser());
        window.location.replace(`${window.location.origin}/login`);
        alert("Session expired. Please login");
    }

    return (
        <Route {...props}>
            {currentUser ? (
                currentUser.isAdmin && currentUser?.Authenticated ? (
                    <Redirect to="/" />
                ) : (
                    <Component />
                )
            ) : (
                <Redirect to="/login" />
            )}
        </Route>
    );
};

export default UserRoute;

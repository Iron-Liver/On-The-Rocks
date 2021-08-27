import { Redirect, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import verifyUser from "../../Utils/verifyUser";
import { logOutUser } from "../../Redux/Users/userActions";

const AuthRoute = ({ component: Component, ...props }) => {
    const dispatch = useDispatch();
    const currentUser = verifyUser();
    if (currentUser?.hasOwnProperty("logout")) {
        dispatch(logOutUser());
        window.location.replace(`${window.location.origin}/login`);
        alert("Session expired. Please login");
    }

    return (
        <Route {...props}>
            {currentUser ? <Component /> : <Redirect to="/login" />}
        </Route>
    );
};

export default AuthRoute;

import { Redirect, Route, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../Redux/Users/userActions";
import verifyUser from "../../Utils/verifyUser";
import swal from "sweetalert";

const UserRoute = ({ component: Component, ...props }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = verifyUser();
    if (currentUser?.hasOwnProperty("logout")) {
        dispatch(logOutUser())
        history.push('/')
        swal("Session expired","Please login","warning")
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

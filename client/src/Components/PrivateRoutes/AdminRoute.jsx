import { Redirect, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import verifyUser from "../../Utils/verifyUser";
import swal from "sweetalert";
import { logOutUser } from "../../Redux/Users/userActions";

const AdminRoute = ({ component: Component, ...props }) => {
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
                    <Component />
                ) : (
                    <Redirect to="/" />
                )
            ) : (
                <Redirect to="/login" />
            )}
        </Route>
    );
};

export default AdminRoute;

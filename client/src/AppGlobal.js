import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppPrivate from "./Components/App/appPrivate";
import AppPublic from "./Components/App/appPublic";
import theme from "./Utils/theme";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken'
dotenv.config()

const AppGlobal = () => {
    const currentUser = JSON.parse(localStorage.getItem('token')) ? jwt.verify(JSON.parse(localStorage.getItem('token')), process.env.REACT_APP_SECRET_KEY) : null
    const adminAllowed = JSON.parse(localStorage.getItem("2FA"));
     console.log(currentUser)
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    {currentUser?.isAdmin && adminAllowed ? (
                        <Route path="/" component={AppPrivate} />
                    ) : (
                        <Route path="/" component={AppPublic} />
                    )}
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default AppGlobal;

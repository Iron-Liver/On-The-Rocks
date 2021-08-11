import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppPrivate from "./Components/App/appPrivate";
import AppPublic from "./Components/App/appPublic";
import theme from "./Utils/theme";
import dotenv from "dotenv";
import jwt_decode from "jwt-decode"
dotenv.config()

const AppGlobal = () => {
	
    const currentUser = JSON.parse(localStorage.getItem("token".data)); 
    console.log("current:", currentUser)
    const adminAllowed = JSON.parse(localStorage.getItem("2FA"));
    var decoded;

    if(currentUser!== null){
       decoded = jwt_decode(currentUser, { header: true });
    }
    console.log(decoded)
     
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    {decoded?.isAdmin && adminAllowed ? (
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

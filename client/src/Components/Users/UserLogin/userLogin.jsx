import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Grid, Button, TextField } from "@material-ui/core";
import { Email, VpnKey } from "@material-ui/icons";
import {
    loginUser,
    sendEmail,
    GLogin,
    logOutUser,
} from "../../../Redux/Users/userActions";
import useFormStyles from "../../../Utils/formStyles";
import { GoogleLogin } from "react-google-login";
import verifyUser from "../../../Utils/verifyUser";
import swal from "sweetalert";
import Swal from "sweetalert2";
import dotenv from "dotenv";
dotenv.config();

export default function UserLogin() {
    const classes = useFormStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = verifyUser();
    if (currentUser?.hasOwnProperty("logout")) {
        dispatch(logOutUser());
        window.location.replace(`${window.location.origin}/login`);
        alert("please login");
    }
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    useEffect(
        () => {
            if (currentUser) {
                if (currentUser.isAdmin) {
                    if (typeof currentUser?.Authenticated === "undefined") {
                        dispatch(sendEmail(currentUser.email, "verifyadmin"));
                        history.push(`/`);
                        swal(
                            "Hemos enviado un link a tu correo para que verifiques tu identidad",
                            "Disculpa las molestias",
                            "success"
                        );
                    } else {
                        history.push(`private/profile/${currentUser.id}`);
                    }
                } else {
                    history.push(`/profile/${currentUser.id}`);
                }
            }
        },
        // eslint-disable-next-line
        []
    );

    const responseSuccessGoogle = (response) => {
        console.log("success", response);
        try {
            dispatch(GLogin(response));
        } catch (e) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "algo ha salido mal!",
                confirmButtonColor: "#378a19",
            });
        }
    };

    const responseRejectGoogle = (response) => {
        console.log("error", response);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No pudo hacer login con Google",
            confirmButtonColor: "#378a19",
        });
    };

    const handleInputChange = async (e) => {
        await setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogIn = async (e) => {
        await dispatch(loginUser(input));
        window.location.reload();
    };

    return (
        <div style={{ background: "white" }}>
            {}
            <h1 className={classes.title}>Login</h1>
            <form noValidate autoComplete="off">
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    className={`componentDataBox ${classes.root}`}
                    spacing={1}
                >
                    <Grid>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <Email />
                            </Grid>
                            <Grid item>
                                <TextField
                                    helperText="Insert email"
                                    id="email"
                                    label="Email"
                                    name="email"
                                    value={input.email}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <VpnKey />
                            </Grid>
                            <Grid item>
                                <TextField
                                    helperText="Insert password"
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    value={input.password}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Button
                                style={{ fontWeight: 1000, marginTop: 30 }}
                                color="primary"
                                onClick={handleLogIn}
                                variant="contained"
                            >
                                Login
                            </Button>
                            <Link to="/verify/password">
                                <Button
                                    style={{ fontWeight: 1000, marginTop: 20 }}
                                    color="primary"
                                    variant="contained"
                                >
                                    Recover password
                                </Button>
                            </Link>
                            <br />
                            <GoogleLogin
                                clientId={
                                    process.env.REACT_APP_GOOGLE_CLIENT_ID
                                }
                                buttonText="Google"
                                onSuccess={responseSuccessGoogle}
                                onFailure={responseRejectGoogle}
                                cookiePolicy={"single_host_origin"}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

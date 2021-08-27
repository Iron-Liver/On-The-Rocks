import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, ButtonBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router'
import { logOutUser } from '../../Redux/Users/userActions'
import { VerifiedUser } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import swal from "sweetalert";



export const NavBox = ({ solid }) => {
    
    const history = useHistory();
    const location = useLocation();
    const path = location.pathname === '/' ?  '#fff': '#372c2e';
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            width: "100%",
            justifyContent: "space-around",
            fontFamily: 'Montserrat',
        },
        text: {
            position: "relative",
            "&:hover": {
                zIndex: 1,
                "& $imageMarked": {
                    width: "calc(80%)",
                    left: "calc(10%)",
                    transition: 'all 0.35s ease-out',
                },
            }
        },
        imageTitle: {
            position: "relative",
            width: '70px',
            padding: `${theme.spacing(1)}px ${theme.spacing(0)}px ${
                theme.spacing(1) + 2
            }px`,
            fontFamily: 'Montserrat',
            fontWeight: '500'
        },
        imageMarked: {
            height: 2,
            width: "calc(20%)",
            backgroundColor: theme.palette.common.white,
            position: "absolute",
            bottom: 1,
            left: "calc(40%)",
            transition: 'all 0.35s ease-out',
        },
        blackBack: {
            backgroundColor: path,
        },
        blackColor: {
            color: path,
            fontFamily: 'Montserrat',
            fontWeight: '500'
        }
    }))
    
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentUser = VerifiedUser
    if (currentUser?.hasOwnProperty("logout")) {
        dispatch(logOutUser())
        history.push('/')
        swal("Session expired","Please login","warning")
    }

    return (
        <Container className={classes.root}>
            <Link
                to="/products?onSale=_"
                className="linkNav"
                style={{ textDecoration: "none", color: "white" }}
            >
                <ButtonBase
                    focusRipple
                    key={"On Sale"}
                    className={classes.text}
                >
                    <p
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={`${classes.imageTitle} ${
                            solid ? "" : classes.blackColor
                        }`}
                    >
                        {"ON SALE"}
                        <span
                            className={`${classes.imageMarked} ${
                                solid ? "" : classes.blackBack
                            }`}
                        />
                    </p>
                </ButtonBase>
            </Link>

            {!currentUser && (
                <Link
                    to="/register"
                    className="linkNav"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <ButtonBase
                        focusRipple
                        key={"Categories"}
                        className={classes.text}
                    >
                        <p
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={`${classes.imageTitle}  ${
                                solid ? "" : classes.blackColor
                            }`}
                        >
                            {"REGISTER"}
                            <span
                                className={`${classes.imageMarked} ${
                                    solid ? "" : classes.blackBack
                                }`}
                            />
                        </p>
                    </ButtonBase>
                </Link>
            )}

            <Link
                to="/products"
                className="linkNav"
                style={{ textDecoration: "none", color: "white" }}
            >
                <ButtonBase
                    focusRipple
                    key={"View All"}
                    className={classes.text}
                >
                    <p
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={`${classes.imageTitle}  ${
                            solid ? "" : classes.blackColor
                        }`}
                    >
                        {"VIEW ALL"}
                        <span
                            className={`${classes.imageMarked} ${
                                solid ? "" : classes.blackBack
                            }`}
                        />
                    </p>
                </ButtonBase>
            </Link>
        </Container>
    );
};
export default NavBox;

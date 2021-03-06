import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Drawer,
    Hidden,
    IconButton,
    Container,
} from "@material-ui/core";
import {
    Menu,
    ShoppingCart,
    Search,
    AccountCircle,
    ExitToApp,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { MenuList, SearchList, CartList } from "./drawerLists";
import NavBox from "./navBox";
import { logOutUser } from "../../Redux/Users/userActions";
import logoBrown from "../../assets/on-the-rocks-brown.png";
import logoWhite from "../../assets/on-the-rocks-white.png";
import { useLocation } from "react-router";
import swal from "sweetalert";
import verifyUser from "../../Utils/verifyUser";

function NavBar(props) {
    const dispatch = useDispatch();
    const location = useLocation();
    const path = location.pathname === "/" ? "#fff" : "#372c2eee";
    const path1 = location.pathname === "/" ? "" : "1px solid #d3d3d3";
    const path2 = location.pathname === "/" ? logoWhite : logoBrown;
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            outline: "none",
            backgroundColor: "d3d3d3",
        },
        appBar: {
            width: "100%",
            background: "transparent",
            transition: "all 300ms ease-out",
            borderBottom: path1,
        },
        appBarSolid: {
            width: "100%",
            background: "#372c2eee",
            transition: "background 300ms ease-out",
            borderBottom: "1px solid gray",
        },
        menu: {
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: 0,
        },
        menuButton: {
            marginRight: theme.spacing(0),
            marginLeft: theme.spacing(0),
        },
        wishButton: {
            color: path,
            "&:hover": {
                color: "black",
            },
        },
        icons: {
            color: "#fff",
            "&:hover": {
                color: "#dcd0c0",
            },
        },
        mobile: {
            [theme.breakpoints.up("sm")]: {
                display: "none",
            },
        },
        // necessary for content to be below app bar
        toolbar: {
            display: "flex",
            width: "100%",
            background: "transparent",
        },
        blank: {
            marginTop: "93.85px",
        },
        drawerPaper: {
            width: "40%",
            minWidth: "250px",
            maxWidth: "380px"
            // [theme.breakpoints.up("sm")]: {
            //     width: "30%",
            //     flexShrink: 0,
            // },
        },
        drawerPaperTop: {
            width: "100%",
            height: theme.mixins.toolbar.minHeight,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        navLogo: {
            width: "120px",
            marginTop: "12px",
        },
        blackColor: {
            color: path,
        },
    }));
    // const { window } = props;
    const classes = useStyles();
    const history = useHistory();
    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
    const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [solid, setSolid] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 20) {
            setSolid(true);
        } else {
            setSolid(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    const logOutAlert = () => {
        swal({
            title: "LogOut",
            text: "Want to logout?",
            icon: "warning",
            buttons: ["Cancel", "Yes"],
        }).then((answer) => {
            if (answer) {
                handleLogOut();
            }
        });
    };

    const handleLogOut = () => {
        dispatch(logOutUser())
        history.push("/");
    };

    const handleProfile = () => {
        const currentUser = verifyUser();
        if (currentUser?.hasOwnProperty("logout")) {
            dispatch(logOutUser())
            history.push('/')
            swal("Session expired","Please login","warning")
        }
        if (!currentUser) {
            return history.push("/login");
        } else {
            const { id, isAdmin } = currentUser;

            isAdmin
                ? history.push(`/private/profile/${id}`)
                : history.push(`/profile/${id}`);
        }
    };

    const handleDrawerMenu = () => {
        setMenuDrawerOpen(!menuDrawerOpen);
    };

    const handleDrawerSearch = () => {
        setSearchDrawerOpen(!searchDrawerOpen);
    };

    const handleDrawerCart = () => {
        setCartDrawerOpen(!cartDrawerOpen);
    };

    // const container =
    //   window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    elevation={0}
                    position="fixed"
                    className={solid ? classes.appBarSolid : classes.appBar}
                >
                    <Toolbar className={classes.toolbar}>
                        <div
                            style={{
                                flexGrow: "1",
                                width: "100%",
                                color: "white",
                            }}
                        >
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                            >
                                {solid ? (
                                    <img
                                        src={logoWhite}
                                        alt="on-the-rocks-logo"
                                        className={classes.navLogo}
                                        style={{
                                            imageRendering:
                                                "-webkit-optimize-contrast",
                                        }}
                                    />
                                ) : (
                                    <img
                                        src={path2}
                                        alt="on-the-rocks-logo"
                                        className={classes.navLogo}
                                        style={{
                                            imageRendering:
                                                "-webkit-optimize-contrast",
                                        }}
                                    />
                                )}
                            </Link>
                        </div>

                        <Hidden smDown>
                            <NavBox solid={solid} />
                        </Hidden>

                        <Container className={classes.menu}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerSearch}
                                className={`${classes.menuButton} ${classes.search}`}
                            >
                                <Search
                                    className={`${classes.icons} ${
                                        solid ? "" : classes.blackColor
                                    }`}
                                />
                            </IconButton>

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerCart}
                                className={classes.menuButton}
                            >
                                <ShoppingCart
                                    className={`${classes.icons} ${
                                        solid ? "" : classes.blackColor
                                    }`}
                                />
                            </IconButton>

                            

                            <Hidden xsDown>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    className={classes.menuButton}
                                    onClick={handleProfile}
                                >
                                    <AccountCircle
                                        className={`${classes.icons} ${
                                            solid ? "" : classes.blackColor
                                        }`}
                                    />
                                </IconButton>
                            </Hidden>

                            {JSON.parse(localStorage.getItem("token")) && (
                                <Hidden xsDown>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        className={classes.menuButton}
                                        onClick={logOutAlert}
                                    >
                                        <ExitToApp
                                            className={`${classes.icons} ${
                                                solid ? "" : classes.blackColor
                                            }`}
                                        />
                                    </IconButton>
                                </Hidden>
                            )}

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerMenu}
                                className={classes.menuButton}
                            >
                                <Menu
                                    className={`${classes.icons} ${
                                        solid ? "" : classes.blackColor
                                    }`}
                                />
                            </IconButton>
                        </Container>
                    </Toolbar>
                </AppBar>

                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        // container={container}
                        variant="temporary"
                        anchor="left"
                        open={menuDrawerOpen}
                        onClose={handleDrawerMenu}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <MenuList handleDrawerMenu={handleDrawerMenu} />
                    </Drawer>
                    <Drawer
                        // container={container}
                        variant="temporary"
                        anchor="top"
                        open={searchDrawerOpen}
                        onClose={handleDrawerSearch}
                        classes={{
                            paper: classes.drawerPaperTop,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <SearchList />
                    </Drawer>
                    <Drawer
                        // container={container}
                        variant="temporary"
                        anchor="right"
                        open={cartDrawerOpen}
                        onClose={handleDrawerCart}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <CartList handleDrawerCart={handleDrawerCart} />
                    </Drawer>
                </Hidden>
                <div className={classes.blank} />
            </div>
        </div>
    );
}

export default NavBar;

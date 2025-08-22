import "./wishlist.css";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { getWishlist, deleteWish } from "../../Redux/Wishlist/wishlistActions";
import { getProducts } from "../../Redux/Products/productsActions";
import verifyUser from "../../Utils/verifyUser";
import swal from "sweetalert";
import { IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import makeStyles from '@mui/styles/makeStyles';
import { NewReleases } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { logOutUser } from "../../Redux/Users/userActions";

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        width: "100%",
    },
    paper: {
        padding: theme.spacing(2),
        marginBottom: "10px",
        display: "flex",
    },
    onSalePaper: {
        padding: theme.spacing(2),
        marginBottom: "10px",
        display: "flex",
        background: "rgb(255, 244, 244)",
    },
    image: {
        width: 150,
        height: 150,
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
        marginTop: "5px",
    },
    name: {
        marginLeft: "40px",
    },
    price: {
        // marginLeft: "900px"
    },
}));

const Wishlist = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const { Products } = useSelector((state) => state.productReducer);
    const { wishlists } = useSelector((state) => state.wishlistReducer);
    const [state, setState] = useState(wishlists);
    const [trigger, setTrigger] = useState([])
    var filtUser,
        filtProduct = [];
    const currentUser = verifyUser();
    if (currentUser?.hasOwnProperty("logout")) {
        dispatch(logOutUser())
        history.push('/')
        swal("Session expired","Please login","warning")
    }
    useEffect(() => {
        dispatch(getProducts());
        dispatch(getWishlist());
    }, [dispatch, trigger]);

    useEffect(() => {
        (async function () {
            wishlists.length !== state.length && (await setState(wishlists));
            if (!state || wishlists.length !== state.length)
                await setState(wishlists);
        })();
    }, [state, wishlists, Products]);

    const deleteWishh = (e, userId, productId) => {
        e.preventDefault();        
        setTrigger([
            ...trigger,
            1
          ])          

        for (let i = 0; i < wishlists.length; i++) {
            if (
                wishlists[i].productId === productId &&
                wishlists[i].userId === userId
            ) {
                let res = wishlists[i].id;
                dispatch(deleteWish(res));
                console.log(res, "RESS")

                dispatch(getWishlist());
                setState(wishlists);                
            }
        }
        swal("The product is being deleted");
           
        // setTimeout(() => {
        //     window.location.reload();
        // }, 1000);
    };

    if (Products && state.length > 0) {
        filtUser = state.filter((x) => x.userId === currentUser.id);
        filtProduct = filtUser.map((x) => {
            return Products?.filter((e) => e.id === x.productId);
        });
    }

    return (
        <div className="user-wishlist-tab-container">
            <div className={classes.root}>
                {filtProduct?.length > 0 ? (
                  filtProduct?.map(
                    (w) =>
                    w[0] && (
                      <Paper
                      className={
                        w[0].onSale
                        ? classes.onSalePaper
                        : classes.paper
                      }
                      >
                                    <div className="user-wishlist-imgsale-wrapper">
                                        <div className="user-wishlist-img-container">
                                            <Link to={`/products/${w[0].id}`}>
                                                <img
                                                    width="80px"
                                                    className={classes.img}
                                                    alt="complex"
                                                    src={w[0]?.image}
                                                    />
                                            </Link>
                                            {w[0].onSale && (
                                              <div>
                                                    <div className="user-wishlist-flag-shadow" />
                                                    <div className="user-wishlist-flag">
                                                        <NewReleases id="user-wishlist-flag-icon" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="user-wishlist-description">
                                        <div style={{ flexGrow: 1 }}>
                                            <Link
                                                to={`/products/${w[0].id}`}
                                                style={{
                                                  textDecoration: "none",
                                                  color: "black",
                                                }}
                                                >
                                                <h4 className="user-wishlist-item-title">
                                                    {w[0]?.name}
                                                </h4>
                                            </Link>
                                            {w[0].onSale ? (
                                              <h4 className="user-wishlist-item-price">
                                                    <span
                                                        style={{
                                                          color: "rgb(144, 0, 32)",
                                                        }}
                                                        >
                                                        ${w[0].onSale}{" "}
                                                    </span>
                                                    <del className="user-wishlist-item-regular">
                                                        ${w[0]?.price}
                                                    </del>
                                                </h4>
                                            ) : (
                                              <h4 className="user-wishlist-item-price">
                                                    ${w[0]?.price}
                                                </h4>
                                            )}
                                        </div>
                                        <IconButton
                                            onClick={(e) =>
                                              deleteWishh(
                                                e,
                                                currentUser?.id,
                                                w[0]?.id
                                                )
                                              }
                                            style={{ padding: "1px" }}
                                            size="large">
                                            <DeleteIcon fontSize="medium" />
                                        </IconButton>
                                    </div>
                                </Paper>
                            )
                            )
                            ) : (
                              <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "55vh",
                              }}
                              >
                        <h4 id="user-wishlist-empty-message">Nothing to show...</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;

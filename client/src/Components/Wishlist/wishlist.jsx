import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist, deleteWish } from "../../Redux/Wishlist/wishlistActions";
import { getProducts } from "../../Redux/Products/productsActions";
import jwt from "jsonwebtoken";
import swal from "sweetalert";
import { IconButton, Paper, Grid, ButtonBase, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '40px',
    maxWidth: "auto",
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  name: {
    marginLeft: "40px"
  },
  price: {
    marginLeft: "900px"
  },

}));

const Wishlist = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { Products } = useSelector((state) => state.productReducer);
  const { wishlists } = useSelector((state) => state.wishlistReducer);
  const [state, setState] = useState(wishlists);
  var filtUser,
    filtProduct = [];
  const currentUser = JSON.parse(localStorage.getItem("token"))
    ? jwt.verify(
        JSON.parse(localStorage.getItem("token")),
        process.env.REACT_APP_SECRET_KEY
      )
    : null;

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getWishlist());
  }, []);

  useEffect(() => {
    (async function () {
      wishlists.length !== state.length && (await setState(wishlists));
      if (!state || wishlists.length !== state.length)
        await setState(wishlists);
    })();
  }, [state, wishlists, Products]);

  const deleteWishh = (e, userId, productId) => {
    e.preventDefault();
    var res;
    console.log("entre a la func", userId, productId);

    for (let i = 0; i < wishlists.length; i++) {
      console.log("WP", wishlists[i].productId, wishlists[i].userId);
      if (
        wishlists[i].productId === productId &&
        wishlists[i].userId === userId
      ) {
        res = wishlists[i].id;
        console.log("entre a la if");

        dispatch(deleteWish(res));

        dispatch(getWishlist());
        setState(wishlists);
      }
    }
    swal("The product is being deleted");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  if (Products && state.length > 0) {
    console.log(state, "statestatus");
    filtUser = state.filter((x) => x.userId === currentUser.id);
    filtProduct = filtUser.map((x) => {
      return Products?.filter((e) => e.id === x.productId);
    });
  }

return (
  <div className={classes.root}>
  {filtProduct?.length > 0 ? (
        filtProduct?.map((w) => (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={w[0]?.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography  className={classes.name} gutterBottom variant="subtitle1">
              {w[0]?.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" style={{ cursor: 'pointer' }}>
              <Typography variant="subtitle1" className={classes.price}>Price: ${w[0]?.price}</Typography>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            
            <IconButton
              onClick={(e) => deleteWishh(e, currentUser?.id, w[0]?.id)}>
              <DeleteIcon fontSize="medium" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    ))
      ) : (
        <h1>Nothing to show...</h1>
      )}
  </div>
);
}

export default Wishlist;

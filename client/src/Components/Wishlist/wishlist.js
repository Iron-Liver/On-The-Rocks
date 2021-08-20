import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist, deleteWish } from "../../Redux/Wishlist/wishlistActions";
import { getProducts } from "../../Redux/Products/productsActions";
import jwt from "jsonwebtoken";
import swal from "sweetalert";

const Wishlist = () => {
  
  const { Products } = useSelector((state) => state.productReducer);
  const { wishlists } = useSelector((state) => state.wishlistReducer);
  const [state, setState] = useState(wishlists);
  
  const dispatch = useDispatch();
  if (wishlists.length === 0  && Products.length === 0 ) {
    dispatch(getProducts());
    dispatch(getWishlist());
  }
  useEffect(() => {
    /* dispatch(getProducts());
    dispatch(getWishlist()); */
    (async function(){
      wishlists.length !== state.length
      ? await setState(wishlists)
      : console.log("No changes"); 
    })()
    
    
  }, [state, wishlists, Products]);
  

  if (!state || wishlists.length !== state.length) {
    (async function(){
      setState(wishlists);
    })()
  }

  const currentUser = JSON.parse(localStorage.getItem("token"))
    ? jwt.verify(
        JSON.parse(localStorage.getItem("token")),
        process.env.REACT_APP_SECRET_KEY
      )
    : null;

  if (Products && state) {
    
    async function deleteWishh(e, userId, productId) {
      var res;
      console.log("entre a la func", userId, productId);
      
      for (let i = 0; i < wishlists.length; i++) {
        console.log("WP", wishlists[i].productId, wishlists[i].userId);
        if (wishlists[i].productId === productId && wishlists[i].userId === userId) {
          res = wishlists[i].id;
          console.log("entre a la if");
          
          dispatch(deleteWish(res));
          dispatch(getWishlist());
          await setState(wishlists);
        }
        
      };
      swal("The product is being deleted");
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    };
    
    if (!state || wishlists.length !== state.length) {
      console.log("HOLAAA", wishlists.length, state.length)
      setState(wishlists);
    }

    const filtUser = Array.isArray(state) ? state.filter((x) => x.userId === currentUser.id  ) : [];

    const filtProduct = filtUser.map((x) => {
      return Products?.filter((e) => e.id === x.productId);
    });
    console.log("FP", filtProduct);
    
    return (
      <div>
        {filtProduct?.length > 0 && filtProduct?.map((w) => (
          <div key={w?.id}>
            <span>{w[0]?.name}</span>
            <img src={w[0]?.image} alt="Licorimage" />
            <span>{w[0]?.price}</span>
            <button onClick={(e) => deleteWishh(e, currentUser?.id, w[0]?.id)}>
              X
            </button>
          </div>
        ))}
      </div>
    );
  } else {
    console.log("Error");
  }
};

export default Wishlist;

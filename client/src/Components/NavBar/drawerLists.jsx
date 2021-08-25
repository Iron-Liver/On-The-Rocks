import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {Cart} from "../Cart/cart"
import {
  Typography, 
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button
} from "@material-ui/core";
import {
  LocalBar,
  Receipt,
  Star,
  PersonAdd,
  Casino,
  Business,
  Search,
  AccountCircle,
  Loyalty,
  ExitToApp,
  ArrowForwardIos,
  ArrowBackIos
} from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { getProducts } from "../../Redux/Products/productsActions";
import { makeStyles } from "@material-ui/core/styles";
import { logOutUser } from '../../Redux/Users/userActions';
import jwt from 'jsonwebtoken';
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  autocomplete: {
    "& .MuiAutocomplete-root": {
      width: "100%",
      height: "100%",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      height: "90%",
      margin: "auto",
    },
    "& .MuiListItem-root": {
      paddingTop: "0",
      paddingBottom: "0",
    },
  },
  root: {
    display: 'inline-flex',
    height: '75vh',
    width:'100%',
    justifyContent: "space-evenly"

},
details: {
    textAlign:'start',
    width:'60%',
    variant: "outlined",
},
content: {
    width: '100%',
    marginTop:'5%',
    
},

cont1: {
    marginBottom: 15,
},

cover: {
    width: '100px',
    height: '100px',
      
},
divimage: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'25%',
},

button: {
    margin: theme.spacing(1),
    width: 200,
    height:55,
},

margin:{
  position: "absolute", 
  marginLeft: "70%"
},
review: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
},
formControl: {
    margin: theme.spacing(1),
    width: 110,
},
title:{
  display: "flex",
  marginLeft: '15px',
  justifyContent: 'center',
},
selectEmpty: {
    marginTop: theme.spacing(2),
},
toolbar: {
  height: "max-content"
},
icon:{
  marginTop: "2%"
}  
}));



export const MenuList = ({ handleDrawerMenu }) => {
  const dispatch = useDispatch();

  const localProfile = JSON.parse(localStorage.getItem('token')) ? 
  jwt.verify(JSON.parse(localStorage.getItem('token')), 
  process.env.REACT_APP_SECRET_KEY) : null

  const userId = localProfile?.id 

  const logOut = () => {
    dispatch(logOutUser());
  };

  const logOutAlert = () => {
    swal({
      title: 'LogOut',
      text: 'Want to logout?',
      icon: 'warning',
      buttons: ['Cancel', 'Yes']
    }).then(answer => {
      if(answer){
        logOut();
      }
    })
  }

  
  return (
    <div>
      <div style={{
        display: "flex", 
        width: "100%", 
        justifyContent: "flex-end",
        height: "41px"
      }}>
        <Button 
          onClick={handleDrawerMenu}
        >
          <ArrowBackIos/>
        </Button>
      </div>
      <Divider />
      <List component="nav">
        <Link to="/products" style={{ textDecoration: "none", color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <LocalBar />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </Link>

        <Link to="/products?onSale=_" style={{ textDecoration: "none", color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <Loyalty />
            </ListItemIcon>
            <ListItemText primary="On Sale" />
          </ListItem>
        </Link>

        <Divider />

        {localStorage.getItem("token") ? (
          <>
            <Link
              to={localProfile.isAdmin
                ? `/private/profile/${userId}/orders`
                : `/profile/${userId}/orders`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem button>
                <ListItemIcon>
                  <Receipt />
                </ListItemIcon>
                <ListItemText primary={localProfile.isAdmin 
                  ? "Orders"
                  : "My Orders"
                }/>
              </ListItem>
            </Link>

            <Link
              to={
                localProfile.isAdmin 
                ? `/wishlist`
                : `/profile/${userId}/wishlist` 
              }
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem button>
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
                <ListItemText primary="My Wishlist" />
              </ListItem>
            </Link>

            <Link
              to="/roulette"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem button>
                <ListItemIcon>
                  <Casino />
                </ListItemIcon>
                <ListItemText primary="Gamble" />
              </ListItem>
            </Link>

            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <ListItem button onClick={logOutAlert}>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </Link>
          </>
        ) : (
          <>
          <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem button>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText
                  primary={`${
                    localStorage.getItem("token") ? "My Profile" : "Login"
                  }`}
                />
              </ListItem>
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem button>
                <ListItemIcon>
                  <PersonAdd />
                </ListItemIcon>
                <ListItemText
                  primary='Register'
                />
              </ListItem>
            </Link>
          </>
        )}

        <Divider />

        <Link
          to="/OnTheRocks"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export const SearchList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { Products } = useSelector((state) => state.productReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if(e.target.value !== "") {
        history.push(`/products?name=${e.target.value
          .split(" ")
          .join("-")
          .toLowerCase()}`);
      }
    }
  };

  const handleClick = () => {
    var link = document.getElementById('Search');
      if(link.value !== "") {
        history.push(`/products?name=${link.value
          .split(" ")
          .join("-")
          .toLowerCase()}`);
      }
  }

  return (
    <div className={classes.autocomplete}>
      <ListItem>
        <ListItemIcon>
          <Search onClick={handleClick}/>
        </ListItemIcon>
        <Autocomplete
          id="Search"
          freeSolo
          options={
            typeof Products !== "undefined"
              ? Products.map((option) => option?.name)
              : []
          }
          renderInput={(params) => (
            <TextField
              {...params}
              onKeyUp={handleKeyPress.bind(this)}
              label="Search"
              variant="standard"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
      </ListItem>
    </div>
  );
};


export const CartList = ({ handleDrawerCart }) => {
  const classes = useStyles();
  return (
    <div style={{ zIndex: "9999"}}>
      <div style={{display: "flex", width: "58%", justifyContent: "space-between",  zIndex: "9999"}}>
        <Button onClick={handleDrawerCart}><ArrowForwardIos/></Button>
        <Typography className={classes.title} variant="h4">
          Cart
        </Typography>
      </div>
      <Divider />
      <List component="nav">
        <Cart/>   
      </List>
    </div>
  );
};
// eslint-disable-next-line
export default {
  MenuList,
  SearchList,
  CartList,
};

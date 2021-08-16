import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {Divider,List, ListItem, ListItemText, TextField} from '@material-ui/core'
import InboxIcon from "@material-ui/icons/MoveToInbox";
import {LocalBar, Receipt, Star, ListAlt, Business, Search, AccountCircle, Loyalty, ExitToApp} from '@material-ui/icons'
import Autocomplete from '@material-ui/lab/Autocomplete';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {getProducts} from '../../Redux/Products/productsActions'
import {FRONTEND} from '../../Utils/constants'

import { makeStyles } from "@material-ui/core/styles";
import { logOutUser } from '../../Redux/Users/UserActions';
const useStyles = makeStyles((theme) => ({
    autocomplete:{
      '& .MuiAutocomplete-root':{
        width: '100%',
        height: '100%',
      },
      '& .MuiOutlinedInput-notchedOutline':{
        height: '90%',
        margin: 'auto'
      },
      '& .MuiListItem-root':{
        paddingTop:'0',
        paddingBottom:'0',
      },
    },
    toolbar: theme.mixins.toolbar,
}));

export const MenuList = () => {   
    const dispatch = useDispatch()

    const logOut = () => {
      dispatch(logOutUser())
    }

    const classes = useStyles();
    return (
        <div>
          <div className={classes.toolbar}>OnTheRocks</div>
          <Divider />
          <List component="nav">
            <Link to="/products" style={{textDecoration: 'none', color: 'black'}}>
              <ListItem button>
                <ListItemIcon>
                  <LocalBar />
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItem>
            </Link>

            <Link to="/sale" style={{textDecoration: 'none', color: 'black'}}>
              <ListItem button>
                <ListItemIcon>
                  <Loyalty />
                </ListItemIcon>
                <ListItemText primary="On Sale" />
              </ListItem>
            </Link>

            <Link to="/categories" style={{textDecoration: 'none', color: 'black'}}>
              <ListItem button>
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Categories" />
              </ListItem>
            </Link>

            <Divider />

            <Link to="/orders" style={{textDecoration: 'none', color: 'black'}}>
              <ListItem button>
                <ListItemIcon>
                  <Receipt />
                </ListItemIcon>
                <ListItemText primary="My Orders" />
              </ListItem>
            </Link>

            <Link to="/wishlist" style={{textDecoration: 'none', color: 'black'}}>
              <ListItem button>
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
                <ListItemText primary="My Wishlist" />
              </ListItem>
            </Link>

            <Link to="/profile" style={{textDecoration: 'none', color: 'black'}}>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="My Profile" />
              </ListItem>
            </Link>

            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
              <ListItem button onClick={logOut}>
                <ListItemIcon>
                  <ExitToApp/>
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </Link>

            <Divider />

            <Link to="/OnTheRocks" style={{textDecoration: 'none', color: 'black'}}>
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
}

export const SearchList = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const {Products} = useSelector(state => state.productReducer)

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      window.location.replace(`${FRONTEND}products?search=${e.target.value.split(' ').join('-').toLowerCase()}`)
    }
  }

return (
    <div className={classes.autocomplete}>
      <ListItem >
        <ListItemIcon>
          <Search />
        </ListItemIcon>
        <Autocomplete   
          id="Search"
          freeSolo
          options={typeof(Products) !== 'undefined' ? Products.map((option) => option?.name) : []}
          renderInput={(params) => (
            <TextField {...params} onKeyUp={handleKeyPress.bind(this)} label="Search" variant="standard" InputProps={{ ...params.InputProps, type: "search" }} />
          )}
        />
      </ListItem>
    </div>
  );
}

export  const CartList = () => { 
    const classes = useStyles();
      return (
    <div>
      <div className={classes.toolbar}>OnTheRocks</div>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Should map cart" />
        </ListItem>
      </List>
    </div>
  )
      }
// eslint-disable-next-line
      export default  {
        MenuList,
        SearchList,
        CartList
      }
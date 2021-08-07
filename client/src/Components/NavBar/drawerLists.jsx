import { useSelector } from 'react-redux'
import {Divider,List, ListItem, ListItemText, TextField} from '@material-ui/core'
import InboxIcon from "@material-ui/icons/MoveToInbox";
import {LocalBar, Receipt, Star, ListAlt, Business, Search, AccountCircle, Loyalty} from '@material-ui/icons'
import Autocomplete from '@material-ui/lab/Autocomplete';
import ListItemIcon from "@material-ui/core/ListItemIcon";

import { makeStyles } from "@material-ui/core/styles";
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
    const classes = useStyles();
    return (
        <div>
          <div className={classes.toolbar}>OnTheRocks</div>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <LocalBar />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Loyalty />
              </ListItemIcon>
              <ListItemText primary="On Sale" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>

            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Receipt />
              </ListItemIcon>
              <ListItemText primary="My Orders" />
            </ListItem>
    
            <ListItem button>
              <ListItemIcon>
                <Star />
              </ListItemIcon>
              <ListItemText primary="My Wishlist" />
            </ListItem>
    
            <ListItem button>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="My Account" />
            </ListItem>

            <Divider />
    
            <ListItem button>
              <ListItemIcon>
                <Business />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
          </List>
        </div>
      );
}

export const SearchList = () => {
  const classes = useStyles();
  const {Products} = useSelector(state => state.productReducer)
return (
    <div className={classes.autocomplete}>
      <ListItem >
        <ListItemIcon>
          <Search />
        </ListItemIcon>
        <Autocomplete       
        id="Search"
        freeSolo
        options={Products?.map((option) => option.name)}
        renderInput={(params) => (
          <TextField {...params} label="Search" variant="outlined" />
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
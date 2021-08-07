import {Divider,List, ListItem, ListItemText, InputBase} from '@material-ui/core'
import InboxIcon from "@material-ui/icons/MoveToInbox";
import {LocalBar, Receipt, Star, ListAlt, Business, Search} from '@material-ui/icons'
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
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
              <ListItemText primary="Productos" />
            </ListItem>
    
            <ListItem button>
              <ListItemIcon>
                <Receipt />
              </ListItemIcon>
              <ListItemText primary="Mis Compras" />
            </ListItem>
    
            <ListItem button>
              <ListItemIcon>
                <Star />
              </ListItemIcon>
              <ListItemText primary="Mis Favoritos" />
            </ListItem>
    
            <ListItem button>
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
              <ListItemText primary="Recetas" />
            </ListItem>
    
            <ListItem button>
              <ListItemIcon>
                <Business />
              </ListItemIcon>
              <ListItemText primary="Nosotros" />
            </ListItem>
          </List>
        </div>
      );
}

export const SearchList = () => {
return (
    <div>
      <ListItem>
        <ListItemIcon>
          <Search />
        </ListItemIcon>
        <InputBase placeholder="Búsqueda" />
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
          <ListItemText primary="ProductoRandom" />
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
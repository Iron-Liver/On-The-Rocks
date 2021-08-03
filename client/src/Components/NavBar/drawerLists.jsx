import {Divider,List, ListItem, ListItemText, InputBase} from '@material-ui/core'
import InboxIcon from "@material-ui/icons/MoveToInbox";
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
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Productos" />
            </ListItem>
    
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Mi Carrito" />
            </ListItem>
    
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Mis Compras" />
            </ListItem>
    
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Mis Favoritos" />
            </ListItem>
    
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Recetas" />
            </ListItem>
    
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
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
          <InboxIcon />
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
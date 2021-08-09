import { React } from 'react';
import { useDispatch } from 'react-redux';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Grid, makeStyles, ButtonBase, } from '@material-ui/core'
import { NoteAdd, AddShoppingCart, AssignmentInd, ShoppingCart, AlternateEmailOutlined, DnsOutlined, ExitToApp  } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { logOutUser } from '../../../Redux/Users/UserActions';

const useStyles= makeStyles(theme => ({
  list: {
 backgroundColor: ' #E9ECEF '
  },
  Container: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%'  
  },
  imageContainer: {
    textAlign: 'center', 
    marginLeft: '10px'
  },
  belowImage: {
    display: 'flex',
    marginLeft: 10, 
    width: '100%',
    marginBottom: 7,
  },
  image: {
    border: '2px solid  #fcf3cf   ',
    borderRadius: '100px',
    backgroundColor: '#a7aaad',
    width: 135,
    height: 135,
    textAlign: 'center'
  },
  link: {
    textDecoration:'none',
     color:'#1c2624'
  }
}))

export default function DrawerList() {
  const dispatch = useDispatch()

  const classes = useStyles();

  const userId = JSON.parse(localStorage.getItem('profile')).id

  const logOut = () => {
    dispatch(logOutUser())
  }

  return (
    <div>
      <List component="nav" className={classes.list}> 

      <Grid container className={classes.Container}>
        <Grid item className={classes.imageContainer}> 
          <img className={classes.image} src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-users-icon-design-png-image_1014936.jpg" alt="user" />
        </Grid>

      

        <Grid container className={classes.belowImage}>
          <Grid item xs={11} style={{ display: "flex", alignItems:'center'}}>
          <DnsOutlined style={{ fontSize: 15, marginRight:'10px'}}/>
        <ListItemText secondary="Agustin Moroni" style={{width: '75%', display: "inline-block"}}/>
          </Grid>
        
           <Grid item xs={11} style={{ display: "flex", alignItems:'center'}}>
        <AlternateEmailOutlined style={{ fontSize: 15, marginRight:'10px'}}/>
        <ListItemText secondary="agusmoroni@hotmail.com" style={{width: '75%', display: "inline-block"}}/>
          </Grid>
        </Grid>
      </Grid>

      <Divider/>
      <Link to={`/private/profile/${userId}/users`}  className={classes.link}>
        <ListItem  button> 
        <ButtonBase>
          <ListItemIcon>
            <AssignmentInd />
          </ListItemIcon>
          <ListItemText  primary="All users" />
        </ButtonBase>
        </ListItem>
      </Link>
      <Link to={`/private/profile/${userId}/orders`} className={classes.link}>
        <ListItem divider button> 
          <ButtonBase>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="All orders"/>
          </ButtonBase>
        </ListItem>
      </Link> 
      <Link to={`/private/profile/${userId}/create_category`}  className={classes.link}>
        <ListItem  button> 
        <ButtonBase>
          <ListItemIcon>
            <NoteAdd />
          </ListItemIcon>
          <ListItemText primary="Categories"/>
        </ButtonBase>
        </ListItem>
      </Link>
      <Link to={`/private/profile/${userId}/create_product`}  className={classes.link}>
        <ListItem  button> 
        <ButtonBase>
          <ListItemIcon>
            <AddShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Products"/>
          </ButtonBase>
        </ListItem>
      </Link>
      <Link to={`/`}  className={classes.link}>
        <ListItem  button> 
        <ButtonBase onClick={logOut}>
          <ListItemIcon>
           <ExitToApp/>
          </ListItemIcon>
          <ListItemText primary="Logout"/>
          </ButtonBase>
        </ListItem>
      </Link>
      
      </List>
    </div>
  )
}

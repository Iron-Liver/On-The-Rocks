import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Grid, makeStyles, ButtonBase } from '@material-ui/core'
import { NoteAdd, AddShoppingCart, AssignmentInd, ShoppingCart, AlternateEmailOutlined, DnsOutlined, ExitToApp, Dashboard  } from '@material-ui/icons'
import { Link, useHistory } from 'react-router-dom'
import { logOutUser, readUser } from '../../../Redux/Users/UserActions';
import jwt from "jsonwebtoken"

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
    border: '2px solid  #b7950b',
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
  const history = useHistory();
  const userDetail = useSelector(state => state.userReducer.userDetail);

  const localProfile = JSON.parse(localStorage.getItem('token')) ? 
  jwt.verify(JSON.parse(localStorage.getItem('token')), 
  process.env.REACT_APP_SECRET_KEY) : null

  const userId = localProfile?.id

  useEffect(() => {
    dispatch(readUser(userId));
  }, [dispatch, userId]);

  const logOut = () => {
    dispatch(logOutUser());
    history.push("/")
  };

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
        <ListItemText secondary={userDetail ? userDetail.name : ""} style={{width: '75%', display: "inline-block"}}/>
          </Grid>
        
           <Grid item xs={11} style={{ display: "flex", alignItems:'center'}}>
        <AlternateEmailOutlined style={{ fontSize: 15, marginRight:'10px'}}/>
        <ListItemText secondary={userDetail ? userDetail.email : ""} style={{width: '75%', display: "inline-block"}}/>
          </Grid>
        </Grid>
      </Grid>

      <Divider/>
      <Link to={`/private/profile/${userId}/dashboard`}  className={classes.link}>
        <ListItem  button> 
        <ButtonBase>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText  primary="Dashboard" />
        </ButtonBase>
        </ListItem>
      </Link>
      <Link to={`/private/profile/${userId}/users`}  className={classes.link}>
        <ListItem  button> 
        <ButtonBase>
          <ListItemIcon>
            <AssignmentInd />
          </ListItemIcon>
          <ListItemText  primary="Users" />
        </ButtonBase>
        </ListItem>
      </Link>
      <Link to={`/private/profile/${userId}/orders`} className={classes.link}>
        <ListItem divider button> 
          <ButtonBase>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Orders"/>
          </ButtonBase>
        </ListItem>
      </Link> 
      <Link to={`/private/profile/${userId}/categories`}  className={classes.link}>
        <ListItem  button> 
        <ButtonBase>
          <ListItemIcon>
            <NoteAdd />
          </ListItemIcon>
          <ListItemText primary="Categories"/>
        </ButtonBase>
        </ListItem>
      </Link>
      <Link to={`/private/profile/${userId}/products`}  className={classes.link}>
        <ListItem  button> 
        <ButtonBase>
          <ListItemIcon>
            <AddShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Products"/>
          </ButtonBase>
        </ListItem>
      </Link>
      <ListItem onClick={logOut} button> 
        <ButtonBase> 
          <ListItemIcon>
            <ExitToApp/>
          </ListItemIcon>
          <ListItemText primary="Logout"/>
        </ButtonBase>
      </ListItem>
      
      </List>
    </div>
  )
}

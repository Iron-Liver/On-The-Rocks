import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Grid, 
  makeStyles, 
  ButtonBase 
} from '@material-ui/core';
import { 
  NoteAdd, 
  AddShoppingCart, 
  AssignmentInd, 
  ShoppingCart, 
  AlternateEmailOutlined, 
  DnsOutlined, 
  ExitToApp, 
  Dashboard  
} from '@material-ui/icons';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { logOutUser, readUser } from '../../../Redux/Users/userActions';
import jwt from "jsonwebtoken";

const useStyles= makeStyles(theme => ({
  list: {
 backgroundColor: ' #333333 '
  },
  Container: {
    display: 'flex',
    flexDirection: 'column',
    width: '97%'  
  },
  imageContainer: {
    margin: "10px 0",
    display: "flex",
    justifyContent: "center"
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
    width: 165,
    height: 165,
    textAlign: 'center'
  },
  link: {
    textDecoration:'none',
    color:'white'
  }
}))

export default function DrawerList() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const history = useHistory();
  const { url } = useRouteMatch();
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
          <ListItemText primary={userDetail ? userDetail.name : ""} style={{width: '75%', display: "inline-block", color: "white"}}/>
            </Grid>
          
            <Grid item xs={11} style={{ display: "flex", alignItems:'center'}}>
          <ListItemText primary={userDetail ? userDetail.email : ""} style={{width: '75%', display: "inline-block", color: "white"}}/>
            </Grid>
          </Grid>
        </Grid>

        <Divider/>
        <Link to={`${url}/dashboard`}  className={classes.link}>
          <ListItem  button> 
          <ButtonBase>
            <ListItemIcon>
              <Dashboard style={{color: "white"}}/>
            </ListItemIcon>
            <ListItemText  primary="Dashboard" />
          </ButtonBase>
          </ListItem>
        </Link>
        <Link to={`${url}/users`}  className={classes.link}>
          <ListItem  button> 
          <ButtonBase>
            <ListItemIcon>
              <AssignmentInd style={{color: "white"}} />
            </ListItemIcon>
            <ListItemText  primary="Users" />
          </ButtonBase>
          </ListItem>
        </Link>
        <Link to={`${url}/orders`} className={classes.link}>
          <ListItem divider button> 
            <ButtonBase>
              <ListItemIcon>
                <ShoppingCart style={{color: "white"}} />
              </ListItemIcon>
              <ListItemText primary="Orders"/>
            </ButtonBase>
          </ListItem>
        </Link> 
        <Link to={`${url}/categories`}  className={classes.link}>
          <ListItem  button> 
          <ButtonBase>
            <ListItemIcon>
              <NoteAdd style={{color: "white"}} />
            </ListItemIcon>
            <ListItemText primary="Categories"/>
          </ButtonBase>
          </ListItem>
        </Link>
        <Link to={`${url}/products`}  className={classes.link}>
          <ListItem  button> 
          <ButtonBase>
            <ListItemIcon>
              <AddShoppingCart style={{color: "white"}} />
            </ListItemIcon>
            <ListItemText primary="Products"/>
            </ButtonBase>
          </ListItem>
        </Link>
        <ListItem onClick={logOut} button> 
          <ButtonBase> 
            <ListItemIcon>
              <ExitToApp style={{color: "white"}}/>
            </ListItemIcon>
            <ListItemText primary="Logout"/>
          </ButtonBase>
        </ListItem>
      </List>
    </div>
  )
}

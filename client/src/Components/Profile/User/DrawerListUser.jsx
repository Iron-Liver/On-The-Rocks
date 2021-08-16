import { React, useEffect } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Grid, makeStyles, ButtonBase } from '@material-ui/core'
import { NoteAdd, AddShoppingCart, Settings, ShoppingCart, AlternateEmailOutlined, DnsOutlined, ExitToApp  } from '@material-ui/icons'
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser, readUser } from '../../../Redux/Users/userActions';
import theme from '../../../Utils/theme';
import jwt from 'jsonwebtoken'

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
    border: '1px solid  #212f3c ',
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

export default function DrawerListUser() {
  const classes = useStyles(theme);
  const history = useHistory();
  const dispatch = useDispatch();
  const userDetail = useSelector(state => state.userReducer.userDetail);
  const { url } = useRouteMatch();

  const localProfile = JSON.parse(localStorage.getItem('token')) ? 
  jwt.verify(JSON.parse(localStorage.getItem('token')), 
  process.env.REACT_APP_SECRET_KEY) : null

  const userId = localProfile?.id 

  useEffect(() => {
    dispatch(readUser(userId));
  }, [dispatch, userId]);

  const logOut = () => {
    dispatch(logOutUser());
    history.push("/");
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
          <ListItemText secondary={userDetail ? userDetail.name : ""} style={{width: '75%', display: "inline-block"}}/>
            </Grid>
          
            <Grid item xs={11} style={{ display: "flex", alignItems:'center'}}>
          <AlternateEmailOutlined style={{ fontSize: 15, marginRight:'10px'}}/>
          <ListItemText secondary={userDetail ? userDetail.email : ""} style={{width: '75%', display: "inline-block"}}/>
            </Grid>
          </Grid>
        </Grid>

        <Divider/>

        <Link to={`${url}/orders`} className={classes.link}>
          <ListItem  button> 
            <ButtonBase>
              <ListItemIcon>
              <ShoppingCart />
              </ListItemIcon>
              <ListItemText  primary="My Orders" />
            </ButtonBase>
          </ListItem>
        </Link>

        <Link to={`${url}/settings`} className={classes.link}>
          <ListItem divider button>
            <ButtonBase>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings"/>
            </ButtonBase>
          </ListItem>
        </Link>

        {/* <Link className={classes.link}> */}
          <ListItem  button> 
            <ButtonBase>
              <ListItemIcon>
                <NoteAdd />
              </ListItemIcon>
              <ListItemText primary="***"/>
            </ButtonBase>
          </ListItem>
        {/* </Link> */}

        {/* <Link className={classes.link}> */}
          <ListItem  button> 
          <ButtonBase>
            <ListItemIcon>
              <AddShoppingCart />
            </ListItemIcon>
            <ListItemText primary="***"/>
            </ButtonBase>
          </ListItem>
        {/* </Link> */}

        <ListItem  button> 
        <ButtonBase onClick={logOut}>
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

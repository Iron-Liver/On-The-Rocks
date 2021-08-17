import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import { AppBar, Toolbar, Typography, CssBaseline, Drawer, Hidden, IconButton, Container } from '@material-ui/core'
import { Menu, ShoppingCart, Search, AccountCircle, ExitToApp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { MenuList, SearchList,CartList } from "./drawerLists"
import { 
  // eslint-disable-next-line
  useSelector } from "react-redux";
import NavBox from './navBox'
import { logOutUser } from "../../Redux/Users/UserActions";
import jwt from 'jsonwebtoken'


// import { logOutUser } from "../../Redux/Users/UserActions";

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    outline: 'none',
    backgroundColor: "red"
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: '100%',
      backgroundColor: 'transparent',
    }
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-end',
},
  menuButton: {
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(0),
  },
  icons: {
    '&:hover':{
      color:'#99af9d',
    }
  },
  mobile: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: {
    width: '100%',
    background: "#131313"
  },
  blank: theme.mixins.toolbar,
  drawerPaper: {
    width: '70%',
    [theme.breakpoints.up("sm")]: {
      width: '30%',
      flexShrink: 0
    }
  },
  drawerPaperTop: {
    width: "100%",
    height: theme.mixins.toolbar.minHeight
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },

}));

function NavBar(props) {
  const dispatch = useDispatch()
  const { window } = props;
  const classes = useStyles();
  const history = useHistory();
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const handleLogOut = () => {
    dispatch(logOutUser());
    history.push("/")
  };

  const handleProfile = () => {
    const currentUser = JSON.parse(localStorage.getItem('token')) ? 
    jwt.verify(JSON.parse(localStorage.getItem('token')), 
    process.env.REACT_APP_SECRET_KEY) : null;
    if(!currentUser) {
      return history.push("/login")
    } else {
      const { id, isAdmin } = currentUser;
  
      isAdmin 
        ? history.push(`/private/profile/${id}`)
        : history.push(`/profile/${id}`);
    }
  };

  const handleDrawerMenu = () => {
    setMenuDrawerOpen(!menuDrawerOpen);
  };

  const handleDrawerSearch = () => {
    setSearchDrawerOpen(!searchDrawerOpen);
  };

  const handleDrawerCart = () => {
    setCartDrawerOpen(!cartDrawerOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar elevation={0} position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>

          <Container>
            <Typography variant="h6" noWrap>
              <Link to="/" style={{textDecoration: 'none', color: 'white'}}>OnTheRocks</Link>
            </Typography>
          </Container>

          <Hidden smDown>
            <NavBox/>
          </Hidden>

          <Container className={classes.menu}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerSearch}
              className={`${classes.menuButton} ${classes.search}`}
            >
              <Search className={classes.icons}/>
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerCart}
              className={classes.menuButton}
            >
              <ShoppingCart className={classes.icons}/>
            </IconButton>

              <Hidden xsDown>  
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    className={classes.menuButton}
                    onClick={handleProfile}
                    >
                    <AccountCircle className={classes.icons} />
                  </IconButton>
              </Hidden>

           
            <Hidden xsDown>  
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  className={classes.menuButton}
                  onClick={handleLogOut}
                >
                  <ExitToApp className={classes.icons}/>
                </IconButton>
            </Hidden>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerMenu}
              className={classes.menuButton}
            >
              <Menu  />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
      
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={menuDrawerOpen}
            onClose={handleDrawerMenu}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <MenuList />
          </Drawer>
          <Drawer
            container={container}
            variant="temporary"
            anchor="top"
            open={searchDrawerOpen}
            onClose={handleDrawerSearch}
            classes={{
              paper: classes.drawerPaperTop
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <SearchList />
          </Drawer>
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={cartDrawerOpen}
            onClose={handleDrawerCart}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <CartList handleDrawerCart={handleDrawerCart}/>
          </Drawer>
        </Hidden>
      {/* <main> */}
        <div className={classes.blank} />
    </div>

    </div>
  );
}

export default NavBar;

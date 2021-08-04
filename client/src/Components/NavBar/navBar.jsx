import { useState } from "react";
import { AppBar, Toolbar, Typography, CssBaseline, Drawer, Hidden, IconButton, Container } from '@material-ui/core'
import { Menu, ShoppingCart, Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { MenuList, SearchList,CartList } from "./drawerLists"
import { useSelector } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `100%`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(0),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  drawerPaperTop: {
    width: "100%"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function NavBar(props) {
  const { window } = props;
  const classes = useStyles();
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const estado = useSelector(state => state.currentUser)
  console.log(estado)
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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Container>
            <Typography variant="h6" noWrap>
              OnTheRocks
            </Typography>
          </Container>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerSearch}
            className={classes.menuButton}
          >
            <Search />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerMenu}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerCart}
            className={classes.menuButton}
          >
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={menuDrawerOpen}
            onClose={handleDrawerMenu}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <MenuList/>
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
            <SearchList/>
          </Drawer>
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={cartDrawerOpen}
            onClose={handleDrawerCart}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <CartList/>
          </Drawer>
        </Hidden>
        {/* <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden> */}
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

export default NavBar;

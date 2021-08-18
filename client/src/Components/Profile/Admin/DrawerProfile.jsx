import React from 'react';
import { makeStyles, Drawer, Divider, IconButton } from '@material-ui/core';
import DrawerList from './DrawerList';
import { Link } from 'react-router-dom';


const useStyle = makeStyles((theme) => ({
  drawer: {
    width: '300px',
    
  },
  drawerPaper: {
   backgroundColor: '#333333',
   flexGrow: 1,
   width: '292px',
   color:'white'
  },
  toolbar: theme.mixins.toolbar,
}))

export default function DrawerProfile() {

  const classes = useStyle();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar}>
        <div style={{width: "100%", textAlign: "center"}}>
          <Link to="/">
          <img src="https://picsum.photos/200/85" alt="on-the-rocks-logo" width="200px"/>
          </Link>
        </div>
      </div>
      <Divider />
      <DrawerList />
    </Drawer>
  )
}

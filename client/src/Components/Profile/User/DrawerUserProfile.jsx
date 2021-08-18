import React from 'react';
import { makeStyles, Drawer, Divider, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DrawerListUser from './DrawerListUser';

const useStyle = makeStyles((theme) => ({
  drawer: {
    width: '300px',
    
  },
  drawerPaper: {
   backgroundColor: '#E9ECEF',
   flexGrow: 1,
   width: '292px'
   
  },
  toolbar: theme.mixins.toolbar,
}))

export default function DrawerUserProfile() {

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
      <DrawerListUser />
    </Drawer>
  )
}

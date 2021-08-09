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
        <Link to="/">
          <IconButton style={{textDecoration: 'none', color: '#1c2624', marginTop:'5px', marginLeft:'51px'}}>On The Rocks</IconButton>
        </Link>
      </div>
      <Divider />
      <DrawerListUser />
    </Drawer>
  )
}

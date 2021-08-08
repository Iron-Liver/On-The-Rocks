import React from 'react';
import { makeStyles, Drawer, Divider } from '@material-ui/core'
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
      <div className={classes.toolbar}></div>
      <Divider />
      <DrawerListUser />
    </Drawer>
  )
}

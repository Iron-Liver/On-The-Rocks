import React from 'react';
import { makeStyles, Drawer, Divider } from '@material-ui/core'
import DrawerList from './DrawerList';


const useStyle = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
   backgroundColor: '#E9ECEF',
    width: 240,
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
      <div className={classes.toolbar}></div>
      <Divider />
      <DrawerList />
    </Drawer>
  )
}

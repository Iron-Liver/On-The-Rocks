import React from 'react';
import DrawerProfile from './Drawer';
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'red'
  }
}))

export default function AdminProfile() {

  const classes = useStyle();

  return (
    <div className={classes.root}>
      {<DrawerProfile/>}
    </div>
  )
}

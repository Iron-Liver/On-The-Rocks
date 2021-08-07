import DrawerUserProfile from './DrawerUserProfile';
import { makeStyles, Hidden } from '@material-ui/core'
import { React } from 'react';

const useStyle = makeStyles((theme) => ({
  eldraw: {
    minWidth: "max-content",
    width: "max-content",
    maxWidth: "max-content",
    flexGrow: "1"
  }
}))

export default function AdminProfile() {

  const classes = useStyle();

  return (
   
      <Hidden xsDown>
        <div className={classes.eldraw}>
          {<DrawerUserProfile/>}
        </div>
      </Hidden>
   
  )
}

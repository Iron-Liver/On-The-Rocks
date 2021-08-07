import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Grid, makeStyles} from '@material-ui/core'
import { Create, NoteAdd, AddShoppingCart, AssignmentInd, ShoppingCart, AlternateEmailOutlined, DnsOutlined  } from '@material-ui/icons'


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
    border: '1px solid grey',
    borderRadius: '100px',
    backgroundColor: '#a7aaad',
    width: 135,
    height: 135,
    textAlign: 'center'
  }
}))

export default function DrawerList() {

  const classes = useStyles();

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
        <ListItemText secondary="Agustin Moroni" style={{width: '75%', display: "inline-block"}}/>
          </Grid>
        
           <Grid item xs={11} style={{ display: "flex", alignItems:'center'}}>
        <AlternateEmailOutlined style={{ fontSize: 15, marginRight:'10px'}}/>
        <ListItemText secondary="agusmoroni@hotmail.com" style={{width: '75%', display: "inline-block"}}/>
          </Grid>
        </Grid>
      </Grid>

      <Divider/>

      <ListItem  button> 
        <ListItemIcon>
          <AssignmentInd />
        </ListItemIcon>
        <ListItemText  primary="All-Users"/>
      </ListItem>
      <ListItem divider  button> 
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>
        <ListItemText primary="All-Orders"/>
      </ListItem>



      <ListItem  button> 
        <ListItemIcon>
          <NoteAdd />
        </ListItemIcon>
        <ListItemText primary="Create-Category"/>
      </ListItem>
      <ListItem  button> 
        <ListItemIcon>
          <AddShoppingCart />
        </ListItemIcon>
        <ListItemText primary="Create-Product"/>
      </ListItem>
      

      </List>
    </div>
  )
}

import { React } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Grid, makeStyles, ButtonBase, } from '@material-ui/core'
import { NoteAdd, AddShoppingCart, AssignmentInd, ShoppingCart, AlternateEmailOutlined, DnsOutlined  } from '@material-ui/icons'
import { Link } from 'react-router-dom'

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
    border: '2px solid  #fcf3cf   ',
    borderRadius: '100px',
    backgroundColor: '#a7aaad',
    width: 135,
    height: 135,
    textAlign: 'center'
  }
}))

export default function DrawerList() {

  const classes = useStyles();

  const userId = JSON.parse(localStorage.getItem('profile')).id

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
      <Link to={`/private/profile/${userId}/users`}>
        <ListItem  button> 
        <ButtonBase>
          <ListItemIcon>
            <AssignmentInd />
          </ListItemIcon>
          <ListItemText  primary="All-Users" />
        </ButtonBase>
        </ListItem>
      </Link>
      <Link to={`/private/profile/${userId}/orders`}>
        <ListItem divider button> 
          <ButtonBase>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="All-Orders"/>
          </ButtonBase>
        </ListItem>
      </Link> 
      <Link to={`/private/profile/${userId}/create_category`}>
        <ListItem  button> 
        <ButtonBase>
          <ListItemIcon>
            <NoteAdd />
          </ListItemIcon>
          <ListItemText primary="Create-Category"/>
        </ButtonBase>
        </ListItem>
      </Link>
      <Link to={`/private/profile/${userId}/create_product`}>
        <ListItem  button> 
        <ButtonBase>
          <ListItemIcon>
            <AddShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Create-Product"/>
          </ButtonBase>
        </ListItem>
      </Link>
      
      </List>
    </div>
  )
}

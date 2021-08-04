import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Box, withWidth, Button, Hidden, Icon } from '@material-ui/core'; 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    marginLeft: '20px',
    width: 140,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  buttons: {
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div style={{width:'80%', margin:'0 auto'}}>
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSDmRo2pJnrQMYVI3HvKad4VTEh4JoLZPJuZkb129lqCqUJQEtBlei5PWnqhv6HDKPZeBAPVRY&usqp=CAc"

      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            Product Name
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Created at:
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Adress
          </Typography>
        </CardContent>
      </div>
        <Hidden xsDown>
          <Box m={1} className={classes.buttons}>
            <Button variant="contained"> Delete Order</Button>
            <Button variant="contained"> Order Details</Button>
          </Box>
        </Hidden>
        <Hidden smUp>
          <IconButton edge="end" color="inherit" aria-label="menu">
             <MoreIcon />
         </IconButton>
        </Hidden>
    </Card>


    <br/>


  </div>
  );
}
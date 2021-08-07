import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Box, Button, Hidden } from "@material-ui/core"; 


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    marginLeft: "20px",
    width: 140,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  buttons: {
    marginRight: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
}));

const Order = () => {
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://picsum.photos/800/800"
      />
      <Box component="div" className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            Product Name
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Created at:
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Address
          </Typography>
        </CardContent>
      </Box>
      <Hidden xsDown>
        <Box m={1} className={classes.buttons}>
          <Button variant="contained" color="primary">
            Delete Order
          </Button>
          <Button variant="contained" color="primary">
            Order Details
          </Button>
        </Box>
      </Hidden>
      <Hidden smUp>
        <IconButton edge="end" color="inherit" aria-label="menu">
          <MoreIcon />
        </IconButton>
      </Hidden>
    </Card>
    <Card className={classes.root}>
    <CardMedia
      className={classes.cover}
      image="https://picsum.photos/800/800"
    />
    <Box component="div" className={classes.details}>
      <CardContent className={classes.content}>
        <Typography component="h6" variant="h6">
          Product Name
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Created at:
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Address
        </Typography>
      </CardContent>
    </Box>
    <Hidden xsDown>
      <Box m={1} className={classes.buttons}>
        <Button variant="contained" color="primary">
          Delete Order
        </Button>
        <Button variant="contained" color="primary">
          Order Details
        </Button>
      </Box>
    </Hidden>
    <Hidden smUp>
      <IconButton edge="end" color="inherit" aria-label="menu">
        <MoreIcon />
      </IconButton>
    </Hidden>
  </Card>
  </div>
  );
}

export default Order

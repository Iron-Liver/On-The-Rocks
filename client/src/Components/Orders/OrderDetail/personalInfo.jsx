import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Grid, Paper, Typography, makeStyles, Button } from "@material-ui/core";
import { Delete, Info } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    maxHeight: "max-content",
    minHeight: "100%",
    height: "100%",
    marginBottom: "30px",
  },
  paperInfo: {
    height: "max-content",
    width: "95%",
    margin: "auto",
    background: "#e9ecef",
  },
}));

const PersonalInfo = ({ order, id }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleRemove = async () => {
    let doubleCheck = window.confirm(
      "This action is irreversible, are you sure to continue?"
    );
    if (doubleCheck) {
      const response = await axios.post(`/order/deleteOrder`, {
        orderId: id,
      });
      if (response.status !== 200) {
        return window.alert("An error occurred while removing the order");
      }
      history.push("/");
    }
  };

  return (
    <Grid item xs={12} sm={5} md={4}>
      <div className={classes.paperContainer}>
        <Paper className={classes.paperInfo} square>
          <div style={{ width: "100%", height: "100%", margin: "20px 0" }}>
            <div
              style={{
                margin: "0 auto",
                padding: "20px",
                display: "flex",
                width: "90%",
                justifyContent: "center",
                background: "white",
              }}
            >
              <img
                src={
                  order.order_products &&
                  order.order_products[0].product.image
                }
                alt=""
                width="200px"
              />
            </div>
            <br />
            <div style={{ padding: "0 20px", display: "flex" }}>
              <Typography style={{ flexGrow: "1" }}>
                Order#{order.id}
              </Typography>
            </div>
            <br />
            <div style={{ padding: "0 20px", display: "flex" }}>
              <Typography style={{ flexGrow: "1" }}>First name:</Typography>
              <Typography>{order.firstName}</Typography>
            </div>
            <br />
            <div style={{ padding: "0 20px", display: "flex" }}>
              <Typography style={{ flexGrow: "1" }}>Last name:</Typography>
              <Typography>{order.lastName}</Typography>
            </div>
            <br />
            <div style={{ padding: "0 20px", display: "flex" }}>
              <Typography style={{ flexGrow: "1" }}>Address:</Typography>
              <Typography>{order.address}</Typography>
            </div>
            <br />
            <div style={{ padding: "0 20px", display: "flex" }}>
              <Typography style={{ flexGrow: "1" }}>City:</Typography>
              <Typography>{order.city}</Typography>
            </div>
            <br />
            <div style={{ padding: "0 20px", display: "flex" }}>
              <Typography style={{ flexGrow: "1" }}>Zip code:</Typography>
              <Typography>{order.zipCode}</Typography>
            </div>
            <br />
            <div
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Button
                color="default"
                variant="text"
                startIcon={<Delete />}
                onClick={handleRemove}
              >
                Remove order
              </Button>
              <Button variant="text" color="default" startIcon={<Info />}>
                Get help
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    </Grid>
  )
}

export default PersonalInfo;

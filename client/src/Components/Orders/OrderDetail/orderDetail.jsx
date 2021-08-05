import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Typography,
  Grid,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Link,
  Hidden
} from "@material-ui/core";
import { ExpandMore, ShoppingCart, VisibilityOff } from "@material-ui/icons";
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  accordionContainer: {
    margin: "0 auto",
    width: "99%",
    marginTop: "20px",
  },
  accordion: {
    width: "100%",
    background: "#e9ecef",
  },
  accordionSummary: {
    boxShadow: "0px 0px 0px",
    width: "100%",
    background: "#ced4da",
  },
  heading: {
    margin: "2px 0 0 6px",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  detailsContainer: {
    minWidth: "60%",
    width: "60%",
  },
  imgContainer: {
    padding: "0",
  },
  img: {
    border: "1px solid black",
    width: "100%",
    objectFit: "fill",
  },
  product: {
    borderBottom: "1px solid #ddd",
  },
  details: {
    width: "100%",
    background: "blue",
    height: "400px",
  },
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
  paperDetails: {
    height: "95%",
    width: "95%",
    margin: "auto",
    background: "#ced4da",
  },
}));

const OrderDetail = () => {
  const [order, setOrder] = useState({});
  const [error, setError] = useState(false);

  const [productExpanded, setProductExpanded] = useState(false);
  const [summaryExpanded, setSummaryExpanded] = useState(false);

  const history = useHistory();
  const {id} = useParams();
  const classes = useStyles();
  const user = useSelector(state => state.userReducer);

  const toggleAccordionProducts = () => {
    setProductExpanded(!productExpanded);
  }

  const toggleAccordionSummary = () => {
    setSummaryExpanded(!summaryExpanded);
  };

  useEffect(() => {
    (async () => {
      try {
        const order = await axios.get(`/order/getOrderById/${id}`);
        // if (order.data.error) {
        //   throw new Error(order.data.error);
        // }
        // if (!user.userDetail || order.data.userId !== user.userDetail.id) {
        //   history.push("/");
        // }
        setOrder(order.data);
      } catch (err) {
        setError(true);
      }
    })();
  }, [id, history, user]);
  
  return (
    <div>
      <Grid container style={{ alignItems: "flex-start" }}>
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
                    src={order.order_products && order.order_products[0].product.image}
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
              </div>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
          <div className={classes.paperContainer}>
            <Paper className={classes.paperDetails}>
              <div style={{ width: "100%", height: "100%", margin: "20px 0" }}>
                <div style={{ padding: "0 20px", display: "flex" }}>
                  <Typography style={{ flexGrow: "1" }}>Status:</Typography>
                  <Typography>
                    {order.status &&
                      order.status[0].toUpperCase() + order.status.slice(1)}
                  </Typography>
                </div>
                <br />
                <div style={{ padding: "0 20px", display: "flex" }}>
                  <Typography style={{ flexGrow: "1" }}>
                    Payment method:
                  </Typography>
                  <Typography>{order.paymentMethod}</Typography>
                </div>
                <br />
                <div>
                  <Accordion
                    expanded={summaryExpanded}
                    onChange={toggleAccordionSummary}
                    className={classes.accordionSummary}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      {summaryExpanded ? (
                        <Typography variant="body2" className={classes.heading}>
                          Hide summary
                        </Typography>
                      ) : (
                        <Typography variant="body2" className={classes.heading}>
                          Summary
                        </Typography>
                      )}
                    </AccordionSummary>
                    {order.order_products &&
                      order.order_products.map((order) => (
                        <AccordionDetails
                          key={`${order.product.id}${order.id}`}
                          className={classes.product}
                        >
                          <div style={{ flexGrow: "1" }}>
                            <Typography variant="body2">
                              {order.product.name}
                            </Typography>
                          </div>
                          <div>
                            <Typography variant="body2">
                              {order.product.price > order.unitPrice ? (
                                <>
                                  <Hidden smDown>
                                    <del>${order.product.price}</del>
                                  </Hidden>
                                  <strong> ${order.unitPrice} </strong>
                                </>
                              ) : (
                                order.unitPrice
                              )}
                              x {order.units}
                            </Typography>
                          </div>
                        </AccordionDetails>
                      ))}
                  </Accordion>
                </div>

                <br />
                <div
                  style={{
                    padding: "0 20px",
                    display: "flex",
                    alignItems: "baseline",
                  }}
                >
                  <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Total:
                  </Typography>
                  <Typography>${order.total}</Typography>
                </div>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
      <div className={classes.accordionContainer}>
        <Accordion
          expanded={productExpanded}
          onChange={toggleAccordionProducts}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {productExpanded ? (
              <>
                <VisibilityOff />
                <Typography className={classes.heading}>
                  Hide products
                </Typography>
              </>
            ) : (
              <>
                <ShoppingCart />
                <Typography className={classes.heading}>Products</Typography>
              </>
            )}
          </AccordionSummary>
          {order.order_products &&
            order.order_products.map((order) => (
              <AccordionDetails
                key={`${order.product.id}${order.id}`}
                className={classes.product}
              >
                <div style={{ flexGrow: "1" }}>
                  <Link href={`/productDetail/${order.product.id}`}>
                    <Typography variant="h6">{order.product.name}</Typography>
                  </Link>
                  <Typography variant="overline" display="block">
                    Category: {order.product.category}
                  </Typography>
                  <Typography variant="overline" display="block">
                    Brand: {order.product.brand}
                  </Typography>
                  <Typography variant="overline" display="block">
                    Size: {order.product.size}
                  </Typography>
                  <Typography variant="overline" display="block">
                    Units: {order.units} u.
                  </Typography>
                  <Typography variant="overline" display="block">
                    Unit price:{" "}
                    {order.product.price > order.unitPrice ? (
                      <>
                        <del>${order.product.price}</del>
                        <strong> ${order.unitPrice} </strong>
                      </>
                    ) : (
                      order.unitPrice
                    )}
                  </Typography>
                  <Typography variant="overline" display="block">
                    Total: ${(order.unitPrice * order.units).toFixed(2)}
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Link href={`/productDetail/${order.product.id}`}>
                    <img
                      src={order.product.image}
                      width="150px"
                      alt="productimage"
                    />
                  </Link>
                </div>
              </AccordionDetails>
            ))}
        </Accordion>
      </div>
    </div>
  );
}

export default OrderDetail;

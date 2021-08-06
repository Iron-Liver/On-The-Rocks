import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Hidden,
  makeStyles
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  accordionSummary: {
    boxShadow: "0px 0px 0px",
    width: "100%",
    background: "#ced4da",
  },
  paperContainer: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    maxHeight: "max-content",
    minHeight: "100%",
    height: "100%",
    marginBottom: "30px"
  },
  paperDetails: {
    height: "95%",
    width: "95%",
    margin: "auto",
    background: "#ced4da"
  },
  product: {
    borderBottom: "1px solid #ddd"
  },
  heading: {
    margin: "2px 0 0 6px",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const Summary = ({ order }) => {

  const [summaryExpanded, setSummaryExpanded] = useState(false);

  const toggleAccordionSummary = () => {
    setSummaryExpanded(!summaryExpanded);
  }; 

  const classes = useStyles();

  return (
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
  );
}

export default Summary;

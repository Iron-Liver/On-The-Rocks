import React, { useState } from 'react';
import './Checkout.css';
import { 
  Accordion, 
  AccordionSummary, 
  Typography, 
  AccordionDetails, 
  Hidden, 
  makeStyles 
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

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

const OrderInfo = ({ order }) => {

  const [summaryExpanded, setSummaryExpanded] = useState(false);

  const toggleAccordionSummary = () => {
    setSummaryExpanded(!summaryExpanded);
  }; 

  const classes = useStyles();

  return (
    <div className="order-info">
      <h1>Checkout</h1>
      <div className="order-personal-info">
        <ul className="order-info-ul">
          <li className="info-item-li">
            <div className="info-item-title">
              Status:
            </div>
            <div>
              {order.status}
            </div>
          </li>
          <li className="info-item-li">
            <div className="info-item-title">
              Payment method:
            </div>
            <div>
              {order.paymentMethod}
            </div>
          </li>
          <li className="info-item-li">
            <div className="info-item-title">
              First name: 
            </div>
            <div>
              {order.firstName}
            </div>
          </li>
          <li className="info-item-li">
            <div className="info-item-title">
              Last name: 
            </div>
            <div>
              {order.lastName}
            </div>
          </li>
          <li className="info-item-li">
            <div className="info-item-title">
              Address: 
            </div>
            <div>
              {order.address}
            </div>
          </li>
          <li className="info-item-li">
            <div className="info-item-title">
              City:
            </div>
            <div>
              {order.city}
            </div>
          </li>
          <li className="info-item-li">
            <div className="info-item-title">
              Zip code:
            </div>
            <div>
              {order.zipCode}
            </div>
          </li>
        </ul>
      </div>
      <div className="order-products-info">
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
                  Summary ({order.order_products.length} products)
                </Typography>
              )}
            </AccordionSummary>
            {order.order_products &&
              order.order_products.map((order) => (
                <div key={`${order.product.id}${order.id}`}>
                  {order.product ? (
                    <AccordionDetails
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
                                <del> ${order.product.price} </del>
                              </Hidden>
                              <strong> ${order.unitPrice} </strong>
                            </>
                          ) : (
                            <>${order.unitPrice / order.units} </>
                          )}
                          x {order.units}
                        </Typography>
                      </div>
                    </AccordionDetails>
                  ) : (
                    <AccordionDetails
                      key={`${Math.random() * 9999}`}
                      className={classes.product}
                    >
                      <div style={{ flexGrow: "1" }}>
                        <Typography variant="body2">
                          Product not found
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body2">
                        <>${order.unitPrice / order.units} </>
                        x {order.units}
                        </Typography>
                      </div>
                    </AccordionDetails>
                  )}
                </div>
              ))
            }
          </Accordion>
        </div>
        <div className="info-total">
          <div className="info-item-title">Total: </div>
          $ {order.total}
        </div>
      </div>
    </div>
  )
}

export default OrderInfo

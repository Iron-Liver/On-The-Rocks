import React, { useState } from "react";
import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-router-dom';
import { ExpandMore, VisibilityOff, ShoppingCart } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: "100%",
    background: "#F7F5F3",
  },
  heading: {
    margin: "2px 0 0 6px",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  product: {
    borderBottom: "1px solid #ddd",
  }
}));

const ProductsAccordion = ({ order }) => {

  const classes = useStyles();

  const [productExpanded, setProductExpanded] = useState(false);
  
  const toggleAccordionProducts = () => {
    setProductExpanded(!productExpanded);
  };

  return (
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
            <Typography className={classes.heading}>Hide products</Typography>
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
          <div key={Math.random()}>
            {order.product ? (
              <AccordionDetails
                key={`${order.product.id}${order.id}`}
                className={classes.product}
              >
                <div style={{ flexGrow: "1" }}>
                  <Link to={`/products/${order.product.id}`} style={{ color: "black", textDecoration: "none" }}>
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
                  <Link to={`/products/${order.product.id}`}>
                    <img
                      src={order.product.image}
                      width="150px"
                      alt={order.product.name}
                      style={{
                        border: "1px solid #372c2e11"
                      }}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/android-icon-192x192.png';
                      }}
                    />
                  </Link>
                </div>
              </AccordionDetails>
            ) : (
              <AccordionDetails
                key={`${Math.random() * 9999}`}
                className={classes.product}
              >
                <div style={{ flexGrow: "1" }}>
                  <Typography variant="h6">Product not found</Typography>
                  <Typography variant="overline" display="block">
                    -
                  </Typography>
                  <Typography variant="overline" display="block">
                    -
                  </Typography>
                  <Typography variant="overline" display="block">
                    -
                  </Typography>
                  <Typography variant="overline" display="block">
                    -
                  </Typography>
                  <Typography variant="overline" display="block">
                    -
                  </Typography>
                  <Typography variant="overline" display="block">
                    -
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://i.stack.imgur.com/y9DpT.jpg"
                      width="150px"
                      alt="productimage-error"
                    />
                </div>
              </AccordionDetails>
            )}
          </div>
        ))}
    </Accordion>
  );
};

export default ProductsAccordion;

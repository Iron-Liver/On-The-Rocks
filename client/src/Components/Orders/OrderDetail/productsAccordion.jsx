import React, { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
  Link
} from "@material-ui/core";
import { ExpandMore, VisibilityOff, ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: "100%",
    background: "#e9ecef",
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
          <AccordionDetails
            key={`${order.product.id}${order.id}`}
            className={classes.product}
          >
            <div style={{ flexGrow: "1" }}>
              <Link href={`/products/${order.product.id}`}>
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
              <Link href={`/products/${order.product.id}`}>
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
  );
};

export default ProductsAccordion;

import './Checkout.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoupons, desAction } from "../../Redux/Coupon/couponActions"
import { 
  Accordion, 
  AccordionSummary, 
  Typography, 
  AccordionDetails, 
  Hidden, 
  makeStyles,
  ButtonBase
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  accordionSummary: {
    boxShadow: "0px 0px 0px",
    width: "100%",
    background: "#ced4da",
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: "10px",
    display: "flex"
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
  },
  text: {
    position: "relative",
    "&:hover": {
        zIndex: 1,
        "& $imageMarked": {
        width: "calc(80%)",
        left: "calc(10%)",
        transition: 'all 0.35s ease-out',
        },
    }
    },
  imageTitle: {
    position: "relative",
    width: '70px',
    padding: `${theme.spacing(1)}px ${theme.spacing(0)}px ${
        theme.spacing(1) + 2
    }px`,
    fontFamily: 'Montserrat',
    fontWeight: '500'
    },
    imageMarked: {
       height: 2,
       width: "calc(20%)",
       backgroundColor: theme.palette.common.white,
       position: "absolute",
       bottom: 1,
       left: "calc(40%)",
       transition: 'all 0.35s ease-out',
    },
      blackBack: {
      backgroundColor: "#372c2e"
    },
                
}));

const OrderInfo = ({ order }) => {
  const userId = order.userId;
  const { Coupons } = useSelector((state) => state.couponReducer);  
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(getCoupons(userId));
    }, []);

  const [summaryExpanded, setSummaryExpanded] = useState(false);
  const [summaryExpanded2, setSummaryExpanded2] = useState(false)
  const [desc, setDesc] = useState()

  const toggleAccordionSummary = () => {
    setSummaryExpanded(!summaryExpanded);
  }; 

  const toggleAccordionSummary2 = () => {
    setSummaryExpanded2(!summaryExpanded2);
  }; 
  
  function descuento(porc,code, e) {
    e.preventDefault()
    setDesc(porc)  
    dispatch(desAction(porc,code))
  } 
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
            expanded={summaryExpanded2}
            onChange={toggleAccordionSummary2}
            className={classes.accordionSummary}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              {summaryExpanded2 ? (
                <Typography variant="body2" className={classes.heading}>
                  Hide coupons
                </Typography>
              ) : (
                <Typography variant="body2" className={classes.heading}>
                  Coupons ({Coupons.length})
                </Typography>
              )}
            </AccordionSummary>
          
            {Coupons &&
              Coupons.map((coupon) => (
                <ButtonBase
                focusRipple
                key={coupon.id}
                className={classes.text}
                 onClick = {(e) => descuento(coupon.discount, coupon.code, e) } 
                >
                <div key={coupon.id}>
                    <AccordionDetails
                      className={classes.product}
                    >
                    <p
                       component="span"
                       variant="subtitle1"
                       color="inherit"
                       className={classes.imageTitle}
                    >
                     <div style={{ flexGrow: "1" }}>
                        <Typography variant="body2">
                          {coupon.code}
                        </Typography>
                        <Typography variant="body2">
                          {coupon.discount * 100}%
                        </Typography>
                     </div>
                   <span className={classes.imageMarked}/>
                  </p>
                    </AccordionDetails>
                  </div>
              </ButtonBase> 
                  ))}
               <ButtonBase
                focusRipple
                key="0"
                className={classes.text}
                 onClick = {(e) => descuento(0, e) } 
                >
                <div key="0">
                    <AccordionDetails
                      className={classes.product}
                    >
                    <p
                       component="span"
                       variant="subtitle1"
                       color="inherit"
                       className={classes.imageTitle}
                    >
                     <div style={{ flexGrow: "1" }}>
                        <Typography variant="body2">
                          Remove discount
                        </Typography>
                     </div>
                   <span className={classes.imageMarked}/>
                  </p>
                    </AccordionDetails>
                  </div>
                </ButtonBase>    
          </Accordion>
        </div>
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
        {desc ?
        (
          <div className="info-item-title">Total: 
           ${order.total-(order.total*desc)}
          </div>
        ):(
          <div className="info-item-title">Total:
          $ {order.total}
          </div>
         )}
         </div>
      </div>   
    </div>
  )
}

export default OrderInfo

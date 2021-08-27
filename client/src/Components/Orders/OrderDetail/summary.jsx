import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    Grid,
    Paper,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Hidden,
    makeStyles,
    Button,
    Tooltip,
} from "@material-ui/core";
import { ExpandMore, Payment, Help } from "@material-ui/icons";
import { Link } from "react-router-dom";
import verifyUser from "../../../Utils/verifyUser";
import { logOutUser } from "../../../Redux/Users/userActions";

const useStyles = makeStyles((theme) => ({
    accordionSummary: {
        boxShadow: "0px 0px 0px",
        width: "100%",
        background: "#F7F5F3",
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
    paperDetails: {
        height: "95%",
        width: "95%",
        margin: "auto",
        background: "#F7F5F3",
    },
    product: {
        borderBottom: "1px solid #ddd",
    },
    heading: {
        margin: "2px 0 0 6px",
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const message = {
    processing: `Payment is being processed, we 
    will receive your order when it is approved`,
    cancelled: `The pay has been rejected, or we 
    cancelled the order for problems with it, 
    you can try to make it again.`,
    pending: `This order is not finished, you can 
    pay it now.`,
    created: `We have your order and we are working 
    on it, you will receive an email when it 
    is finished.`,
    completed: `The order has been finished, 
    you can pick it at our shop.`,
};

const Summary = ({ order, orderStatus }) => {
    const [summaryExpanded, setSummaryExpanded] = useState(false);
    const dispatch = useDispatch();
    const currentUser = verifyUser();
    if (currentUser?.hasOwnProperty("logout")) {
        dispatch(logOutUser());
        window.location.replace(`${window.location.origin}/login`);
        alert("Session expired. Please login");
    }

    const toggleAccordionSummary = () => {
        setSummaryExpanded(!summaryExpanded);
    };

    const classes = useStyles();

    return (
        <>
            {order && (
                <Grid item xs={12} sm={7} md={8}>
                    <div className={classes.paperContainer}>
                        <Paper className={classes.paperDetails}>
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    margin: "20px 0",
                                }}
                            >
                                <div
                                    style={{
                                        padding: "0 20px",
                                        display: "flex",
                                        alignItems: "baseline",
                                    }}
                                >
                                    <Typography style={{ flexGrow: "1" }}>
                                        Status:
                                    </Typography>
                                    <Typography style={{ marginRight: "5px" }}>
                                        {orderStatus &&
                                            orderStatus[0].toUpperCase() +
                                                orderStatus.slice(1)}
                                    </Typography>
                                    <Tooltip title={message[orderStatus]}>
                                        <Help
                                            style={{
                                                width: "15px",
                                                position: "relative",
                                                top: "6px",
                                            }}
                                        />
                                    </Tooltip>
                                    {orderStatus === "pending" &&
                                        currentUser.id === order.userId && (
                                            <Link
                                                to={`/${order.paymentMethod.toLowerCase()}/${
                                                    order.id
                                                }`}
                                            >
                                                <Button startIcon={<Payment />}>
                                                    Pay
                                                </Button>
                                            </Link>
                                        )}
                                </div>
                                <br />
                                <div
                                    style={{
                                        padding: "0 20px",
                                        display: "flex",
                                    }}
                                >
                                    <Typography style={{ flexGrow: "1" }}>
                                        Payment method:
                                    </Typography>
                                    <Typography>
                                        {order.paymentMethod &&
                                            `${order.paymentMethod[0].toUpperCase()}${order?.paymentMethod.slice(
                                                1
                                            )}`}
                                    </Typography>
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
                                                <Typography
                                                    variant="body2"
                                                    className={classes.heading}
                                                >
                                                    Hide summary
                                                </Typography>
                                            ) : (
                                                <Typography
                                                    variant="body2"
                                                    className={classes.heading}
                                                >
                                                    Summary
                                                </Typography>
                                            )}
                                        </AccordionSummary>
                                        {order.order_products &&
                                            order.order_products.map(
                                                (order) => (
                                                    <div key={Math.random()}>
                                                        {order.product ? (
                                                            <AccordionDetails
                                                                key={`${order.product.id}${order.id}`}
                                                                className={
                                                                    classes.product
                                                                }
                                                            >
                                                                <div
                                                                    style={{
                                                                        flexGrow:
                                                                            "1",
                                                                    }}
                                                                >
                                                                    <Typography variant="body2">
                                                                        {
                                                                            order
                                                                                .product
                                                                                .name
                                                                        }
                                                                    </Typography>
                                                                </div>
                                                                <div>
                                                                    <Typography variant="body2">
                                                                        {order
                                                                            .product
                                                                            .price >
                                                                        order.unitPrice ? (
                                                                            <>
                                                                                <Hidden
                                                                                    smDown
                                                                                >
                                                                                    <del>
                                                                                        {" "}
                                                                                        $
                                                                                        {
                                                                                            order
                                                                                                .product
                                                                                                .price
                                                                                        }{" "}
                                                                                    </del>
                                                                                </Hidden>
                                                                                <strong>
                                                                                    {" "}
                                                                                    $
                                                                                    {
                                                                                        order.unitPrice
                                                                                    }{" "}
                                                                                </strong>
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                $
                                                                                {
                                                                                    order.unitPrice
                                                                                }{" "}
                                                                            </>
                                                                        )}
                                                                        x{" "}
                                                                        {
                                                                            order.units
                                                                        }
                                                                    </Typography>
                                                                </div>
                                                            </AccordionDetails>
                                                        ) : (
                                                            <AccordionDetails
                                                                key={`${
                                                                    Math.random() *
                                                                    9999
                                                                }`}
                                                                className={
                                                                    classes.product
                                                                }
                                                            >
                                                                <div
                                                                    style={{
                                                                        flexGrow:
                                                                            "1",
                                                                    }}
                                                                >
                                                                    <Typography variant="body2">
                                                                        Product
                                                                        not
                                                                        found
                                                                    </Typography>
                                                                </div>
                                                                <div>
                                                                    <Typography variant="body2">
                                                                        <>
                                                                            $
                                                                            {
                                                                                order.unitPrice
                                                                            }{" "}
                                                                        </>
                                                                        x{" "}
                                                                        {
                                                                            order.units
                                                                        }
                                                                    </Typography>
                                                                </div>
                                                            </AccordionDetails>
                                                        )}
                                                    </div>
                                                )
                                            )}
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
                                    <Typography
                                        variant="h6"
                                        style={{ flexGrow: "1" }}
                                    >
                                        Total:
                                    </Typography>
                                    <Typography>${order.total}</Typography>
                                </div>
                            </div>
                        </Paper>
                    </div>
                </Grid>
            )}
        </>
    );
};

export default Summary;

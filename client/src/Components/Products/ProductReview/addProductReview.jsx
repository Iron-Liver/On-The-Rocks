import React, { useEffect, useState } from "react";
import { makeStyles, TextField, Grid, Paper, Button } from "@material-ui/core";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import "./review.css";

import { useDispatch } from "react-redux";
import { createReview } from "../../../Redux/Reviews/reviewActions";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        width: "90%",
        margin: "auto",
        display: "flex",
    },
}));

export const AddProductReview = ({ prodId, userId }) => {
    prodId = Number(prodId);
    const classes = useStyles();
    const [stars, setStars] = useState();
    const [input, setInput] = useState();
    const [anonymous, setAnonymous] = useState(true);
    const dispatch = useDispatch();
    const [bought, setBought] = useState();

    const handleInputChange = async (e) => {
        await setInput(e.target.value);
    };

    const checkIfBought = async (e) => {
        let { data } = await axios.get(`/order/getUserOrders/${userId}`);
        var aux = []; //eslint-disable-next-line
        data = data.map((x) => {
            if (Array.isArray(x.order_products))
                return x.order_products.map((x) => x.productId);
        });
        data.forEach(function (subArray) {
            return (aux = aux.concat(subArray));
        });
        // setBought(Array.from(new Set(aux)).includes(prodId));
        setBought(true)
    };

    // const createdRev = (userId,prodId,stars,input,anonymous)=>{
    //         console.log("ENTROOO")
    //         dispatch(createReview(userId,prodId,stars,input,anonymous))
    // }

    useEffect(() => {
        checkIfBought();
        // eslint-disable-next-line
    }, []);

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2} direction="column">
                {bought ? (
                    <>
                        <Grid item>
                            <h2
                                style={{
                                    fontFamily: `"Montserrat", sans-serif`,
                                    fontSize: "25px",
                                    fontWeight: 400,
                                }}
                            >
                                Please give your opinion.
                            </h2>
                            <Rating
                                name={`user review`}
                                value={stars ? stars : 0}
                                size="large"
                                onChange={(event, newValue) => {
                                    setStars(newValue ? newValue : 1);
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <label
                                htmlFor="anonymous"
                                style={{
                                    height: "max-content",
                                    padding: "10px 0",
                                    flexGrow: "1",
                                    fontFamily: `"Montserrat", sans-serif`,
                                    fontWeight: "400",
                                    fontSize: "15px",
                                    letterSpacing: "-0.5px",
                                }}
                            >
                                Anonymous:
                                <input
                                    name="anonymous"
                                    type="checkbox"
                                    checked={anonymous}
                                    onChange={(event) => {
                                        setAnonymous(event.target.checked);
                                    }}
                                    className="check-anon"
                                />
                            </label>
                            <TextField
                                helperText={
                                    "Enter your opinion. \n Minimum length 28 characters. \n Maximum length 528 characters."
                                }
                                fullWidth={true}
                                id="description"
                                label="Description"
                                name="description"
                                multiline
                                rows={4}
                                value={input}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item container alignItems="baseline">
                            <Button
                                onClick={() =>
                                    dispatch(
                                        createReview(
                                            userId,
                                            prodId,
                                            stars,
                                            input,
                                            anonymous
                                        )
                                    )
                                }
                            >
                                Submit
                            </Button>
                        </Grid>
                    </>
                ) : (
                    <Grid item>
                        <h3
                            style={{
                                fontFamily: `"Montserrat", sans-serif`,
                                fontWeight: "300",
                                margin: "10px 0",
                            }}
                        >
                            You have to buy this item in order to leave an
                            opinion.
                        </h3>
                    </Grid>
                )}
            </Grid>
        </Paper>
    );
};
export default AddProductReview;

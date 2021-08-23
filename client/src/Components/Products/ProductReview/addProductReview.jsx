import React, { useEffect, useState } from "react";
import {
    makeStyles,
    TextField,
    Grid,
    Paper,
    Typography,
    Button,
} from "@material-ui/core";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import jwt from "jsonwebtoken";

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
    const [bought, setBought] = useState();
    const dispatch = useDispatch();

    const handleInputChange = async (e) => {
        await setInput(e.target.value);
    };

    const checkIfBought = async (e) => {
        let { data } = await axios.get(`/order/getUserOrders/${userId}`);
        var aux = [];
        data = data.map((x) => {
            if (Array.isArray(x.order_products))
                return x.order_products.map((x) => x.productId);
        });
        data = data.forEach(function (subArray) {
            return (aux = aux.concat(subArray));
        });
        setBought(Array.from(new Set(aux)).includes(prodId)) 
    };

    React.useEffect(() => {
        checkIfBought();
    },[])
    
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2} direction="column">
                <div>
                    {bought ? (
                        <div>
                            <Grid item>
                                <Typography variant="h5">
                                    Please give your opinion.
                                </Typography>
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
                                <TextField
                                    helperText={
                                        "Enter your opinion. \n Minimum length 28 characters. \n Maximum length 528 characteres."
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
                            <Grid item container alignContent="flex-end">
                                <Button
                                    onClick={() => {
                                        dispatch(
                                            createReview(
                                                userId,
                                                prodId,
                                                stars,
                                                input
                                            )
                                        );
                                    }}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </div>
                    ) : (<Grid item>
                        <h3>
                            You have to buy this item in order to leave an
                            opinion.
                        </h3>
                    </Grid>)}
                </div>
            </Grid>
        </Paper>
    );
};
export default AddProductReview;

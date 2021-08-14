import React, { useState } from "react";
import {
    makeStyles,
    TextField,
    Grid,
    Paper,
    Typography,
    Button,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import { useDispatch } from "react-redux";
import {createReview} from '../../../Redux/Reviews/reviewActions'

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
    const classes = useStyles();
    const [stars, setStars] = useState();
    const [input, setInput] = useState();
    const dispatch = useDispatch()

    const handleInputChange = async (e) => {
        await setInput(e.target.value);
    };
    return (
        <Paper className={classes.paper}>
            <Grid
                container
                spacing={2}
                direction="column"
            >
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
                <Grid item container alignContent='flex-end'>
                    <Button onClick={() => {dispatch(createReview(userId,prodId,stars,input))}}>Submit</Button>
                </Grid>
            </Grid>
        </Paper>
    );
};
export default AddProductReview;

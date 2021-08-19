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
import './review.css';

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
    const [anonymous, setAnonymous] = useState(true);
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
                    <h2 style={{
                      fontFamily: `"Heebo", sans-serif`,
                      fontSize: "25px",
                      letterSpacing: "-0.5px"
                    }}>
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
                            letterSpacing: "-0.5px"
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
                    <Button onClick={() => {dispatch(createReview(userId,prodId,stars,input,anonymous))}}>Submit</Button>
                </Grid>
            </Grid>
        </Paper>
    );
};
export default AddProductReview;

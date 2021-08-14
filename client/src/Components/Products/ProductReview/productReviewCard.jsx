import {
    makeStyles,
    Container,
    Grid,
    Paper,
    Typography,
    ButtonBase,
} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 500,
    },
    image: {
        width: 200,
        height: 200,
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
    },
}));

export const ProductReviewCard = ({ reviews }) => {
    const classes = useStyles();
    return (
        <>
            {reviews.length > 1 ? (
                reviews.map((review) => {
                    return (
                        <Paper className={classes.paper} key={review.id}>
                            {console.log('return test')}
                        <Grid
                            container
                            spacing={2}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Grid item>
                                <Rating
                                    readOnly
                                    name={`review ${review.userId}`}
                                    value={review?.stars}
                                    size="large"
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            alignItems="center"
                            style={{ maxWidth: "90%", margin: "auto" }}
                        >
                            <Typography>
                                {review?.description}
                            </Typography>
                        </Grid>
                    </Paper>
                    );
                })
            ) : (
                <h1>No reviews registered yet</h1>
            )}
        </>
    );
};

export default ProductReviewCard;

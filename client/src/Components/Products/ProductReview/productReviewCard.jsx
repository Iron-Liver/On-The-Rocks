import {
    makeStyles,
    Grid,
    Paper,
    Typography
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
    }
}));

export const ProductReviewCard = ({ reviews }) => {
    const classes = useStyles();
    return (
        <Grid container spacing={4} style={{width:'90%',margin: "auto"}}>
            {reviews.length > 1 ? (
                reviews.map((review) => {
                    return (
                        <Grid item xs={12} sm={6} lg={4} key={review.id}>
                        <Paper className={classes.paper} >
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
                    </Grid>
                    );
                })
            ) : (
                <Typography variant="h4" align="center" >No reviews registered yet</Typography>
            )}
            </Grid>
    );
};

export default ProductReviewCard;

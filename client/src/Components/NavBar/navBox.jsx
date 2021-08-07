import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ButtonBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        width: "100%",
        justifyContent: "space-around",
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
        }px`
    },
    imageMarked: {
        height: 4,
        width: "calc(20%)",
        backgroundColor: theme.palette.common.white,
        position: "absolute",
        bottom: -2,
        left: "calc(40%)",
        transition: 'all 0.35s ease-out',
    }
}))

export const NavBox = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Link to='/sale' style={{textDecoration: 'none', color: 'white'}}>
                <ButtonBase
                    focusRipple
                    key={"On Sale"}
                    className={classes.text}
                >
                    <p
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {"On Sale"}
                        <span className={classes.imageMarked} />
                    </p>
                </ButtonBase>
            </Link>

            <Link to='/categories' style={{textDecoration: 'none', color: 'white'}}>
                <ButtonBase
                    focusRipple
                    key={"Categories"}
                    className={classes.text}
                >
                    <p
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {"Categories"}
                        <span className={classes.imageMarked} />
                    </p>
                </ButtonBase>
            </Link>
            
            <Link to='/products' style={{textDecoration: 'none', color: 'white'}}>
                <ButtonBase
                    focusRipple
                    key={"View All"}
                    className={classes.text}
                >
                    <p
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {"View All"}
                        <span className={classes.imageMarked} />
                    </p>
                </ButtonBase>
            </Link>

        </Container>
    )
}
export default NavBox;
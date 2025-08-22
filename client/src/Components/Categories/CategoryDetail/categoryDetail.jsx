import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { readCategoryID } from '../../../Redux/Category/categoryActions'
import { Container, Grid, Paper, Typography, ButtonBase } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 200,
        height: 200,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export const CategoryDetail = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const {id} = useParams();
    const {categoryDetail} = useSelector(state => state.categoryReducer);

    useEffect(()=>{
        async function fetchData() {
            await dispatch(readCategoryID(id))
        }
        fetchData();
    },[dispatch,id])
    return (
        
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item >
                        <ButtonBase className={classes.image} >
                            <img className={classes.img} src={categoryDetail?.image} alt={categoryDetail?.name} />
                        </ButtonBase>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" style={{maxWidth : '90%', margin : 'auto'}}> 
                    <h1>{categoryDetail?.name}</h1>
                    <Typography>{categoryDetail?.description}</Typography>
                </Grid>
            </Paper>
        </Container>
    )
}

export default CategoryDetail

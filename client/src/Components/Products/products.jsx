import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from '../../Redux/Products/productsActions'
import  './products.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import Filters from './Filters';


const Products = () => {

    const {FoundProds, Products} = useSelector(state => state.productReducer)
    const dispatch = useDispatch()
    const {search} = window.location

    const products = search.includes('?search') 
                    ? Products?.filter(product => product.name.toLowerCase().includes(search.substring(8).toLowerCase().split('-').join(' ')))
                    : FoundProds

    useEffect(() => {
        dispatch(getProducts());
    }, 
    // eslint-disable-next-line
    []);

    return (
      <div>
      <div className="filters">
        <Filters/>
      </div>
            <div className="content">
                {products.map(spirits => {
                    return (
                    <div>
                        <div className="containerproducts">
                                <div className="card">
                                  <div className="imgBx">
                                    <img src={spirits.image} alt="Licorimage"/>
                                  </div>
                                  <div className="contentBx">
                                    <h4>{spirits.name}</h4>
                                    <div className="size">
                                        {/* <p>{spirits.brand}</p>  */}
                                      <h5>{spirits.name}</h5>
                                    </div>
                                    <div className="color">
                                      <h5>${spirits.price}</h5>
                                    <a href="#">Add to cart</a>
                                    </div>
                                  </div>
                                </div>
                            </div>
                    </div>
                  
                    )
                })
                }
            </div>
            </div>

    )
}

export default Products

                                {/* // <Grid key={spirits.id} item md={3} sm={6} xs={12}>
                                //     <Card className={classes.root} >
                                //         <NavLink to={`/products/${spirits.id}`} className={classes.links}>
                                //             <CardActionArea>
                                //                 <CardMedia
                                //                     className={classes.media}
                                //                     image={spirits.image}
                                //                     title={spirits.name}
                                //                 />
                                //                 <CardContent>
                                //                     <Typography gutterBottom variant="h6" component="h6">
                                //                         {spirits.name}
                                //                     </Typography>
                                //                     <Typography variant="body2" color="textSecondary" component="p">
                                //                         {spirits.brand}
                                //                     </Typography>
                                //                     <Typography gutterBottom variant="h6" component="h6">
                                //                         ${spirits.price}
                                //                     </Typography>
                                //                 </CardContent>
                                //             </CardActionArea>
                                //         </NavLink>
                                //     </Card>

                                // </Grid> */}
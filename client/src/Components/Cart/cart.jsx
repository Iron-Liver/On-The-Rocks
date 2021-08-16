
import {IconButton,CardContent,CardMedia,Typography,Grid,ListItem, Button,  
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";
import { removeProductCart} from "../../Redux/Cart/cartActions";
import { getCartItems} from '../../Redux/Cart/cartActions'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateOrder from "../Orders/CreateOrder/createOrder";

const useStyles = makeStyles((theme) => ({
  
details: {
    textAlign:'start',
    width:'60%',
    variant: "outlined",
},
content: {
    width: '100%',
    marginTop:'5%',
    
},

cont1: {
    marginBottom: 15,
},

cover: {
    width: '120px',
    height: '170px',       
},
button:{
  width: '10px',
  height: '20px',
  marginLeft: "5px",
  marginRight: "5px"
},
text:{
  position: "absolute",
  marginTop: "-30%",
  marginLeft: "50%",
  display: 'column'
},

margin:{
  position: "absolute", 
  marginLeft: "70%",
},

title:{
  display: "flex",
  marginLeft: '15px',
  justifyContent: 'center',
}, 
sum:{
  display: "flex",
}
}));



export function Cart(){
const classes = useStyles();
let data = JSON.parse(localStorage.getItem('data')) 
var total = 0;
const [state, setState] = useState()
if(JSON.stringify(state) !== JSON.stringify(data))
    setState(data)

function removeProduct(id){
  let data = JSON.parse(localStorage.getItem('data'))
  data = data.filter(e => e.id !== id)
  localStorage.removeItem("data")
  localStorage.setItem("data",JSON.stringify(data))
  setState(data)
 }
 

state?.map( e =>(    
total = total+ e.price))


/* useEffect( () =>{
  let data = JSON.parse(localStorage.getItem('data'))
  if(JSON.stringify(state) !== JSON.stringify(data))
    setState(data)
},[state]
) 
 */

function sum(id){
  
   state?.map((e) => {
      if (e.id === id && e.units < 50){
       let sub = e.price/ e.units;
       e.units++;
       sub = sub * e.units;
       (e.price = sub.toFixed(2))}
    })
   
   localStorage.removeItem("data")
   localStorage.setItem("data",JSON.stringify(state))
   let data = JSON.parse(localStorage.getItem('data'))
   setState(data)
  
   state?.map( e =>(    
    total = parseInt(total) + parseInt(e.price)))
  
}

function res(id){

  state?.map( (e) => { 
    if (e.id === id  && e.units > 1){
    let sub = e.price / e.units;
    e.units--;
    sub = sub * e.units;
    e.price = sub.toFixed(2)}
    total =+ e.price
  })
 localStorage.removeItem("data")
 localStorage.setItem("data",JSON.stringify(state))
 let data = JSON.parse(localStorage.getItem('data'))
 setState(data)

 state?.map( e =>(    
  total = total+ e.price))
}



return(
<CardContent className={classes.content}>
            { state?.map( e =>(   
              <ListItem button>
              <div className={classes.details} >
                    <Grid item className={classes.cont1}>
                        <IconButton 
                        aria-label="delete" 
                        className={classes.margin}
                        onClick={() => removeProduct(e.id)}
                        >
                          <DeleteIcon fontSize="medium" />
                        </IconButton>  
                        <CardMedia
                        className={classes.cover}
                        image={e.image}/> 
                        <div className={classes.text}>
                            <Typography  >
                             {e.name}
                            </Typography>
                            <div className={classes.sum}>
                            <Button className={classes.button} onClick = {() => res(e.id)}>-</Button>
                            <Grid>{e.units}
                            </Grid>
                            <Button className={classes.button} onClick = {() => sum(e.id)}>+</Button>
                            </div>
                            <Typography component="h7" variant="h7">
                             SubTotal: ${e.price} 
                           </Typography>
                        </div>  
                    </Grid> 
               </div>
             </ListItem>))}
             <Typography component="h5" variant="h5">
                            Total: ${total}
             </Typography>
             <CreateOrder />
      
      </CardContent>)

}
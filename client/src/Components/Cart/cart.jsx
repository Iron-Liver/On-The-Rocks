
import {IconButton,CardContent,CardMedia,Typography,Grid,ListItem,  
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";
import { removeProductCart} from "../../Redux/Cart/cartActions";

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
    width: '100px',
    height: '100px',
      
},

margin:{
  position: "absolute", 
  marginLeft: "70%"
},

title:{
  display: "flex",
  marginLeft: '15px',
  justifyContent: 'center',
}
}));



export function Cart(){

const classes = useStyles();
let data =  JSON.parse(localStorage.getItem('data'))
var total = 0;
data?.map( e =>(    
total = total + e.price))
console.log("total", total)

return(
<CardContent className={classes.content}>
            { data?.map( e =>(   
              <ListItem button>
              <div className={classes.details}>
                    <Grid item className={classes.cont1}>
                        <IconButton 
                        aria-label="delete" 
                        className={classes.margin}
                        onClick={() => removeProductCart(e.id)}
                        >
                             <DeleteIcon fontSize="medium" />
                        </IconButton>  
                        <CardMedia
                        className={classes.cover}
                        image={e.image}/> 
                      
                        <Typography  variant="h5">
                          {e.name}
                        </Typography>
                        <Typography component="h6" variant="h6">
                           Quantity: {e.units}
                        </Typography>
                        <Typography component="h6" variant="h6">
                           SubTotal: ${e.price} 
                        </Typography>
                    </Grid> 
               </div>
             </ListItem>))}
             <Typography component="h5" variant="h5">
                            Total: ${total}
             </Typography>
           </CardContent>)

}
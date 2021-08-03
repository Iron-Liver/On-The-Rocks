import {useState} from 'react'
import {makeStyles, Grid, Button, TextField} from '@material-ui/core'
import { Label, Description, Image, Crop, Dns, FormatListNumbered, MonetizationOn } from '@material-ui/icons';
import { ThemeProvider } from '@material-ui/core/styles';
import Validate from '../../Utils/validate'
import theme from '../../Utils/theme'

const useStyles = makeStyles((theme)=>({
    root: {
		marginTop: 50,
		marginBottom: 30,
		border:5,
		display:'flex'
	},
	title: {
		display:'flex',
		justifyContent: 'center'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		width:500,
	},
	last: {
		padding: 8,
	}
}));

const CreateProductForm = ({ input, setInput, handleSubmit, match }) => {
	
	const classes = useStyles();

	const [error, setError] = useState({//Control the error red border of the inputs
		name: false,
        description: false,
        size: false,
        brand: false,
        sku: false,
        price: false,
        image: false
    })
	const [helperText, setHelperText] = useState({//Control the warning message
		name: "Enter a Name",
		description: "Enter a description",
		size: "Enter a size",
		brand: "Enter a brand",
		sku: "Enter a sku",
		price: "Enter price",
        image: "Enter an image-url"
    })
	
	const handleInputChange = async (e) => {
		await setInput({
			...input,
			[e.target.name]: e.target.value, 
		});
		Validate(e.target, error, setError, helperText, setHelperText)
	};

    return (
		<ThemeProvider theme={theme}>
        <div className= 'extContCAF'>
			<form noValidate autoComplete="off" >
			<h1 className={classes.title}>Create Product</h1>
			<Grid container direction="row" justifyContent="space-around" alignItems="center" className={`componentDataBox ${classes.root}`} spacing={1}>
                <Grid >
                    <Grid container spacing={1} alignItems="center">
                        <Grid item >
                            <Label />
                        </Grid>
                        <Grid item >
                            <TextField 
								error={error["name"]}
								helperText={[helperText["name"]]}
								id="name" 
								label="Name" 
								name="name"
								value={input.name}
								onChange={handleInputChange} 
							/>
                        </Grid>
                    </Grid>

					<Grid container spacing={1} alignItems="center">
                        <Grid item >
                            <Description />
                        </Grid>
                        <Grid item >
                            <TextField 
								error={error["description"]}
								helperText={[helperText["description"]]}
								id="description" 
								label="Description" 
								name="description"
								multiline
								rows={4}
								value={input.description}
								onChange={handleInputChange} 
							/>
                        </Grid>
                    </Grid>
					
					<Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Crop />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["size"]}
								helperText={[helperText["size"]]}  
								id="size" 
								label="Size" 
								name='size'
								value={input.size}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>

					<Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Dns />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["brand"]}
								helperText={[helperText["brand"]]}  
								id="brand" 
								label="Brand" 
								name='brand'
								value={input.brand}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>

					<Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <FormatListNumbered/>
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["sku"]}
								helperText={[helperText["sku"]]}  
								id="sku" 
								label="Sku" 
								name='sku'
								value={input.sku}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>

					<Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <MonetizationOn/>
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["price"]}
								helperText={[helperText["price"]]}  
								id="price" 
								label="Price" 
								name='price'
								value={input.price}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>

					<Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Image />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["image"]}
								helperText={[helperText["image"]]}  
								id="image" 
								label="Image-URL" 
								name='image'
								value={input.image}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item>
                        <Button style={{fontWeight: 1000, marginTop: 50}} color="secondary" onClick={handleSubmit} variant="contained">Add Category</Button>
                    </Grid>
                </Grid>
			</Grid>
        </form>
		</div>
		</ThemeProvider>
    )
}
export default CreateProductForm;
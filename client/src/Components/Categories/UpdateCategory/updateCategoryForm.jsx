import {useState} from 'react'
import { Grid, Button, TextField } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Label, Description, Image } from '@mui/icons-material';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import Validate from '../../../Utils/validate'
import theme from '../../../Utils/theme'

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

const UpdateCategoryForm = ({ input, setInput, handleSubmit, handleDelete }) => {
	
	const classes = useStyles();

	const [error, setError] = useState({
		name: false,
        description: false,
        image: false
    })
	const [helperText, setHelperText] = useState({
		name: "Enter a Name",
		description: "Enter a description",
        image: "Enter an image-url"
    })
	
	const handleInputChange = async (e) => {
		await setInput({
			...input,
			[e.target.name]: e.target.value, 
		});
		Validate(e.target,error,setError,helperText,setHelperText)
	};

    return (
        <StyledEngineProvider injectFirst>
            (<ThemeProvider theme={theme}>
                <div className= 'extContCAF'>
                    <form noValidate autoComplete="off" >
                    <h1 className={classes.title}>Update Category</h1>
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
                                <Button style={{fontWeight: 1000, marginTop: 50}} color="secondary" onClick={handleSubmit} variant="contained">Update Category</Button>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item>
                                <Button style={{fontWeight: 1000, marginTop: 30}} color="primary" onClick={handleDelete} variant="contained">Delete Category</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
                </div>
            </ThemeProvider>)
        </StyledEngineProvider>
    );
}
export default UpdateCategoryForm;

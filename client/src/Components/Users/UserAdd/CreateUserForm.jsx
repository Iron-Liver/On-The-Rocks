import {useState} from 'react'
import {makeStyles, Grid, Button, TextField} from '@material-ui/core'
import { Fingerprint, Person, Email, VpnKey, Phone } from '@material-ui/icons';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../../Utils/theme';
import Validate from '../../../Utils/validate'

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

const CreateUserForm = ({ input, setInput, handleSubmit}) => {
	
	const classes = useStyles();

	const [error, setError] = useState({//Control the error red border of the inputs
		name: false,
		username: false,
        email: false,
		password: false,
		contact: false,
        isDeleted:false
    })
	const [helperText, setHelperText] = useState({//Control the warning message
		name: "Insert Name",
		username: "Insert Username",
        email: "Isert Email",
        password: "Insert Password",
		contact: "Insert contact phone number",
        isDeleted:"Insert if is deleted"
    })
	
	const handleInputChange = function (e) {
		setInput({
			...input,
			[e.target.name]: e.target.value, 
		});
		Validate(e.target,error,setError,helperText,setHelperText)
	};

    return (
		<ThemeProvider theme={theme}>
        <div className= 'extContCAF'>
			<form noValidate autoComplete="off" >
			<h1 className={classes.title}>{window.location.href.includes("register") ? "Sign up" : "Create User"}</h1>
			<Grid container direction="row" justifyContent="space-around" alignItems="center" className={`componentDataBox ${classes.root}`} spacing={1}>
                <Grid >
                    <Grid container spacing={1} alignItems="center">
                        <Grid item >
                            <Fingerprint />
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
                            <Person />
                        </Grid>
                        <Grid item >
                            <TextField 
								error={error["username"]}
								helperText={[helperText["username"]]}
								id="username" 
								label="Username" 
								name="username"
								value={input.username}
								onChange={handleInputChange} 
							/>
                        </Grid>
                    </Grid>
					
					<Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Email />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["email"]}
								helperText={[helperText["email"]]}  
								id="email" 
								label="Email" 
								name='email'
								value={input.email}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
							<VpnKey />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["password"]}
								helperText={[helperText["password"]]}  
								id="password" 
								label="Password" 
								name='password'
								type="password"
								value={input.password}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
							<Phone />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["contact"]}
								helperText={[helperText["contact"]]}
								id="contact"
								name="contact"
								label="Contact Number" 
								value={input.contact}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item>
                        <Button style={{fontWeight: 1000, marginTop: 50}} color="primary" onClick={handleSubmit} variant="contained">SUBMIT</Button>
                    </Grid>
                </Grid>
			</Grid>
        </form>
		</div>
		</ThemeProvider>
    )
}
export default CreateUserForm;

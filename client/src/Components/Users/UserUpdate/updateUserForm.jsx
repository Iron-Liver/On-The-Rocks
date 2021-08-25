import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { Button, TextField, makeStyles,Grid, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import { Person, Email, VpnKey, Phone } from '@material-ui/icons';
import { readUser } from '../../../Redux/Users/userActions';
import Validate from '../../../Utils/validate'
import jwt from "jsonwebtoken"

const useStyles = makeStyles((theme)=>({
    root: {
        width: '100%',
        padding: '30px 30px', 
        minHeight: '70vh'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		width:500,
        justifyContent: 'center',
	},
	title:{
        display: 'flex',
        justifyContent: 'center',
		fontSize: 30,
	},
	last: {
		padding: 30,
	}
}));

export function UserUpdate({ input, setInput, handleSubmit }) {
    var {userId} = useParams();
    const {userDetail} = useSelector(state => state.userReducer);
	const adminAllowed = JSON.parse(localStorage.getItem('token')) ? 
    jwt.verify(JSON.parse(localStorage.getItem('token')), 
    process.env.REACT_APP_SECRET_KEY) : null

    if(typeof(userId) === 'undefined' && window.location.href.includes("profile")){
        userId = (JSON.parse(localStorage.getItem('token'))).id;
    }
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if(userDetail !== undefined){
            setInput({
                id: userId,
				isAdmin: userDetail.isAdmin,
				isReseller: userDetail.isReseller,
				isDeleted : userDetail.isDeleted,
				username: userDetail.username,
                email : userDetail.email,
                password : "",
                contact : userDetail.contact,
            })
        }else{
            dispatch(readUser(userId))
		}	
    },
    // eslint-disable-next-line
    [dispatch, userId, userDetail])

	useEffect(() => {
		dispatch(readUser(userId))
	},
    // eslint-disable-next-line
    [])

    const [error, setError] = useState({//Control the error red border of the inputs
		username: false,
        email: false,
		password: false,
		contact: false,
        isDeleted:false
    })
	const [helperText, setHelperText] = useState({//Control the warning message
		username: "Insert Username",
        email: "Insert Email",
        password: "Insert Password",
		contact: "Insert contact phone number",
        isDeleted:"Ingrese un is deleted"
    })
    

	const handleInputChange = async function (e) {
		await setInput({
			...input,
			[e.target.name]: e.target.value, 
		});
		Validate(e.target,error,setError,helperText,setHelperText)
	};

    const handleRadio = function (e) {
        switch (e.target.name){
            case "isAdmin":
                setInput({
                    ...input,
                    isAdmin: e.target.value === "YES" ? true : false
                })
                break;
            case "isDeleted":
                setInput({
                    ...input,
                    isDeleted: e.target.value === "BANNED" ? true : false
                })
                break;
            default:
                break;
        }
    }
    const renderPassword = () => {
        return (
            <>
                <Grid container spacing={1} alignItems="center" justifyContent="center">
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
                            value={input.password || ''}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
            </>
        )
    }

    const renderAdminOptions = () => {
        return (
            <>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <RadioGroup name="isAdmin" value={input.isAdmin ? "YES" : "NO"} onChange={handleRadio} >
                        <FormControlLabel value={"YES"} control={<Radio/>} label="ADMINISTRATOR"/>
                        <FormControlLabel value={"NO"} control={<Radio/>} label="CLIENT"/>
                    </RadioGroup>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <RadioGroup name="isDeleted" value={input.isDeleted ? "BANNED" : "ALLOWED"} onChange={handleRadio} >
                        <FormControlLabel value={"ALLOWED"} control={<Radio/>} label="ALLOWED"/>
                        <FormControlLabel value={"BANNED"} control={<Radio/>} label="BANNED"/>
                    </RadioGroup>
                </Grid>
            </>
        )
    }

    return(
            <div className={classes.root}>
                
                <form noValidate autoComplete="off" >
                <h1 className={classes.title}>
                    {(adminAllowed && !window.location.href.includes("profile"))
                    ? "Update User"
                    : "My Profile"}
                    </h1>
                <Grid container direction="row" justifyContent="space-around" alignItems="center" className={`componentDataBox ${classes.root}`} spacing={1}>
                    <Grid item xs={6}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid>
                                <Person />
                            </Grid>
                            <Grid item>
                                <TextField 
                                    error={error["username"]}
                                    helperText={[helperText["username"]]}
                                    id="username" 
                                    label="Username" 
                                    name="username"
                                    value={input.username ? input.username : ''}
                                    onChange={handleInputChange} 
                                />
                            </Grid>
                        </Grid>
                        
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
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
                                    value={input.email || ''}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>

                        {adminAllowed && renderPassword()}

                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid item>
                                <Phone />
                            </Grid>
                            <Grid item>
                                <TextField
                                    error={error["contact"]}
                                    helperText={[helperText["contact"]]}
                                    id="contact"
                                    name="Contact"
                                    label="Telephone Number" 
                                    value={input.contact || ''}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        {(adminAllowed && !window.location.href.includes("profile")) && renderAdminOptions()}
                    </Grid>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item>
                            <Button style={{fontWeight: 1000, marginTop: 30}} color="primary" onClick={handleSubmit} variant="contained">Save Changes</Button>
                        </Grid>
                    </Grid>
                    {/* <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item>
                            {(adminAllowed && window.location.href.includes("profile")) && (<Button style={{fontWeight: 1000, marginTop: 30}} href='private/panel' color="primary" onClick={handleSubmit} variant="contained">Admin Panel</Button>)}
                        </Grid>
                    </Grid> */}
                </Grid>
                </form>
            </div>
    )
}
export default UserUpdate;
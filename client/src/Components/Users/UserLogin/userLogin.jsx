import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import {Grid, Button, TextField} from '@material-ui/core'
import { Email, VpnKey } from '@material-ui/icons';
import {loginUser,fetchAuthUser, sendEmail} from '../../../Redux/Users/userActions'
import useFormStyles from '../../../Utils/formStyles'
import GoogleButton from "react-google-button";
import jwt from 'jsonwebtoken'
import swal from 'sweetalert'

export default function UserLogin() {
    const classes = useFormStyles()
    const dispatch = useDispatch();
    const history = useHistory();

    const currentUser = JSON.parse(localStorage.getItem('token')) ? 
    jwt.verify(JSON.parse(localStorage.getItem('token')), 
    process.env.REACT_APP_SECRET_KEY) : null

    console.log(currentUser)
    const [input,setInput] = useState({
        email: '',
        password: ''
    })

    if(currentUser) {
        console.log(currentUser.Authenticated)
        if(currentUser.isAdmin){
            if(typeof(currentUser?.Authenticated) === 'undefined'){
                dispatch(sendEmail(currentUser.email,"verifyadmin"))
                history.push(`/`)
                swal("Hemos enviado un link a tu correo para que verifiques tu identidad", "Disculpa las molestias", "success")
            }
            else{
                history.push(`private/profile/${currentUser.id}`)
            }
        }else{
            history.push(`/profile/${currentUser.id}`)
        } 
        
        
        
   }

    const GoogleSSOHandler = async () => {
        let timer = null;
        const newWindow = window.open(
            `http://localhost:3001/auth/login/google`,
            "_blank",
            "width=500,height=600"
        );
        if (newWindow) {
            timer = setInterval(async() => {
                if (newWindow.closed) {
                    await dispatch(fetchAuthUser());
                    window.location.reload()
                    if (timer) clearInterval(timer);
                }
            }, 500);
        }
    };

    const handleInputChange = async (e) => {
		await setInput({
			...input,
			[e.target.name]: e.target.value, 
		});
	};

  const handleLogIn = async (e) => {
		await dispatch(loginUser(input))
        window.location.reload()

	};

    return (
        <div>
            <h1 className={classes.title}>Login</h1>
            <form noValidate autoComplete="off" > 
            <Grid container direction="row" justifyContent="space-around" alignItems="center" className={`componentDataBox ${classes.root}`} spacing={1}>
                <Grid>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Email />
                        </Grid>
                        <Grid item>
                            <TextField
                                helperText='Insert email'  
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
                                helperText='Insert password'
                                id="password" 
                                label="Password" 
                                name='password'
                                type="password"
                                value={input.password}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                            <Button style={{fontWeight: 1000, marginTop: 30}} color="primary" onClick={handleLogIn} variant="contained">Login</Button>
                            <Link to="/verify/password">
                                <Button style={{fontWeight: 1000, marginTop: 20}} color="primary" variant="contained">Recover password</Button>                  
                            </Link>
                            <GoogleButton
                                style={{fontWeight: 1000, marginTop: 20}}
                                type="light"
                                label="Autorizar con Google"
                                onClick={GoogleSSOHandler}
                            />
                    </Grid>
                </Grid>
            </Grid>
            </form>
        </div>
    )
}

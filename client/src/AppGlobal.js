import { ThemeProvider } from '@material-ui/core'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import AppPrivate from './Components/App/appPrivate';
import AppPublic from './Components/App/appPublic';
import theme from './Utils/theme'

const AppGlobal = () => {
	const currentUser = (JSON.parse(localStorage.getItem('profile')));
	const adminAllowed = (JSON.parse(localStorage.getItem('2FA')))
	
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch> 			
					<Route 
						path="/private"
						component={ () => (
							( (currentUser?.isAdmin && adminAllowed) )
							? ( <AppPrivate /> )
							: ( <Redirect to="/login" /> )
						)}
					/>
					
					<Route path="/" component={ () => <AppPublic />}/>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default AppGlobal;

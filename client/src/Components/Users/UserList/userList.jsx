import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { makeStyles,  Button,  Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import theme from '../../../Utils/theme';
import {Link} from 'react-router-dom';
import { getAllUsers } from '../../../Redux/Users/UserActions'

const UserList = () => {
	const useStyles = makeStyles((theme)=>({
		root: {
			width:'100%',
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
			
		},
		last: {
			padding: 8,
		}
	}));

	const {users} = useSelector(state => state.userReducer)
	const classes = useStyles();
	const dispatch = useDispatch();
    console.log(users)
	useEffect(() => {
        dispatch(getAllUsers())
        console.log(users)
	},
	// eslint-disable-next-line
	[])

    const columns = [
        {field: 'id', headerName: '#', width: 90 },
		{field: 'name', headerName: 'Name', width: 160},
		{field: 'email', headerName: 'Email', width: 250},
		{field: 'contact', headerName: 'Phone', width: 150 },
		{
			field: 'isDeleted', headerName: 'Status', width: 130, renderCell: params => {
				return (
					<ThemeProvider theme={theme}>
					{params.row.isDeleted ? 'Deleted' : 'Allowed'}
					</ThemeProvider>
		)} },
		{
			field: 'Edit',
			headerName: 'EDIT',
			sortable: false,
			width: 120,
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<ThemeProvider theme={theme}>
					<Link to={`/private/user/update/${params.id}`} style={{textDecoration:'none'}}>
						<Button style={{fontWeight: 1000}} variant="contained" color="secondary">EDIT</Button>
					</Link>
					</ThemeProvider>
				);
			},
		}
	];

    return(
        <div className={classes.root}>  
            <ThemeProvider theme={theme}>

					<Container style={{display: 'flex',height:50 , marginBottom:'20px',justifyContent: 'space-around', alignItems: 'center'}}>
						<h1 >
							Users:
						</h1>
						<Link to="/private/user/add" style={{textDecoration:'none'}}>
							<Button variant="contained" color="secondary" >
								Add New User
							</Button>
						</Link>
					</Container>

				<Container style={{height: 460, width: '100%'}}>
					<Container style={{display: 'flex', height: '100%'}}>
						<DataGrid rows={users} columns={columns} />
					</Container>
				</Container>

			</ThemeProvider>
        </div>
    )

}
export default UserList;
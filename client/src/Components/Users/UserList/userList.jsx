import './user.css';
import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@mui/styles'
import { Button, Container } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom';
import { getAllUsers } from '../../../Redux/Users/userActions'

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
	
	useEffect(() => {
        dispatch(getAllUsers())
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
					<>
					{params.row.isDeleted ? 'Deleted' : 'Allowed'}
					</>
				)} },
		{
			field: 'Edit',
			headerName: 'EDIT',
			sortable: false,
			width: 120,
			renderCell: params => {
				return (
					<Link to={`/private/user/update/${params.id}`} style={{textDecoration:'none'}}>
						<Button style={{fontWeight: 1000}} variant="contained" color="secondary">EDIT</Button>
					</Link>
				);
			},
		}
	];

    return(
      <div className="admin-users-tab-container">
        <div className={classes.root}>  

					<Container style={{display: 'flex',height:50 , marginBottom:'20px',justifyContent: 'space-around', alignItems: 'center'}}>
						<h1>
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
							<DataGrid rows={users} columns={columns} disableSelectionOnClick />
						</Container>
					</Container>

        </div>
      </div>
    )

}
export default UserList;
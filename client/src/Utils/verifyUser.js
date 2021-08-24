import {useDispatch} from 'react-redux'
import jwt from "jsonwebtoken";
import {logOutUser} from '../Redux/Users/userActions'
export default function Verify () {
    const dispatch = useDispatch()
    try{
        return JSON.parse(localStorage.getItem("token"))
        ? jwt.verify(
              JSON.parse(localStorage.getItem("token")),
              process.env.REACT_APP_SECRET_KEY
          )
        : null;
    }catch(e){
        console.log(e.message);
        dispatch(logOutUser())
        window.location.replace(`${window.location.origin}/login`);
        alert("please login")
    }
}
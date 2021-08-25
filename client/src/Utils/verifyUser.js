import jwt from "jsonwebtoken";

export default function Verify () {
    try{
        return JSON.parse(localStorage.getItem("token"))
        ? jwt.verify(
              JSON.parse(localStorage.getItem("token")),
              process.env.REACT_APP_SECRET_KEY
          )
        : null;
    }catch(e){
        console.log(e.message);
        return {logout:true};
    }
}
import jwt from "jsonwebtoken";

export default function Verify () {
    try{
        var admin = JSON.parse(localStorage.getItem("token"))
        ? jwt.verify(
              JSON.parse(localStorage.getItem("token")),
              process.env.REACT_APP_SECRET_KEY
          )
        : null;
        return admin.isAdmin
    }catch(e){
        console.log(e.message);
        return false;
    }
}
import decode from "jwt-decode";

export default function Verify () {
    try{
        const raw = localStorage.getItem("token");
        const user = raw ? decode(JSON.parse(raw)) : null;
        return user?.isAdmin
    }catch(e){
        console.log(e.message);
        return false;
    }
}
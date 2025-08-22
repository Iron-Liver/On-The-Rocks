import decode from "jwt-decode";

export default function Verify () {
    try{
        const raw = localStorage.getItem("token");
        return raw ? decode(JSON.parse(raw)) : null;
    }catch(e){
        console.log(e.message);
        return {logout:true};
    }
}
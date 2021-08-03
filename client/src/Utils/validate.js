export default function Validate(field,error,setError,helperText,setHelperText) {
    switch (field.name){
        case "name":
            if(!/^[A-Za-z .'-]{3,20}$/.test(field.value)) {
                setError({...error, name: true})
                if(field.value.length < 3) {setHelperText({...helperText, name: "too short"})}
                else if (field.value.length > 20) {setHelperText({...helperText, name: "too long"})}
                else{setHelperText({...helperText, name: "special characters are not allowed"})}
            }else{
                setError({...error, name: false})
                setHelperText({...helperText, name: ""})
            }
            break;
        case "username":
            if(!/^[A-Za-z0-9]{3,20}$/.test(field.value)) {
                setError({...error, username: true})
                if(field.value.length < 3) {setHelperText({...helperText, username: "too short"})}
                else if (field.value.length > 20) {setHelperText({...helperText, username: "too long"})}
                else{setHelperText({...helperText, username: "only letters and numbers"})}
            }else{
                setError({...error, username: false})
                setHelperText({...helperText, username: ""})
            }
            break;
        case "email":
            if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(field.value)) {
                setError({...error, email: true})
                if(field.value.length < 3) {setHelperText({...helperText, email: "too short"})}
                else if(field.value.length > 20) {setHelperText({...helperText, email: "too long"})}
                else{setHelperText({...helperText, email: "contains characters that are not allowed"})}
            }
            else{
                setError({...error, email: false})
                setHelperText({...helperText, email: ""})
            }
            break;
        case "password":
            if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,60}$/.test(field.value)) {
                setError({...error, password: true})
                if(field.value.length < 8) {setHelperText({...helperText, password: "too short"})}
                else if(field.value.length > 60) {setHelperText({...helperText, password: "too long"})}
                else{setHelperText({...helperText, password: "needs numbers, lowercase and uppercase"})}
            }
            else{
                setError({...error, password: false})
                setHelperText({...helperText, password: ""})
            }
            break;
        case "contact":
            if(!/^[+0-9-]{8,20}$/.test(field.value)) {
                setError({...error, contact: true})
                if(field.value.length < 8) {setHelperText({...helperText, contact: "too short"})}
                else if(field.value.length > 20) {setHelperText({...helperText, contact: "too long"})}
                else{setHelperText({...helperText, contact: "only numbers are allowed"})}
            }
            else{
                setError({...error, contact: false})
                setHelperText({...helperText, contact: ""})
            }
            break;
        case "description":
            if(!/^[A-Za-z ().,'-]{28,280}$/.test(field.value)) {
                setError({...error, description: true})
                if(field.value.length < 28) {setHelperText({...helperText, description: "too short"})}
                else if (field.value.length > 280) {setHelperText({...helperText, description: "too long"})}
                else{setHelperText({...helperText, description: "special characters are not allowed"})}
            }else{
                setError({...error, description: false})
                setHelperText({...helperText, description: ""})
            }
            break;
        case "image":
            if(!/[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/.test(field.value)) {
                setError({...error, image: true})
                if(field.value.length < 2) {setHelperText({...helperText, image: "too short"})}
                else if (field.value.length > 280) {setHelperText({...helperText, image: "too long"})}
                else{setHelperText({...helperText, image: "not an url"})}
            }else{
                setError({...error, image: false})
                setHelperText({...helperText, image: ""})
            }
            break;
        default:
            break;
    }
}
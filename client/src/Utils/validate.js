export default function Validate(field,error,setError,helperText,setHelperText) {
    switch (field.name){
        case "name":
            if(!/^[A-Za-z .'-]{3,20}$/.test(field.value)) {
                setError({...error, name: true})
                if(field.value.length < 3) {setHelperText({...helperText, name: "Is too short"})}
                else if (field.value.length > 20) {setHelperText({...helperText, name: "Is too long"})}
                else{setHelperText({...helperText, name: "Special characters are not allowed"})}
            }else{
                setError({...error, name: false})
                setHelperText({...helperText, name: ""})
            }
            break;
        case "username":
            if(!/^[A-Za-z0-9]{3,20}$/.test(field.value)) {
                setError({...error, username: true})
                if(field.value.length < 3) {setHelperText({...helperText, username: "Is too short"})}
                else if (field.value.length > 20) {setHelperText({...helperText, username: "Is too long"})}
                else{setHelperText({...helperText, username: "Only numbers and letters"})}
            }else{
                setError({...error, username: false})
                setHelperText({...helperText, username: ""})
            }
            break;
        case "email":
            if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(field.value)) {
                setError({...error, email: true})
                if(field.value.length < 3) {setHelperText({...helperText, email: "Is too short"})}
                else if(field.value.length > 20) {setHelperText({...helperText, email: "Is too long"})}
                else{setHelperText({...helperText, email: "Contains unaccepted characters"})}
            }
            else{
                setError({...error, email: false})
                setHelperText({...helperText, email: ""})
            }
            break;
        case "password":
            if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,60}$/.test(field.value)) {
                setError({...error, password: true})
                if(field.value.length < 8) {setHelperText({...helperText, password: "Is too short"})}
                else if(field.value.length > 60) {setHelperText({...helperText, password: "Is too long"})}
                else{setHelperText({...helperText, password: "You need a number and a capital letter"})}
            }
            else{
                setError({...error, password: false})
                setHelperText({...helperText, password: ""})
            }
            break;
        case "contact":
            if(!/^[+0-9-]{8,20}$/.test(field.value)) {
                setError({...error, contact: true})
                if(field.value.length < 8) {setHelperText({...helperText, contact: "Is too short"})}
                else if(field.value.length > 20) {setHelperText({...helperText, contact: "Is too long"})}
                else{setHelperText({...helperText, contact: "Only numbers are allowed"})}
            }
            else{
                setError({...error, contact: false})
                setHelperText({...helperText, contact: ""})
            }
            break;
        default:
            break;
    }
}
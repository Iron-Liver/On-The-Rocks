export default function Validate(field, error, setError, helperText, setHelperText) {
    switch (field.name) {
        case "name":
            if (!/^[A-Za-z .'-]{3,20}$/.test(field.value)) {
                setError({ ...error, name: true })
                if (field.value.length < 3) { setHelperText({ ...helperText, name: "Is too short" }) }
                else if (field.value.length > 20) { setHelperText({ ...helperText, name: "Is too long" }) }
                else { setHelperText({ ...helperText, name: "Special characters are not allowed" }) }
            } else {
                setError({ ...error, name: false })
                setHelperText({ ...helperText, name: "" })
            }
            break;
        case "username":
            if (!/^[A-Za-z0-9]{3,20}$/.test(field.value)) {
                setError({ ...error, username: true })
                if (field.value.length < 3) { setHelperText({ ...helperText, username: "Is too short" }) }
                else if (field.value.length > 20) { setHelperText({ ...helperText, username: "Is too long" }) }
                else { setHelperText({ ...helperText, username: "Only numbers and letters" }) }
            } else {
                setError({ ...error, username: false })
                setHelperText({ ...helperText, username: "" })
            }
            break;
        case "email":
            if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(field.value)) {
                setError({ ...error, email: true })
                if (field.value.length < 3) { setHelperText({ ...helperText, email: "Is too short" }) }
                else if (field.value.length > 20) { setHelperText({ ...helperText, email: "Is too long" }) }
                else { setHelperText({ ...helperText, email: "Contains unaccepted characters" }) }
            }
            else {
                setError({ ...error, email: false })
                setHelperText({ ...helperText, email: "" })
            }
            break;
        case "password":
            if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,60}$/.test(field.value)) {
                setError({ ...error, password: true })
                if (field.value.length < 8) { setHelperText({ ...helperText, password: "Is too short" }) }
                else if (field.value.length > 60) { setHelperText({ ...helperText, password: "Is too long" }) }
                else { setHelperText({ ...helperText, password: "You need a number and a capital letter and a lowercase one" }) }
            }
            else {
                setError({ ...error, password: false })
                setHelperText({ ...helperText, password: "" })
            }
            break;
        case "contact":
            if (!/^[+0-9-]{8,20}$/.test(field.value)) {
                setError({ ...error, contact: true })
                if (field.value.length < 8) { setHelperText({ ...helperText, contact: "Is too short" }) }
                else if (field.value.length > 20) { setHelperText({ ...helperText, contact: "Is too long" }) }
                else { setHelperText({ ...helperText, contact: "Only numbers are allowed" }) }
            }
            else {
                setError({ ...error, contact: false })
                setHelperText({ ...helperText, contact: "" })
            }
            break;
        case "description":
            if (!/^[A-Za-z ().,'!¡¿?+-]{28,280}$/.test(field.value)) {
                setError({ ...error, description: true })
                if (field.value.length < 28) { setHelperText({ ...helperText, description: "Too short" }) }
                else if (field.value.length > 280) { setHelperText({ ...helperText, description: "Too long" }) }
                else { setHelperText({ ...helperText, description: "Special characters are not allowed" }) }
            } else {
                setError({ ...error, description: false })
                setHelperText({ ...helperText, description: "" })
            }
            break;
        case "productName":
            if (!/^[A-Za-z0-9 .',-]{4,20}$/.test(field.value)) {
                setError({ ...error, productName: true })
                if (field.value.length < 4) { setHelperText({ ...helperText, productName: "Too short" }) }
                else if (field.value.length > 20) { setHelperText({ ...helperText, productName: "Too long" }) }
                else { setHelperText({ ...helperText, productName: "Special characters are not allowed" }) }
            } else {
                setError({ ...error, productName: false })
                setHelperText({ ...helperText, productName: "" })
            }
            break;
        case "brand":
            if (!/^[A-Za-z0-9 .',-]{3,20}$/.test(field.value)) {
                setError({ ...error, brand: true })
                if (field.value.length < 3) { setHelperText({ ...helperText, brand: "Too short" }) }
                else if (field.value.length > 20) { setHelperText({ ...helperText, brand: "Too long" }) }
                else { setHelperText({ ...helperText, brand: "Special characters are not allowed" }) }
            } else {
                setError({ ...error, brand: false })
                setHelperText({ ...helperText, brand: "" })
            }
            break;

        case "sku":
            if (!/^[a-z0-9]{2,4}$/.test(field.value)) {
                setError({ ...error, sku: true })
                if (field.value.length < 2) { setHelperText({ ...helperText, sku: "Too short" }) }
                else if (field.value.length > 4) { setHelperText({ ...helperText, sku: "Too long" }) }
                else { setHelperText({ ...helperText, sku: "Special characters are not allowed" }) }
            } else {
                setError({ ...error, sku: false })
                setHelperText({ ...helperText, sku: "" })
            }
            break;
        case "price":
            if (!/^[0-9 .,]{2,7}$/.test(field.value)) {
                setError({ ...error, price: true })
                if (field.value.length < 2) { setHelperText({ ...helperText, price: "Too short" }) }
                else if (field.value.length > 7) { setHelperText({ ...helperText, price: "Too long" }) }
                else { setHelperText({ ...helperText, price: "Special characters are not allowed" }) }
            } else {
                setError({ ...error, price: false })
                setHelperText({ ...helperText, price: "" })
            }
            break;
        case "image":
            if (!/[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/.test(field.value)) {
                setError({ ...error, image: true })
                if (field.value.length < 2) { setHelperText({ ...helperText, image: "Too short" }) }
                else if (field.value.length > 280) { setHelperText({ ...helperText, image: "Too long" }) }
                else { setHelperText({ ...helperText, image: "Not an url" }) }
            } else {
                setError({ ...error, image: false })
                setHelperText({ ...helperText, image: "" })
            }
            break;
        default:
            break;
    }
}
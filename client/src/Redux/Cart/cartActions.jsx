
export function addProductCart({id,units,price,image,name}){
    let data = []
    let date = JSON.parse(localStorage.getItem('data'))

    if (date){ 
     date.push({id,units,price,image,name})
     localStorage.setItem("data",JSON.stringify(date))
    }
    else{
     data.push({id,units,price,image,name})
     localStorage.setItem("data",JSON.stringify(data))
    }
}

export function removeProductCart(id){
 let data = JSON.parse(localStorage.getItem('data'))
 data = data.filter(e => e.id !== id)
 localStorage.removeItem("data")
 localStorage.setItem("data",JSON.stringify(data))

 console.log(data)
}
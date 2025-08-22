export function addProductCart({ id, units, price, image, name, stock }) {
    let data = [];
    let date = JSON.parse(localStorage.getItem("data"));

    if (date) {
        date.push({ id, units, price, image, name, stock });
        localStorage.setItem("data", JSON.stringify(date));
    } else {
        data.push({ id, units, price, image, name, stock });
        localStorage.setItem("data", JSON.stringify(data));
    }
}

export function removeProductCart(id) {
    let data = JSON.parse(localStorage.getItem("data"));
    data = data.filter((e) => e.id !== id);
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(data));
}

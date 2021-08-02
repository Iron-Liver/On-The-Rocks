const { Category } = require('../../db')

const categoriesMockUp = async () => {
    try {
        await Category.create({
            name: "vinos blancos",
            description: "finisimos vinos hechos de uvas blancas etc etc",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Aligote_wine.jpg/250px-Aligote_wine.jpg"

        })
        await Category.create({
            name: "vinos tintos",
            description: "altos vinos tintos hechos con finisimas uvas del valle de la rosa de guadalupe",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Tempranillowine.jpg"
        })
        await Category.create({
            name: "vinos espumantes",
            description: "altos vinos tintos hechos con finisimas uvas del valle de la rosa de guadalupe, PERO, espumantes jeje",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bouteillemontagecordeliers.jpg/350px-Bouteillemontagecordeliers.jpg" 
        })
        await Category.create({
            name: "whiskys",
            description: "whiskys de las mejores categorias y los mejores precios",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Old_Smuggler_Scotch_whisky.jpg/245px-Old_Smuggler_Scotch_whisky.jpg"
        })
        await Category.create({
            name: "vodkas",
            description: "los mejores y mas fuertes vodkas del mundo los encontras aca etc",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Absolut_Vodka.jpg/303px-Absolut_Vodka.jpg"
        })
        await Category.create({
            name: "tequilas",
            description: "Los mejores y mas fuertes tequilas del mundo, para que te tumben mismo",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/15-09-26-RalfR-WLC-0244.jpg/220px-15-09-26-RalfR-WLC-0244.jpg"
        })
        await Category.create({
            name: "coñacs",
            description: "los coñac mas ricos y a los mejores precios etc etc",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Cognac_Braastad_XO_and_tulip_shaped_glass.JPG/200px-Cognac_Braastad_XO_and_tulip_shaped_glass.JPG"
        })
        await Category.create({
            name: "Ron",
            description: "El ron es una bebida alcohólica, elaborada a partir de la fermentación y destilación de la melaza o el jugo de la caña de azúcar",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Appleton_Estate_V-X_Jamaica_Rum-with_glass.jpg/270px-Appleton_Estate_V-X_Jamaica_Rum-with_glass.jpg"
        })
        await Category.create({
            name: "Singani",
            description: "Singani es una bebida alcohólica boliviana, con denominación de origen protegida, de la familia del aguardiente de uvas.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Singani_major_brands.png/245px-Singani_major_brands.png"
        })
        await Category.create({
            name: "Ginebra",
            description: "La ginebra es una bebida alcohólica destilada que posee un sabor predominante a nebrinas, los frutos del enebro (Juniperus communis)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Assorted_gin_bottles_on_a_store_shelf.jpg/300px-Assorted_gin_bottles_on_a_store_shelf.jpg"
        })
    }catch (e) {
        console.log(e)
    }
}

module.exports = {
    categoriesMockUp
}

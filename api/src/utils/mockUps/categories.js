const { Category } = require('../../db')

const categoriesMockUp = async () => {
    try {
        await Category.create({
            name: "white wines",
            description: "Fine wines made from white grapes etc etc",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Aligote_wine.jpg/250px-Aligote_wine.jpg"

        })
        await Category.create({
            name: "red wines",
            description: "high red wines made with fine grapes from the valley of the rose of guadeloupe",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Tempranillowine.jpg"
        })
        await Category.create({
            name: "sparkling wines",
            description: "high wines made with very fine grapes from the valley of the rose of guadeloupe, BUT, sparkling hehe",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bouteillemontagecordeliers.jpg/350px-Bouteillemontagecordeliers.jpg" 
        })
        await Category.create({
            name: "whiskys",
            description: "whiskeys of the best categories and the best prices",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Old_Smuggler_Scotch_whisky.jpg/245px-Old_Smuggler_Scotch_whisky.jpg"
        })
        await Category.create({
            name: "vodkas",
            description: "You can find the best and strongest vodkas in the world here, etc.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Absolut_Vodka.jpg/303px-Absolut_Vodka.jpg"
        })
        await Category.create({
            name: "tequilas",
            description: "The best and strongest tequilas in the world, to knock you down",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/15-09-26-RalfR-WLC-0244.jpg/220px-15-09-26-RalfR-WLC-0244.jpg"
        })
        await Category.create({
            name: "cognacs",
            description: "the richest cognacs and at the best prices etc etc",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Cognac_Braastad_XO_and_tulip_shaped_glass.JPG/200px-Cognac_Braastad_XO_and_tulip_shaped_glass.JPG"
        })
        await Category.create({
            name: "Ron",
            description: "Ron is an alcoholic beverage, made from the fermentation and distillation of molasses or sugar cane juice",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Appleton_Estate_V-X_Jamaica_Rum-with_glass.jpg/270px-Appleton_Estate_V-X_Jamaica_Rum-with_glass.jpg"
        })
        await Category.create({
            name: "Singani",
            description: "Singani is a Bolivian alcoholic drink, with a protected designation of origin, from the grape brandy family.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Singani_major_brands.png/245px-Singani_major_brands.png"
        })
        await Category.create({
            name: "Gin",
            description: "Gin is a distilled alcoholic beverage that has a predominant taste of mist, the fruits of the juniper (Juniperus communis)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Assorted_gin_bottles_on_a_store_shelf.jpg/300px-Assorted_gin_bottles_on_a_store_shelf.jpg"
        })
    }catch (e) {
        console.log(e)
    }
}

module.exports = {
    categoriesMockUp
}

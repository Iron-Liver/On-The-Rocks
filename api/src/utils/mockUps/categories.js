const { Category } = require('../../db')

const categoriesMockUp = async () => {
    try {
        await Category.create({
            name: "Champagne",
            description: "Delicius champagne made with eternal youth elixir",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Aligote_wine.jpg/250px-Aligote_wine.jpg"

        })
        await Category.create({
            name: "Red wines",
            description: "high red wines made with fine grapes from the valley of the rose of guadeloupe",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Tempranillowine.jpg"
        })
        await Category.create({
            name: "Vermouth",
            description: "high wines made with very fine grapes from the valley of the rose of guadeloupe, BUT, sparkling hehe",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bouteillemontagecordeliers.jpg/350px-Bouteillemontagecordeliers.jpg" 
        })
        await Category.create({
            name: "whisky",
            description: "whiskeys of the best categories and the best prices",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Old_Smuggler_Scotch_whisky.jpg/245px-Old_Smuggler_Scotch_whisky.jpg"
        })
        await Category.create({
            name: "Vodka",
            description: "You can find the best and strongest vodkas in the world here, etc.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Absolut_Vodka.jpg/303px-Absolut_Vodka.jpg"
        })
        await Category.create({
            name: "Tequila",
            description: "The best and strongest tequilas in the world, to knock you down",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/15-09-26-RalfR-WLC-0244.jpg/220px-15-09-26-RalfR-WLC-0244.jpg"
        })
        await Category.create({
            name: "Cognacs",
            description: "the richest cognacs and at the best prices etc etc",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Cognac_Braastad_XO_and_tulip_shaped_glass.JPG/200px-Cognac_Braastad_XO_and_tulip_shaped_glass.JPG"
        })
        await Category.create({
            name: "Ron",
            description: "Ron is an alcoholic beverage, made from the fermentation and distillation of molasses or sugar cane juice",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Appleton_Estate_V-X_Jamaica_Rum-with_glass.jpg/270px-Appleton_Estate_V-X_Jamaica_Rum-with_glass.jpg"
        })
        await Category.create({
            name: "Gifts",
            description: "Singani is a Bolivian alcoholic drink, with a protected designation of origin, from the grape brandy family.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Singani_major_brands.png/245px-Singani_major_brands.png"
        })
        await Category.create({
            name: "Gin",
            description: "Gin is a distilled alcoholic beverage that has a predominant taste of mist, the fruits of the juniper (Juniperus communis)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Assorted_gin_bottles_on_a_store_shelf.jpg/300px-Assorted_gin_bottles_on_a_store_shelf.jpg"
        })
        await Category.create({
            name: "Brandy",
            description: "Brandy (short for brandewijn, in Dutch and Low German burnt wine ) or brandy is a spirit obtained through the distillation of wine, almost always with 36-40% (up to 60%) by volume of alcohol, upon being issued to the market. Unless a complementary adjective is added fruit brandy, cereal brandy, etc. It is considered made with grape wine.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Brandy_solera_reseva.jpg/220px-Brandy_solera_reseva.jpg"
        })
        await Category.create({
            name: "Liqueur",
            description: "Liquor (from the Latin liquor) is an alcoholic beverage obtained by maceration in brandy of herbs or fruits, which are sometimes sweetened with sucrose, grape sugar, must or honey, with a richness in sugars greater than 100 grams / liter (expressed in sucrose)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Licor_de_Cactus.jpg/220px-Licor_de_Cactus.jpg"
        })
    }catch (e) {
        console.log(e)
    }
}

module.exports = {
    categoriesMockUp
}

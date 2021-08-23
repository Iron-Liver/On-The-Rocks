const { Product } = require('../../db');

const productsMockUp = async () => {
    try {
        const absolut = await Product.create({
            name: "Absolut Vodka 1L",
            description: "With 400 years of Swedish tradition behind it, this superb Vodka is extremely smooth. Using the purest Swedish water from the town of Åhus and wheat grown in the surrounding countryside Absolut have maintained the tradition of pure and perfect Swedish Vodka.",
            price: 52.99,
            sku: "a1",            
            size: "1000 mL",
            brand: "Absolut",
            category: "Vodka",
            image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-absolut-1l_450x650.jpg?v=1559562467",
            stock: 10,
            
            
        })
        absolut.addCategories([5])
      
        const kalashnikov = await  Product.create({
            name:"Kalashnikov Premium Vodka 700mL AK-47",
            description:"The bottle itself is in the shape of the AK47 Kalashnikov machine gun and has a capacity of 700ml of Vodka.  The main section of the bottle is made of one piece clear glass and the labelling is black ink printed onto the butt of the bottle.  The ‘bottle top’ as such is made from black plastic or metal and incorporates a front sight, the same as the AK 47 machine gun.",
            size:"700 mL",
            brand:"KALASHNIKOV",
            sku:"a2",
            price:234.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-ak47_720x.jpg?v=1603236568",
            stock: 10,
        })   
        kalashnikov.addCategories([5])
      
        const gangstarVodka = await  Product.create({
            name:"Gangstar Vodka 175mL Pistol Gun",
            description:"Gangstar is an Australian vodka and has created a bottle shaped like an automatic pistol or handgun.",
            size:"175 mL",
            brand:"Gangstar",
            sku:"a3",
            price:32.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-gangstar-vodka-1_720x.jpg?v=1575786461",
            stock: 10,
        })
        gangstarVodka.addCategories([5])
      
        const patronSilverTequila = await  Product.create({
            name:"Patron Silver Tequila 1L",
            description:"Perhaps the worlds finest producer of Tequila, Patrón is as desirable as any and both beautifully packaged and produced. As opposed to Gold Tequila, Silver Tequila doesn't spend any time in oak barrels and as such it has a lighter, fresher taste",
            size:"1000 mL",
            brand:"Patron",
            sku:"a4",
            price:95.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-patron-silver_96205781-102c-4039-953e-b0471b3e4784_720x.jpg?v=1613033306",
        })
        patronSilverTequila.addCategories([6])
      
        const donJulioBlanco = await  Product.create({
            name:"Don Julio Blanco Tequila 700mL",
            description:"Using the finest raw agave and a time honoured distillation process, Don Julio Blanco is tequila in its truest form. A crisp agave flavour and clean, dry finish that is best enjoyed in a Tommy’s margarita.",
            size:"700 mL",
            brand:"DonJulio",
            sku:"a5",
            price:79.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-don-julio-blanco_720x.jpg?v=1598687753",
            stock: 10,
        })
        donJulioBlanco.addCategories([6])
      
        const joseCuervoEspecial = await  Product.create({
            name:"Jose Cuervo Especial Gold Tequila 700mL",
            description:"Jose Cuervo Reposado Tequila was the first ever Tequila made after José Maria Guadalupe de Cuervo was granted land by the King of Spain in 1758 to grow the now famous Agave plant.",
            size:"700 mL",
            brand:"Jose Cuervo",
            sku:"a6",
            price:43.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-jose-cuevo-gold_720x.jpg?v=1559566583",
            stock: 10,
        })
        joseCuervoEspecial.addCategories([6])
      
        const bombaySapphireLondonDry = await  Product.create({
            name:"Bombay Sapphire 47% London Dry Gin 750mL",
            description:"Shaken, not stirred, Bombay Sapphire is the classic gin for an ideal martini. The proprietary herbs and botanicals (hint, they're engraved on each bottle) meld to create a delicate gin, without the overly pungent juniper note that other gins have.",
            size:"750 mL",
            brand:"Bombay",
            sku:"a7",
            price:47.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-bombay-sapphire_720x.jpg?v=1607759796",
            stock: 10,
        })
        bombaySapphireLondonDry.addCategories([10])
      
        const bombaySapphireLondon = await  Product.create({
            name:"Bombay Original London Dry Gin 700mL",
            description:"One of the great old-school style London Gins, Bombay Original was first introduced in 1959 and is the precursor of the now more famous Bombay Sapphire. Now at a new strength.",
            size:"700 mL",
            brand:"Bombay",
            sku:"a8",
            price:35.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-bombay-original-gin_720x.jpg?v=1576236940",
            stock: 10,
        })
        bombaySapphireLondon.addCategories([10])
      
        const hendricksGin = await  Product.create({
            name:"Hendrick's Gin 44% Import Strength 750mL",
            description:"The iconic medicine bottle shape of the Hendrick's Gin lets you know that you're in for a quality Gin experience and with Hendrick's you get an unexpected infusion of cucumber & rose petals that results in a most iconic Gin.",
            size:"750 mL",
            brand:"Hendrick's",
            sku:"a9",
            price:70.99,
            onSale: 60.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-hendricks-gin_720x.jpg?v=1567926371",
            stock: 10,
        })
        hendricksGin.addCategories([10])
      
        const glenfiddich = await  Product.create({
            name:"Glenfiddich 40 Year Old Rare Collection Single Malt Scotch Whisky 700mL",
            description:"Each bottle is individually numbered and wrapped in hand-stitched calf leather. Each is accompanied by a leather bound book telling its 40 year old story, with certification hand-signed by our longest-serving craftsmen.",
            size:"700 mL",
            brand:"Glenfiddich",
            sku:"a10",
            price:4699.99,
            onSale: 4500.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-glenfiddich-40yo_720x.jpg?v=1614596002",
            stock: 10,
        })
        glenfiddich.addCategories([4])
      
        const hibiki = await  Product.create({
            name:"Hibiki 30 Year Old Kacho Fugetsu Limited Edition Japanese Suntory Whisky 700mL",
            description:"The 2015 'Kacho Fugetsu' edition is a design that embodies the beauty of Japanese nature. This whisky inside is a meld of grain and malt whiskies aged for 30 years on average.",
            size:"700 mL",
            brand:"Kacho Fugetsu",
            sku:"a11",
            price:8999.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-hibiki-30-kacho-fugestu_720x.jpg?v=1615167006",
            stock: 10,
        })
        hibiki.addCategories([4])
        const macallan = await  Product.create({
            name:"The Macallan M Decanter Single Malt Scotch Whisky 700mL",
            description:"Part of The Macallan Masters Decanter Series created to showcase the beautiful range of The Macallan’s natural colour, M is born of a collaboration between three masters of their crafts to create a completely individual spirit.",
            size:"7899.99",
            brand:"Macallan",
            sku:"a12",
            price:8999.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-macallan-m-decanter_720x.jpg?v=1602041212",
            stock: 10,
        })
        macallan.addCategories([4])
        const martell = await  Product.create({
            name:"Martell L'Or de Jean Martell Cognac 700mL",
            description:"Part of The Macallan Masters Decanter Series created to showcase the beautiful range of The Macallan’s natural colour, M is born of a collaboration between three masters of their crafts to create a completely individual spirit.",
            size:"700 mL",
            brand:"Martell",
            sku:"a13",
            price:3999.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-jean-martell-cognac-2_720x.jpg?v=1580703500",
            stock: 10,
        })
        martell.addCategories([7])
        const remyMartin = await  Product.create({
            name:"Remy Martin Coupe Shanghai 700mL",
            description:"In 1903, Remy Martin’s Cellar Master Paul Emile Rémy Martin II creates the first cognac especially developed for a specific market: the Coupe Shanghai designed for Asia. In 2013, in honor of the original Coupe Shanghai, Pierrette Trichet unveiled a reinterpretation of his creation. This new blend marks our dedication to history and tradition, and is proof of the heritage spanning centuries at the house of Rémy Martin.",
            size:"700 mL",
            brand:"Remy Martin",
            sku:"a14",
            price:679.99,
            onSale: 650.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-remy-martin-shanghai_720x.jpg?v=1559369227",
            stock: 10,
        })
        remyMartin.addCategories([7])
        const martellChanteloup = await  Product.create({
            name:"Martell Chanteloup Perspective Extra Cognac 700mL",
            description:"Martell Chanteloup Perspective is an invitation into the secret of the Chanteloup estate, the historic home of the Martell family. It is also home to countless bottles of eau-de-vie selected with utmost care, some of which have matured for many years in the Chanteloup cellars.",
            size:"700 mL",
            brand:"Martell",
            category: "Brandy",
            sku:"a15",
            price:549.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-martel-chanteloup_720x.jpg?v=1592737654",
            stock: 10,
            onSale: 500.99,
        })
        martellChanteloup.addCategories([7])
        const caffoVecchio = await  Product.create({
            name:"Caffo Vecchio Amaro del Capo Riserva 100th Anniversary Herb Liqueur 700mL",
            description:"A rare combination of Amaro & Brandy. Made with the same ingredients of Amaro del Capo but using an Italian brandy of very high quality, aged in oak barrels.",
            size:"700 mL",
            brand:"Vecchio Amaro del Capo",
            sku:"a16",
            price:549.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-vecchio-amaro-capo-riserva_900x.jpg?v=1625615358",
            stock: 10,
        })
        caffoVecchio.addCategories([11,12])
        const jagermeister = await  Product.create({
            name:"Jagermeister Herb Liqueur Party Pack With Hand Pump + 2 Glasses 1.75L",
            description:"Jägermeister herb liqueur is a secret recipe of 56 herbs, roots and fruits. They combine to create a smooth, rich flavour, with a distinctive bitter sweet finish. Best served as an ice cold shot. It contains 35% alcohol by volume.",
            size:"1750 mL",
            brand:"Jägermeister",
            sku:"a17",
            price:109.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-jagermeister-party-pack_900x.jpg?v=1607741478",
            stock: 10,
        })
        jagermeister.addCategories([12])
        const smirnoff = await  Product.create({
            name:"Smirnoff Gold Cinnamon Flavoured Liqueur Vodka With Gold Leaf 1L",
            description:"Rather than sinking to the bottom of the bottle, these gold leaves have been innovatively designed to remain suspended throughout the liquid, creating a stunning look not only in the bottle but in your drink as well.",
            size:"1000 mL",
            brand:"Smirnoff",
            sku:"a18",
            price:89.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-smirnoff-gold-1l_720x.jpg?v=1622193026",
            stock: 10,
        })
        smirnoff.addCategories([5])
        
    }catch (e) {
        console.log(e)
    }
}

module.exports = {
    productsMockUp
}
const { Product } = require('../../db');

const productsMockUp = async () => {
    try {
        
        
        const hibiki = await  Product.create({
            name:"Hibiki 30 Year Old Kacho Fugetsu Limited Edition Japanese Suntory Whisky 700mL",
            description:"The 2015 'Kacho Fugetsu' edition is a design that embodies the beauty of Japanese nature. This whisky inside is a meld of grain and malt whiskies aged for 30 years on average.",
            size:"700 mL",
            brand:"Kacho Fugetsu",
            sku:"a11",
            price:8999.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-hibiki-30-kacho-fugestu_720x.jpg?v=1615167006",
            stock: 10,
            onSale:8499.99
        })
        hibiki.addCategories([4])

        const macallan = await  Product.create({
            name:"The Macallan M Decanter Single Malt Scotch Whisky 700mL",
            description:"Part of The Macallan Masters Decanter Series created to showcase the beautiful range of The Macallan’s natural colour, M is born of a collaboration between three masters of their crafts to create a completely individual spirit.",
            size:"700 mL",
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
        martell.addCategories([11])
        const remyMartin = await  Product.create({
            name:"Remy Martin Coupe Shanghai 700mL",
            description:"In 1903, Remy Martin’s Cellar Master Paul Emile Rémy Martin II creates the first cognac especially developed for a specific market: the Coupe Shanghai designed for Asia. In 2013, in honor of the original Coupe Shanghai, Pierrette Trichet unveiled a reinterpretation of his creation. This new blend marks our dedication to history and tradition, and is proof of the heritage spanning centuries at the house of Rémy Martin.",
            size:"700 mL",
            brand:"Remy Martin",
            sku:"a14",
            price:679.99,
            onSale: 650.99,
            image:"https://thedrinksociety.com.au/cdn/shop/files/tds-remy-coupe-shanghai.jpg?v=1699421889",
            stock: 10,
        })
        remyMartin.addCategories([11])
        const martellChanteloup = await  Product.create({
            name:"Martell Chanteloup Perspective Extra Cognac 700mL",
            description:"Martell Chanteloup Perspective is an invitation into the secret of the Chanteloup estate, the historic home of the Martell family. It is also home to countless bottles of eau-de-vie selected with utmost care, some of which have matured for many years in the Chanteloup cellars.",
            size:"700 mL",
            brand:"Martell",
            category: "Brandy",
            sku:"a15",
            price:549.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-martel-chanteloup_720x.jpg?v=1592737654",
            stock: 10
        })
        martellChanteloup.addCategories([11])
        const royalDragon = await Product.create({
            name: "Royal Dragon Imperial With Gift Box Superior Vodka 700mL",
            description: "A small batch vodka, exclusively distilled with a Russian formula from the finest winter harvest rye. To achieve elemental softness and purity, Royal Dragon is five times distilled, using a century old copper pot still.",
            price: 124.99,
            sku: "a38",            
            size: "700 mL",
            brand: "RoyalDragon",            
            image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-royal-dragon-imperial-gb_720x.jpg?v=1613531735",
            stock: 10
            
        })
        royalDragon.addCategories([5])

        const greyGoose = await Product.create({
            name: "Grey Goose Ducasse With Gift Box Limited Edition Vodka 750mL",
            description: "Grey Goose Ducasse the world’s first 'Vodka Gastonomique' created to take you from dinner into the rest of the night. Collaboration between Michelin – starred master chef, Alain Ducasse & Grey Goose ´Maitre de chai`, Francois Thibault.",
            price: 99.99,
            sku: "a39",            
            size: "750 mL",
            brand: "Grey Goose",            
            image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-grey-goose-ducasse_720x.jpg?v=1626415116",
            stock: 10
            
        })
        greyGoose.addCategories([5])

        const greyGooseVX = await Product.create({
            name: "Grey Goose VX Vodka 1L",
            description: "Grey Goose VX its crafted with a hint of cognac, which gives it a truly distinctive aroma and flavour profile without interfering with the vodka experience. Masterfully finished with a hint of precious cognac.",
            price: 189.99,
            sku: "a40",            
            size: "1000 mL",
            brand: "Grey Goose",            
            image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-grey-goose-vx-gb-2_720x.jpg?v=1615359652",
            stock: 10
            
        })
        greyGooseVX.addCategories([5])        
        
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

        const absolut = await Product.create({
            name: "Absolut Vodka 1L",
            description: "With 400 years of Swedish tradition behind it, this superb Vodka is extremely smooth. Using the purest Swedish water from the town of Åhus and wheat grown in the surrounding countryside Absolut have maintained the tradition of pure and perfect Swedish Vodka.",
            price: 52.99,
            sku: "a1",            
            size: "1000 mL",
            brand: "Absolut",
            category: "Vodka",
            image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-absolut-1l_450x650.jpg?v=1559562467",
            stock: 10
            
        })
        absolut.addCategories([5])
        
        
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
            onSale: 34.99
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
            onSale: 35.99
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
        
        const caffoVecchio = await  Product.create({
            name:"Caffo Vecchio Amaro del Capo Riserva 100th Anniversary Herb Liqueur 700mL",
            description:"A rare combination of Amaro & Brandy. Made with the same ingredients of Amaro del Capo but using an Italian brandy of very high quality, aged in oak barrels.",
            size:"700 mL",
            brand:"Vecchio Amaro del Capo",
            sku:"a16",
            price:549.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-vecchio-amaro-capo-riserva_900x.jpg?v=1625615358",
            stock: 10,
            onSale: 499.99
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
        //-------------------------------------------------------------------
        const cecchi = await  Product.create({
            name:"Cecchi Chianti Governo All'Uso Toscano DOCG Blended Red Wine 750mL",
            description:"Result of a two-step vinification process: must be handpicked, overripe grapes is added to fruity wine to give it a pleasant structure rich in sugar residues, with a unique and inviting personality.",
            size:"750 mL",
            brand:"Cecchi",
            sku:"a19",
            price:19.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-chianti-governo-toscano_450x650.jpg?v=1628144868",
            stock: 10,
        })
        cecchi.addCategories([2])
        
        const masi = await  Product.create({
            name:"Masi Bonacosta Valpolicella Classico Dry Red Wine 750mL",
            description:"Valpolicella Classico, praised by Hemingway as a light, dry red wine, as friendly as the house of a favourite brother, is made here by Masi in an elegant style full of simplicity and freshness.",
            size:"750 mL",
            brand:"Masi",
            sku:"a20",
            price:24.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-masi-bonacosta-classico_450x650.jpg?v=1628580426",
            stock: 10,
        })
        masi.addCategories([2])
        
        const cockburn = await  Product.create({
            name:"Cockburn's Special Reserve Port Wine 1L Special Reserve Port Wine 1L",
            description:"Valpolicella Classico, praised by Hemingway as a light, dry red wine, as friendly as the house of a favourite brother, is made here by Masi in an elegant style full of simplicity and freshness.",
            size:"1000 mL",
            brand:"cockburn",
            sku:"a21",
            price:54.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-cockburns-port-1l_450x650.jpg?v=1626160169",
            stock: 10,
        })
        cockburn.addCategories([2])
        
        const alize = await  Product.create({
            name:"Alizé Bleu Vodka & Cognac Liqueur 700mL",
            description:"Alize Bleu blends Premium French Vodka with Alizé V.S. Cognac, then adds some magic",
            size:"700 mL",
            brand:"Alizé",
            sku:"a22",
            price: 39.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-alize-bleu_450x650.jpg?v=1585127446",
            stock: 10,
        })
        alize.addCategories([7])
        
        const cointreau = await  Product.create({
            name:"Cointreau Noir Orange Liqueur & Cognac 750mL",
            description:"Cointreau Noir is a blend of Cointreau orange liqueur and cognac. Walnuts and almonds are also included. It was created by Bernadette Langlais, master distiller for Cointreau from 1978-2016. Cointreau Noir was inspired by Majestic, a liqueur created by Édouard Cointreau in the early 1900s.",
            size:"750 mL",
            brand:"Cointreau",
            sku:"a23",
            price: 78.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-cointreau-noir_450x650.jpg?v=1626160983",
            stock: 10,
        })
        cointreau.addCategories([7])
        
        const chamboard = await  Product.create({
            name:"Chambord Black Raspberry Liqueur 200mL",
            description:"Chambord Liqueur is a super premium black raspberry liqueur with a fine French heritage, recognised around the world for its unique flavour and versatility in transforming cocktails into something grand. It’s an infusion of the world’s finest red and black raspberries, Madagascan vanilla, black currant and XO cognac creating a unique taste profile for a more extraordinary cocktail.",
            size:"200 mL",
            brand:"Chamboard",
            sku:"a24",
            price: 19.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-chambord-200ml_450x650.jpg?v=1601553666",
            stock: 10,
        })
        chamboard.addCategories([7])
        
        const goldcschlager = await  Product.create({
            name:"Goldschlager Cinnamon Schnapps Liqueur 1L",
            description:"Goldschlager is the authentic hot cinnamon schnapps with floating flakes of real 24 carat gold.",
            size:"1000 mL",
            brand:"Goldcschlager",
            sku:"a25",
            price: 68.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-goldschlager-cinamon-schnapps_450x650.jpg?v=1602449879",
            stock: 10,
        })
        goldcschlager.addCategories([12])
        
        const SantaTeresa = await  Product.create({
            name:"Santa Teresa 1796 Ron Antiguo de Solera Rum 700mL",
            description:"Santa Teresa 1796 is a premium, single estate Venezuelan rum, distilled, aged and blended at the Hacienda Santa Teresa. It is a family-owned rum distillery built on over 200 years of tradition, but the exceptional care and attention to their craft hasn't changed either, despite the challenges and adversities they've faced in that time.",
            size:"700 mL",
            brand:"Santa Teresa",
            sku:"a26",
            price: 79.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/st-teresa-1796-rum_450x650.jpg?v=1625553386",
            stock: 10,
        })
        SantaTeresa.addCategories([8])
        
        const oldMonk = await  Product.create({
            name:"Old Monk The Legend Indian Rum 1L",
            description:"From the Old Monk range produced by Mohan Meakin in India comes The Legend, a well-aged blended rum presented in a bottle supposedly shaped like the head of H.G. Meakin, the company's founder.",
            size:"1000 mL",
            brand:"Old Monk",
            sku:"a27",
            price: 83.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-old-monk-legend_450x650.jpg?v=1626417782",
            stock: 10,
        })
        oldMonk.addCategories([8])
        
        const zacapa = await  Product.create({
            name:"Zacapa Centenario XO Solera Gran Reserva Especial Rum 750mL",
            description:"Ron Zacapa Centenario XO Rum containing a blend of rums from 6 to 25 years old with an extra ageing stage in French oak barrels that previously held cognac.",
            size:"750 mL",
            brand:"Zacapa",
            sku:"a28",
            price: 159.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-zacapa-xo_450x650.jpg?v=1626416605",
            stock: 10,
        })
        zacapa.addCategories([8])
        
        const krug = await  Product.create({
            name:"Krug Grande Cuvee Brut M.V. Half Bottle Champagne 375mL",
            description:"Krug Grande cuvée as a half bottle size of champagne is as a symphony in total harmony. The Krug Champagne half bottle of 375ml gives you a half bottle, approximately 3 to 4 glasses (depending on the glass size) of a stunning champagne to try. The composition of the Cuvée is a stunning mosaic of flavours where the three champagne grapes, 20-25 growths and 6-10 different years, combine to give Grande cuvée its complexity, elegance and consistency year after year, blend after blend.",
            size:"375 mL",
            brand:"Krug",
            sku:"a29",
            price: 200.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-krug-grande-cuvee-375_450x650.jpg?v=1628911809",
            stock: 10,
        })
        krug.addCategories([1])
        
        const bollinger = await  Product.create({
            name:"Bollinger La Grande Annee 2012 With Gift Box Champagne 750mL",
            description:"At Bollinger, only very high quality harvests become a vintage: the exceptional 2012 vintage led to Bollinger creating expressive wines that were simultaneously full, fresh and complex.",
            size:"750 mL",
            brand:"Bollinger",
            sku:"a30",
            price: 229.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-bollinger-grande-2012-gb_450x650.jpg?v=1628664553",
            stock: 10,
        })
        bollinger.addCategories([1])
        
        const mumm = await  Product.create({
            name:"Mumm Cordon Rouge + 2 Flute Glasses Gift Pack Brut Champagne NV 750mL",
            description:"An explosion of freshness in the mouth, followed by strong persistence. The complex aromas of fresh fruit and caramel perpetuate the intensity..",
            size:"750 mL",
            brand:"Mumm",
            sku:"a31",
            price: 59.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-mumm-2-flute-gift-set_450x650.jpg?v=1623225597",
            stock: 10,
        })
        mumm.addCategories([1])
        
        const cinzano = await  Product.create({
            name:"Cinzano Extra Dry Vermouth 1L",
            description:"Cinzano Extra Dry is a blend of high quality white wine and essences of herbs and spices, creating a delicate and balanced crisp refreshing drink.",
            size:"1000 mL",
            brand:"Cinzano",
            sku:"a32",
            price: 13.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-cinzano-extra-dry_450x650.jpg?v=1579168251",
            stock: 10,
        })
        cinzano.addCategories([3])
        
        const cinzano1757 = await  Product.create({
            name:"Cinzano 1757 Rosso Vermouth 1L",
            description:"This unique premium vermouth has been bottled to celebrate and pay homage to Cinzano’s founding fathers, Giovanni Giacomo and Carlo Stefano, who in 1757 started their business in Turin.",
            size:"1000 mL",
            brand:"Cinzano 1757",
            sku:"a33",
            price: 29.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-cinzano-1757-rosso_450x650.jpg?v=1623225756",
            stock: 10,
        })
        cinzano1757.addCategories([3])
        
        const cinzanoRosso = await  Product.create({
            name:"Cinzano Rosso Vermouth 1L",
            description:"Cinzano Rosso is a blend of high quality red wine and essences of herbs and spices, creating a delicate and balanced refreshing drink, a slight sweetness balances with herbal bitterness.",
            size:"1000 mL",
            brand:"Cinzano Rosso",
            sku:"a34",
            price: 11.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-cinzano-rosso_450x650.jpg?v=1579167947",
            stock: 10,
        })
        cinzanoRosso.addCategories([3])
        
        const kah = await  Product.create({
            name:"KAH Anejo Ceramic Skull Tequila 700mL",
            description:"Apart from the standard traditions of shrine building and gift giving, things are taken a step further and rather than going home after the graveside celebrations, many people stay and sleep in the grave yard. They believe that this act re-enforces the emotional connection between them and the deceased.",
            size:"700 mL",
            brand:"Kah",
            sku:"a35",
            price: 138.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-kah-anejo-tequila_450x650.jpg?v=1629512230",
            stock: 10,
        })
        kah.addCategories([9])
        
        const cristalHead = await  Product.create({
            name:"Crystal Head Skull Decanter Aurora Limited Edition Vodka 700mL",
            description:"Aurora uses the highest-quality English wheat and pristine water from Newfoundland, Canada to craft an additive-free vodka. The vodka's purity is maintained by way of five distillations and seven filtrations. And as our final distinctive touch, three of these filtrations are passed through layers of Herkimer diamonds.",
            size:"700 mL",
            brand:"Cristal Head",
            sku:"a36",
            price: 101.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-crystal-head-aurora_450x650.jpg?v=1629507826",
            stock: 10,
        })
        cristalHead.addCategories([9])
        
        const cristalHead2 = await  Product.create({
            name:"Crystal Head Skull Decanter John Alexander Artist Limited Edition Vodka 700mL",
            description:"Known as a painter of environmentally conscious landscapes and satirical figurative work, this evocative design is derived from John Alexander’s expressive paintings.",
            size:"700 mL",
            brand:"Cristal Head",
            sku:"a37",
            price: 179.99,            
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-crystal-head-john-alexander_720x.jpg?v=1629189316",
            stock: 10,
        })
        cristalHead2.addCategories([9])
        
        const kalashnikov = await  Product.create({
            name:"Kalashnikov Premium Vodka 700mL AK47",
            description:"The bottle itself is in the shape of the AK47 Kalashnikov machine gun and has a capacity of 700ml of Vodka.  The main section of the bottle is made of one piece clear glass and the labelling is black ink printed onto the butt of the bottle.  The ‘bottle top’ as such is made from black plastic or metal and incorporates a front sight, the same as the AK 47 machine gun.",
            size:"700 mL",
            brand:"Kalashnikov",
            sku:"a2",
            price:234.99,
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-ak47_720x.jpg?v=1603236568",
            stock: 10,
        })   
        kalashnikov.addCategories([9])
        
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
        gangstarVodka.addCategories([9])

        const jackDaniels = await Product.create({
            name: "Jack Daniel's Old No.7 With Gift Box Tennessee Whiskey 1L",
            description: "This is the soul of American whiskey. Its distinct and unique taste comes from refining mellowing the freshly distilled whiskey drop by drop through 10 feet of sugar maple charcoal.",
            size: "1000 mL",
            brand: "Jack Daniels",
            sku: "a41",
            price: 64.99,
            image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-jack-daniels-gb_720x.jpg?v=1615454485",
            stock: 10
        });
        jackDaniels.addCategories([4])

        const hennessyXXO = await Product.create({
            name: "Hennessy XXO Cognac 1L",
            description: "First created in 1870 alongside Hennessy X.O, Hennessy X.X.O widens the scope of possibilities through the selection and maturation of eaux-de-vie with higher potential. In 2018, our Master Blender recreates Hennessy X.X.O, a blend assembling a powerful structure and an aerial fineness.",
            size: "1000 mL",
            brand: "Hennessy",
            sku: "a42",
            price: 879.99,
            image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-hennessy-xxo-1_720x.jpg?v=1579726852",
            stock: 10
        })
        hennessyXXO.addCategories([7])

        const donJulioAnejo = await Product.create({
            name: "Don Julio Anejo Tequila 700mL",
            description: "A testament to Don Julio’s patience and determination for ideal quality, Tequila Don Julio Añejo is the culmination of distinct rich flavours of agave balanced with the perfect amount of wood influence.",
            size: "700 mL",
            brand: "Don Julio",
            sku: "a43",
            price: 99.99 ,
            image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-don-julio-anejo_720x.jpg?v=1598687321",
            stock: 10
        })
        donJulioAnejo.addCategories([6])

        const johnnieWalker = await Product.create({
            name: "Johnnie Walker Blue Label Blended Scotch Whisky 700mL",
            description: "Johnnie Walker Blue Label is the most highly sought after of the Johnnie Walker range, a whisky of superior blending and well-earned distinction. The very definition of rarity, Johnnie Walker Blue Label is renowned for its divine blend of the world's finest and scarcest whiskies. Rare casks are hand-selected and blended by Johnnie Walker's master distiller; chosen for their superlative, unparalleled quality and outstanding palates.",
            size: "700 mL",
            brand: "Johnnie Walker",
            sku: "a44",
            price: 214.99,
            image: "https://acdn-us.mitiendanube.com/stores/001/211/660/products/blue-ok1-3981bf93239f4efbe616455423206961-640-0.png",
            stock: 10
        })
        johnnieWalker.addCategories([4])

        const royalSalute = await Product.create({
            name: "Royal Salute 32 Year Old Union Of The Crown Blended Scotch Whisky 500mL",
            description: "Royal Salute 32 Year Old celebrates the Union of the Crown, which saw the unification of Ireland, Scotland and England under the British Monarchy. An exquisite blend of hand-selected single malt and grain whiskies aged for a minimum of 32 years, it is presented in a magnificent porcelain flagon with a unique glaze.",
            size: "500 mL",
            brand: "Royal Salute",
            sku: "a45",
            price: 699.99,
            image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-royal-salute-32-union-crown_720x.jpg?v=1600932272",
            stock: 10
        })
        royalSalute.addCategories([4])

        const casaCanevel = await Product.create({
          name: "Casa Canevel Prosecco DOC Extra Dry 750mL",
          description: "Sparkling wine with a lively mousse and fresh aromas of fruit and flowers. Delicate but firm on the palate with good acidity and long-lasting aromas that are reminiscent of the nose.",
          size: "750 mL",
          brand: "Casa Canavel",
          sku: "a46",
          price: 19.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-casa-canavel-prosecco_720x.jpg?v=1628230188",
          stock: 10
      })
      casaCanevel.addCategories([1])

      const moetNChandon = await Product.create({
          name: "Moët & Chandon Brut Impérial Champagne NV 750mL",
          description: "First created in 1869, Moët Impérial embodies the unique Moët & Chandon style that is bright in fruit with a seductive palate and elegant maturity.",
          size: "750 mL",
          brand: "Moët & Chandon",
          sku: "a47",
          price: 60.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-moet-chandon-imperial-bottle_720x.jpg?v=1613885037",
          stock: 10
      })
      moetNChandon.addCategories([1])

      const taittinger = await Product.create({
          name: "Taittinger Brut Reserve NV Champagne 750mL",
          description: "Taittinger Brut Réserve is made from 40 % Chardonnay, 35% Pinot Noir and 25% Pinot Meunier, using perfectly matured grapes harvested from over 35 different vineyards. This subtle blend results in a light, elegant and balanced champagne.", 
          size: "750 mL",
          brand: "Tattinger",
          sku: "a48",
          price: 64.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-tattinger-brut-reserve_720x.jpg?v=1619509205",
          stock: 10
      })
      taittinger.addCategories([1])

      const penfolds = await Product.create({
          name: "Penfolds Lot 518 Spirited Wine with Baijiu Shiraz 750mL",
          description: "Curiosity led Penfolds to break the conventions of traditional winemaking from the very beginning; to experiment and innovate in order to create the unforgettable. Lot. 518 Spirited Wine with Baijiu, respects that legacy in true Penfolds style. A rich, complex, full-bodied hybrid, as floral and fruity notes of the Baijiu meet the bold signature style of Penfolds Fortified Shiraz.", 
          size: "750 mL",
          brand: "Penfolds",
          sku: "a49",
          price: 144.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-penfolds-lot-518-baiju_720x.jpg?v=1622700878",
          stock: 10
      })
      penfolds.addCategories([2])

      const penfoldsBin = await Product.create({
          name: "Penfolds Bin 389 Cabernet Shiraz 2017 750mL",
          description: "Bin 389 was often referred to as `Baby Grange', in part because components of the wine are matured in the same barrels that held the previous vintage of Grange. First made in 1960 by the legendary Max Schubert, this was the wine that helped forge Penfolds reputation with red wine drinkers by combining the structure of cabernet sauvignon with the richness of Shiraz.", 
          size: "750 mL",
          brand: "Penfolds",
          sku: "a50",
          price: 114.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-penfolds-bin-389-2017_720x.jpg?v=1623043498",
          stock: 10
      })
      penfoldsBin.addCategories([2])

      const vegaSicilia = await Product.create({
          name: "Vega Sicilia Unico 2006 Ribera del Duero 750mL",
          description: "Bin 389 was often referred to as `Baby Grange', in part because components of the wine are matured in the same barrels that held the previous vintage of Grange. First made in 1960 by the legendary Max Schubert, this was the wine that helped forge Penfolds reputation with red wine drinkers by combining the structure of cabernet sauvignon with the richness of Shiraz.", 
          size: "750 mL",
          brand: "Vega Sicilia",
          sku: "a51",
          price: 499.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-vega-sicilia-unico-2006_720x.jpg?v=1622701522",
          stock: 10
      })
      vegaSicilia.addCategories([2])

      const cinzanoBianco = await Product.create({
          name: "Cinzano Bianco Vermouth 1L",
          description: "Cinzano Bianco is a blend of high quality white wine and essences of herbs and spices, creating a delicate and balanced refreshing drink with a sweetness on the finish.", 
          size: "1000 mL",
          brand: "Cinzano",
          sku: "a52",
          price: 13.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-cinzano-bianco_720x.jpg?v=1579168067",
          stock: 10
      })
      cinzanoBianco.addCategories([3])

      const royalDragonElite = await Product.create({
          name: "Royal Dragon Elite Passionfruit Flavoured Vodka 700mL",
          description: "Introducing the most tantalising and unique flavoured collection of its time. Royal Dragon have carefully sourced products from trusted suppliers around the world, sampling every fruit, bean, and nut to compliment our award-winning vodka.", 
          size: "700 mL",
          brand: "Royal Dragon",
          sku: "a53",
          price: 69.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-royal-dragon-passionfruit-vodka_720x.jpg?v=1613035374",
          stock: 10
      })
      royalDragonElite.addCategories([5])

      const patronXoCafe = await Product.create({
          name: "Patron XO Cafe Incendio 750mL",
          description: "Patrón XO Café Incendio is a perfect combination of Mexican Arbol Chile with rich decadent essence of Criollo chocolate and tequila. There is nothing like it, handcrafted with great attention to detail and quality.", 
          size: "750 mL",
          brand: "Patron",
          sku: "a54",
          price: 54.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-patron-incendio_720x.jpg?v=1578619602",
          stock: 10
      })
      patronXoCafe.addCategories([6])

      const caboWabo = await Product.create({
          name: "Cabo Wabo Reposado Tequila 750mL",
          description: "Patrón XO Café Incendio is a perfect combination of Mexican Arbol Chile with rich decadent essence of Criollo chocolate and tequila. There is nothing like it, handcrafted with great attention to detail and quality.", 
          size: "750 mL",
          brand: "Cabo Wabo",
          sku: "a55",
          price: 89.99,
          image: "https://www.cabowabo.com/wp-content/uploads/2021/12/cabo-three.png",
          stock: 10
      })
      caboWabo.addCategories([6])

      const grandMarnier = await Product.create({
          name: "Grand Marnier Cuvee du Centenaire Liqueur 700mL",
          description: "Cuvée du Centenaire is an exceptional blend of refined XO cognacs from the best Crus of Grande and Petite Champagne combined with the essence of wild tropical oranges. First introduced in 1927 to commemorate the 100th anniversary of our Maison’s founding; we now proudly unveil a modern presentation of our classic packaging.", 
          size: "700 mL",
          brand: "Grand Marnier",
          sku: "a56",
          price: 199.99,
          image: "https://static.cognac-expert.com/12347-large_default/grand-marnier-quintessence-limited-edition-liqueur.webp",
          stock: 10
      })
      grandMarnier.addCategories([7])

      const alizeRed = await Product.create({
          name: "Alizé Red Cognac Liqueur 750mL",
          description: "French Cognac blended with passionfruit juice and cranberries.", 
          size: "750 mL",
          brand: "Alizé",
          sku: "a57",
          price: 37.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-alize-red-750_720x.jpg?v=1559565943",
          stock: 10
      })
      alizeRed.addCategories([7])

      const kraken94 = await Product.create({
          name: "Kraken 94 Proof 47% ABV Black Spiced Rum 750mL",
          description: "The Kraken Black Spiced Rum is promising to cause a 'perfect storm' in the rum category. An aged Caribbean rum enriched with exotic spices including cinnamon, ginger and clove. Strong, rich, black, smooth 47% ABV rum packaged in a distinctive 750mL Victorian 'flagon-style' clear glass bottle. The brand takes its name from a legendary, mythical sea beast - a squid of monstrous size said to grow up to 100ft long - which attacks ships and devours their crews.", 
          size: "750 mL",
          brand: "The Kraken",
          sku: "a58",
          price: 54.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-kraken-94-proof_720x.jpg?v=1594449941",
          stock: 10
      })
      kraken94.addCategories([8])

      const botranNCo = await Product.create({
          name: "Botran & Co Gran Reserva Especial Ron 75th Anniversary Gift Pack 500mL + 2 x 50mL Samples",
          description: "Special edition limited by the 75-year history of the distilleries in Guatemala of the Ron Botran accompanies this luxury case a bottle numbered Ron Botran 75th anniversary, a unit of rum and citrus flavour 50mL, a unit of flavoured rum Species, a pipette and booklet with the history of Botran House.", 
          size: "500 mL",
          brand: "Botran & Co",
          sku: "a59",
          price: 199.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-botran-co-75th-anniversary_720x.jpg?v=1614390103",
          stock: 10
      })
      botranNCo.addCategories([8])

      const diplomaticoReserva = await Product.create({
          name: "Diplomatico Reserva Exclusiva Venezuelan Dark Rum 750mL",
          description: "Reserva Exclusiva is Diplomatico Rum's flagship expression. It is an elegant and complex sipping rum, marrying a unique body with excellent balance. Produced with the best quality sugar cane honeys and molasses, and distilled in copper pot stills, small batch kettle and columns stills, then aged in American and Spanish oak casks for up to 12 years.", 
          size: "750 mL",
          brand: "Diplomatico",
          sku: "a60",
          price: 98.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-diplomatico-reserva-exclusiva_720x.jpg?v=1602373835",
          stock: 10
      })
      diplomaticoReserva.addCategories([8])

      const crownRoyal = await Product.create({
          name: "Crown Royal Northern Harvest Rye Blended Canadian Whisky 1L",
          description: "Crown Royal Northern Harvest Rye Blended Canadian Whisky is the special new whisky from the makers of the top-selling Canadian whisky of all time. Jim Murray chose this rye whisky as his winner for his 2016 Whisky Bible. This spicy, creamy whisky makes you stand up and pay attention to the power of rye!.", 
          size: "1000 mL",
          brand: "Crown Royal",
          sku: "a61",
          price: 94.99,
          image: "https://winevins.com/cdn/shop/files/Crown_Royal_Northern_Harvest_Rye_1L_809140f2-e47c-4f41-8e24-1aadea871d1a.png?v=1743364893",
          stock: 10
      })
      crownRoyal.addCategories([9])

      const Brockmans = await Product.create({
          name: "Brockmans Premium Gin 700mL",
          description: "Infused with exquisite botanicals from 100% neutral grain spirit. A unique blend of botanicals with subtle notes of berry give an intensely smooth taste, to this beautifully made Gin.", 
          size: "700 mL",
          brand: "Brockmans",
          sku: "a62",
          price: 79.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-brockmans-gin_720x.jpg?v=1598682667",
          stock: 10
      })
      Brockmans.addCategories([10])

      const Aviation = await Product.create({
          name: "Aviation American Gin 750mL",
          description: "Aviation Gin is a completely unique and distinguished gin from Portland, Oregon. Based on a `Botanical Democracy' Aviation Gin has a balance of flavours rather than being dictated by juniper.", 
          size: "750 mL",
          brand: "Aviation",
          sku: "a63",
          price: 74.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-aviation-gin_720x.jpg?v=1618618300",
          stock: 10
      })
      Aviation.addCategories([10])

      const theLondon = await Product.create({
          name: "The London No. 1 Original Blue Dry Gin 750mL",
          description: "It is all of the components that give The London Nº 1 its singular character - the quality of the ingredients, the distillation method, the colour and the bottle's design.", 
          size: "750 mL",
          brand: "The London No. 1",
          sku: "a64",
          price: 79.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-london-no1-gin_720x.jpg?v=1626324259",
          stock: 10
      })
      theLondon.addCategories([10])

      const camusCuvee = await Product.create({
          name: "Camus Cuvee Baccarat 3.140 Masterpiece Collection Decanter Cognac 700mL",
          description: "Enriched by the passion of five generations of Cognac masters—each inspired as much by the cultivation of the grape and its distillation as by aesthetics and art—Camus has created yet another exceptional Cognac. Thanks to its artistic, technical and creative qualities, not to mention its continuous search for exceptional vintages, the Masterpiece Collection by Cyril Camus is “a relentless revelation of taste and pleasure,” says the company.", 
          size: "700 mL",
          brand: "Camus",
          sku: "a65",
          price: 4799.00,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-camus-baccarat-3140_720x.jpg?v=1628670850",
          stock: 10
      })
      camusCuvee.addCategories([11])

      const remyMartinReserve = await Product.create({
          name: "Remy Martin Reserve Cellar Selection No. 28 Cognac 700mL",
          description: "The “Cellar Master’s Selection” celebrates the aromatic diversity of the cellars on the Domaine de Merpins. Due to their position fully underground, certain of our cellars are the true favourites of our Cellar Masters.", 
          size: "700 mL",
          brand: "Remy Martin",
          sku: "a66",
          price: 199.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-remy-martin-cellar-28_720x.jpg?v=1621739878",
          stock: 10
      })
      remyMartinReserve.addCategories([11])

      const stGermain = await Product.create({
          name: "St Germain Elderflower Liqueur 750mL",
          description: "St Germain Elderflower Liqueur has a light, refreshing sweetness and is an incredible cocktail ingredient for a variety of base spirits in addition to wine and Champagne. Extremely versatile adds character to many cocktails with a touch of style and sophistication. Made using the finest and fresh hand-picked elderflower.", 
          size: "750 mL",
          brand: "St Germain",
          sku: "a67",
          price: 58.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-st-germain-elderflower_720x.jpg?v=1586147341",
          stock: 10
      })
      stGermain.addCategories([12])

      const jagermeisterManifest = await Product.create({
          name: "Jagermeister Manifest With Gift Box Herb Liqueur 1L",
          description: "It’s an attitude that manifests itself in our latest creation. Based on our original elixir, we’ve crafted a truly special flavour that put Jägermeister again in a class of its own: We call it Jägermeister Manifest.", 
          size: "1000 mL",
          brand: "Jagermeister",
          sku: "a68",
          price: 89.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-jagermeister-manifest-1l_720x.jpg?v=1614403632",
          stock: 10
      })
      jagermeisterManifest.addCategories([12])

      const maverickCowboy = await Product.create({
          name: "Maverick Cowboy Butterscotch Cream Liqueur 750mL",
          description: "Maverick Cowboy is a smooth and indulgent Cowboy smoothie. It combines the ultimate blend of butterscotch Schnapps and cream liqueur. Best served chilled.", 
          size: "750 mL",
          brand: "Maverick",
          sku: "a69",
          price: 9.99,
          image: "https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-maverick-cowboy-butterscotch-750ml_720x.jpg?v=1625888361",
          stock: 10
      })
      maverickCowboy.addCategories([12])

      
    }catch (e) {
        console.log(e)
    }
}

module.exports = {
    productsMockUp
}
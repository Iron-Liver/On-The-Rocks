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
            image:"https://cdn.shopify.com/s/files/1/0246/9753/6596/products/tds-remy-martin-shanghai_720x.jpg?v=1559369227",
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


    }catch (e) {
        console.log(e)
    }
}

module.exports = {
    productsMockUp
}
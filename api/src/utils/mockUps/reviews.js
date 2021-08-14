const { Review } = require('../../db')

const reviewsMockUp = async () => {
    try {
        await Review.create({
            stars: 5,
            description: "Very fine vodka. Bottle is a nice detail.",
            userId: 1,
            productId: 2

        })
        await Review.create({
            stars: 2,
            description: "Vodka tastes like wc water and doesn't shoot.",
            userId: 2,
            productId: 2
        })
    }catch (e) {
        console.log(e)
    }
}

module.exports = {
    reviewsMockUp
}

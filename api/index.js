const {server} = require('./src/app.js');
const {conn} = require('./src/db.js');
require("dotenv").config();


const {userMockUp, adminMockUp} = require('./src/utils/mockUps/users')
const {productsMockUp} = require('./src/utils/mockUps/products')
const {categoriesMockUp} = require('./src/utils/mockUps/categories')
const {ordersMockUp} = require('./src/utils/mockUps/orders')
const {reviewsMockUp} = require('./src/utils/mockUps/reviews')

conn.sync({ force: true })
.then(async() => {
    await server.listen(process.env.PORT, async() => {
    console.log('OnTheRocks API is now listening');

    await adminMockUp();
    await userMockUp();
    await categoriesMockUp();
    await productsMockUp();
    await ordersMockUp();
    await reviewsMockUp();
    });
})
.catch(e => console.log(e.message))


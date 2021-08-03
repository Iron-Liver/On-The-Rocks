const {server} = require('./src/app.js');
const {conn} = require('./src/db.js');
require("dotenv").config();


const {userMockUp, adminMockUp} = require('./src/utils/mockUps/users')
const {productsMockUp} = require('./src/utils/mockUps/products')
const {categoriesMockUp} = require('./src/utils/mockUps/categories')
const {ordersMockUp} = require('./src/utils/mockUps/orders')

conn.sync({ force: true })
.then(async() => {
    await server.listen(process.env.PORT, async() => {
    console.log('OnTheRocks API is now listening');

    await adminMockUp();
    await userMockUp();
    await productsMockUp();
    await categoriesMockUp();
    await ordersMockUp();
    });
})
.catch(e => console.log(e.message))


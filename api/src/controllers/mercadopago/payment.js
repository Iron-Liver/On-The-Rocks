const { Order, Payment_detail, Order_products, Product, User } = require("../../db");
const { FRONT, GMAIL_APP_EMAIL } = process.env;
const { transporter } = require("../../utils/nodemailer");

module.exports = async (req, res, next) => {

  try {
    const payment_id = parseInt(req.query.payment_id);
    const payment_status = req.query.status;
    const external_reference = parseInt(req.query.external_reference);
    const merchant_order_id = req.query.merchant_order_id;
  
    let payment = await Payment_detail.findOne({
      where: {
        payment_id 
      }
    });

    if(payment) {
      payment.payment_status = payment_status
      payment.save();
    } else {
      payment = await Payment_detail.create({
        payment_status,
        payment_id,
        merchant_order_id,
        orderId: external_reference,
        name: "mercadopago"
      });
      await payment.setOrder(external_reference);
    }

    if(payment_status === "rejected") {
      const order = await Order.findOne({
        where: {
          id: external_reference
        },
        include: [Order_products, User]
      });

      order.order_products.forEach(async (product) => {
        await Product.increment({
          stock: product.units
        }, {
          where: {
            id: product.productId
          }
        });
      });

      
      order.status = "cancelled";
      order.save();

      transporter.sendMail({
        from: `"On The Rocks" <${GMAIL_APP_EMAIL}>`, // sender address
        to: order.user.email, // list of receivers
        subject: "Order cancelled", // Subject line
        text: "The payment has been rejected, please try again", // plain text body
        html: `<b>click on the link to see your order: <a href="${FRONT}/order/${order.id}"> HERE </a> </b>`, // html body
      });
    } else if(payment_status === "approved") {

      const order = await Order.findOne({
        where: {
          id: external_reference
        },
        include: [Order_products, User]
      });
      
      if(order.status === "processing") {
        order.status = "created";
        order.save();
      } else {
        
        order.order_products.forEach(async (product) => {
          await Product.decrement({
            stock: product.units
          }, {
            where: {
              id: product.productId
            }
          });
        });
        
        order.status = "created";
        order.save();
      }
      
      transporter.sendMail({
        from: `"On The Rocks" <${GMAIL_APP_EMAIL}>`, // sender address
        to: order.user.email, // list of receivers
        subject: "Order successfully created", // Subject line
        text: "The payment is done and we received your order, we will be working on it from now, Thank you!", // plain text body
        html: `<b>click on the link to see your order: <a href="${FRONT}/order/${order.id}"> HERE </a> </b>`, // html body
      });
    } else {

      const order = await Order.findOne({
        where: {
          id: external_reference
        },
        include: [Order_products]
      });

      //uncomment when products support stock count
      order.order_products.forEach(async (product) => {
        await Product.decrement({
          stock: product.units
        }, {
          where: {
            id: product.productId
          }
        });
      });

      order.status = "processing";
      order.save();
    }

    return res.redirect(`${FRONT}/mercadopago/status/${payment_status}`);
  } catch (err) {
    next(err);
    return res.status(404).send(err);
  }
};
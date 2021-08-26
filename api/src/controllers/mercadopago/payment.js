const { Order, Payment_detail, Order_products, Product, User } = require("../../db");
const { FRONT, GMAIL_APP_EMAIL } = process.env;
const { transporter } = require("../../utils/nodemailer");
const mercadopago = require("../../utils/mercadopago/configure");

module.exports = async (req, res, next) => {
  try {
    const { data } = req.body;

    const response = await mercadopago.get(`/v1/payments/${data.id}`);

    const payment_id = parseInt(response.body.id);
    const payment_status = response.body.status;
    const external_reference = parseInt(response.body.external_reference);

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

      if(order.status !== "cancelled" && order.status !== "pending") {
        order.order_products.forEach(async (product) => {
          await Product.increment({
            stock: product.units
          }, {
            where: {
              id: product.productId
            }
          });
        });
      }

      if(order.status !== "cancelled") {
        transporter.sendMail({
          from: `"On The Rocks" <${GMAIL_APP_EMAIL}>`, // sender address
          to: order.user.email, // list of receivers
          subject: "Order cancelled", // Subject line
          text: "The payment has been rejected, please try again", // plain text body
          html: `<b>click on the link to see your order: <a href="${FRONT}/order/${order.id}"> HERE </a> </b>`, // html body
        });
      }
      
      order.status = "cancelled";
      order.save();

    } else if(payment_status === "approved") {
      
      const order = await Order.findOne({
        where: {
          id: external_reference
        },
        include: [Order_products, User]
      });
      
      if(order.status !== "created" && order.status !== "completed") {
        transporter.sendMail({
          from: `"On The Rocks" <${GMAIL_APP_EMAIL}>`, // sender address
          to: order.user.email, // list of receivers
          subject: "Order successfully created", // Subject line
          text: "The payment is done and we received your order, we will be working on it from now, Thank you!", // plain text body
          html: `<b>click on the link to see your order: <a href="${FRONT}/order/${order.id}"> HERE </a> </b>`, // html body
        });
      }

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
      
    } else {

      const order = await Order.findOne({
        where: {
          id: external_reference
        },
        include: [Order_products]
      });

      if(order.status === "pending") {
        order.order_products.forEach(async (product) => {
          await Product.decrement({
            stock: product.units
          }, {
            where: {
              id: product.productId
            }
          });
        });
      }

      order.status = "processing";
      order.save();
    }

    return res.status(200).send();
  } catch (err) {
    next(err);
    return res.status(409).send(err);
  }
};
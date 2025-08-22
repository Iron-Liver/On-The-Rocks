import {React, useEffect} from 'react'
import "./shipping.css";

function Shipping() {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
      

    return (
        <div className="Font">
            <h1 className="Title">Shipping information</h1>
            <br/>
            <br/>
<h2 className="SubtitleS">COVID-19 <i className="fas fa-virus" style={{color: "green"}}></i></h2>

<br/>
<br/>
<span className="Text">Due to the current Covid-19 lockdowns and increased parcel volumes some areas may see delays in expected delivery times.
<br/>
<br/>
Couriers during this pandemic for health and safety precautions may not require a signature and might process your order as an ATL (Authority to Leave). If this is the case a photo will be taken for proof of delivery.
<br/>
<br/>
We strongly recommend monitoring your tracking information to ensure someone is home at the time of delivery.
<br/>
<br/>
Please read the terms and conditions of delivery on the couriers website for the latest and most up-to-date information. </span>
<br/>
<br/>
<h2 className="SubtitleS">INSURANCE</h2>
<br/>
<br/>
<span className="Text">We always insure your orders at no extra cost to you which means you are always covered for any loss or damage.
<br/>
<br/>
If your parcel is taking too long or hasn't been updated and you think something has gone wrong or for any delivery assistance just contact us and we'll help you sort it out toot sweet.</span>
<br/>
<br/>
<h2 className="SubtitleS">FREE SHIPPING & NATIONAL FLAT RATE</h2>
<br/>
<br/>
<span className="Text">The free shipping promotion for 2 bottles is currently eligible for up to 25KG in weight, a minimum order amount of $199.00 and areas that are listed inside the link below.
<br/>
<br/>
The free shipping promotion for any 3 bottles is currently eligible for up to 25KG in weight and areas that are listed inside the link below.
<br/>
<br/>
The national flat rate for $9.50 also only applies to the post codes listed in the link below.
<br/>
<br/>
Please note the free shipping promotion is not eligible for PO boxes or parcel lockers.
<br/>
<br/>
View areas eligible for free shipping and national flat rate.</span>
<br/>
<br/>
<h2 className="SubtitleS">SHIPPING TERMS </h2>
<br/>
<br/><span className="Text">
Usually we dispatch your order the following business day however, please allow for up to 3 business days for handling (unless your product is stock on demand in which case it'll be dispatched according to the timeline specified on the product).
<br/>
<br/>
Deliveries are conducted during business hours, Monday - Friday only.
<br/>
<br/>
Excludes weekends and public holidays.
<br/>
<br/>
Transit times are estimated.
<br/>
<br/>
May be affected by factors out of our control.
<br/>
<br/>
If you have paid via PayPal e-cheque, your order will not be shipped until the payment has been approved from PayPal.</span>
<br/>
<br/>
<h2 className="SubtitleS">AUTHORITY TO LEAVE</h2>
<br/>
<br/>
<span className="Text">Alcohol deliveries with our couriers can have either a Signature on Delivery or be given Authority to Leave (ATL), and be delivered without a signature.
<br/>
<br/>
A driver may not deliver a parcel with ATL if they deem it unsafe to do so, and this is at their discretion.
<br/>
<br/>
Parcels with Signature on Delivery require a signature from someone over the age of 18. An identification check may be required if the individual looks under 25.
<br/>
<br/>
Drivers reserve the right to refuse delivery at any time.</span>
<br/>
<h2 className="SubtitleS">RETURNS </h2>
<br/>
<br/>
<span className="Text">To return your product, please contact us at ontherockscompanydrinks@gmail.com
<br/>
<br/>
You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.  
<br/>
<br/>
Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</span>
<br/>
<br/>
        </div>
    )
}

export default Shipping

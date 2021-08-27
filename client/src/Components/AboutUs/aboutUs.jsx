import "./aboutus.css";
import { useEffect, React } from 'react';

export const AboutUs = () => {

    useEffect(() => {
      window.scrollTo(0,0)
    }, [])
    
    return (
        <div className="Font">
            <h1 className="Title"> About Us </h1>
            <h3 className="Subtitle"> Welcome to On The Rocks ! </h3>
            <span className="Text"> 
On The Rocks is an independent self-made Argentinian family owned business providing premium and collectable ranges of spirits.
<br/>
<br/>
With over 30 years in the industry, our recent venture of going online was ignited by our passion for sourcing premium range spirits, because here at On The Rocks, we love to drink.
<br/>
<br/>
Our business philosophy is to continuously source new products to add to our extensive range of liquor to make your online shopping experience easy and continue to deliver great service.
<br/>
<br/>
So if you have a special occasion to purchase for, we believe we will have that bottle that will give you that wow factor.
<br/>
<br/>
We have access to a vast array of liquor, please do not hesitate to contact us via email on ontherockscompanydrinks@gmail.com if there is a particular bottle you have in mind but cannot locate on our website. We are confident that if you want it, we can get it. Put us to the test. </span>
<br/>
<br/>
<br/>
        </div>
    )
}

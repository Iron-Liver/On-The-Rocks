import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footerfat">
      <div className="footerContainer1">

        <div className="center1">
          <div className="social-test">
              <h4>Socials</h4>
                <ul className="social">
                  <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                  <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                  <li><i className="fa fa-github" aria-hidden="true"></i></li>
                </ul>
          </div>

            <div className="ContactContainer">
              <h4>Contact us</h4>
                <ul>
                  <li><i className="fas fa-phone-alt"> </i> +54 1153058082</li>
                  <li><i className="fas fa-envelope-open"></i> ontherockscompanydrinks@gmail.com </li>
                  <li><i className="fas fa-map-marker-alt"></i> Argentina, Buenos Aires</li>
                </ul>
            </div>
          </div>
            {/* <div>
              <h4 className="FMenu">Footer Menu</h4>
                
                  <Link to ="/aboutus" className="Aboutus" >About Us</Link>
                  <Link to ="/shipping" className="Shipping" >Shipping</Link>
                
            </div> */}
            
        </div>

     <div className="divisorFooter">
        <p style={{fontFamily:"Montserrat", fontSize: '11px', margin: '0', padding:'10px', width:'75%'}}>
          <b>© 2021 On The Rocks Pty Ltd</b> - Packaged Liquor Licence - 32057045 On the Rocks supports the responsible service of alcohol.  
          Under the Liquor Control Reform Act 1998 it is an offence to supply alcohol to a person under the age of<b> 18 </b> years.
        </p>
     </div>
    </div>

  )
}

export default Footer

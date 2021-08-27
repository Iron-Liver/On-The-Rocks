import React from 'react'
import './footer.css'
import logoCircle from '../../assets/on-the-rocks-circle.png'
import { Link }from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footerfat">
      <div className="footerContainer1">
        <div className="left-social-info">
          <div className="social-test">
            <h4>Socials</h4>
            <ul className="social">
              <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
              <li><i className="fa fa-twitter" aria-hidden="true"></i> </li>
              <li><a  rel="noreferrer" href="https://www.instagram.com/ontherockspremiumdrinks" target="_BLANK" className="Link"> <i className="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><i className="fa fa-github" aria-hidden="true"></i></li>
            </ul>
          </div>
          <div className="contact-us-footer">
            <h4>Contact us</h4>
            <ul>
              <li><i className="fas fa-phone-alt"> </i> +54 1153058082</li>
              <li><i className="fas fa-envelope-open"></i> ontherockscompanydrinks@gmail.com </li>
              <li><i className="fas fa-map-marker-alt"></i> Argentina, Buenos Aires</li>
            </ul>
          </div>
        </div>
        <div className="right-about-logo">
          <div className="info-footer-links">
            <h4>Info</h4>
            <div>
              <Link style={{textDecoration:'none', color:'#e6e6d8', fontSize:'15px', marginBottom:'5px'}} to="/aboutus" className="links-footer" >About Us</Link>
              <Link to="/shipping" style={{textDecoration:'none',fontSize:'15px', color:'#e6e6d8'}} className="links-footer" >Shipping</Link> 
            </div>
          </div> 
          <div className="info-footer-links">
            <h4>Devs</h4>
              <div>
                <Link style={{textDecoration:'none', color:'#e6e6d8', fontSize:'15px', marginBottom:'5px'}} to="/devs" className="links-footer" >About Us</Link>
                <Link to="/devs#contact" style={{textDecoration:'none',fontSize:'15px', color:'#e6e6d8'}} className="links-footer" >Contact</Link> 
              </div>
          </div> 
          <div>
            <div className="footer-logo-container">
              <img 
                alt="iconfooterOnTheRocks" 
                src={logoCircle} 
                style={{
                  width: "150px",
                  margin: "5px 15px 0 10px"
                }}
              />
            </div> 
          </div>
        </div>
      </div>
      <div>
        <p style={{fontFamily:"Montserrat", fontSize: '11px', margin: '0', padding:'10px', width:'100%', textAlign: "center", background: "rgb(230, 230, 216)"}}>
          <b>© 2021 On The Rocks Pty Ltd</b> - Packaged Liquor Licence - 32057045 On the Rocks supports the responsible service of alcohol.  
          Under the Liquor Control Reform Act 1998 it is an offence to supply alcohol to a person under the age of<b> 18 </b> years.
        </p>
      </div>
    </div>

  )
}

export default Footer

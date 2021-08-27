import React from 'react'
import './footer.css'
import iconfooter2 from '../../assets/on-the-rocks-circle.png'
import { Link }from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footerfat">
      <div className="footerContainer1">

        <div className="center1">
          <div className="social-contact-container">
          <div className="social-test">
              <h4>Socials</h4>
                <ul className="social">
                  <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                  <li><i className="fa fa-twitter" aria-hidden="true"></i> </li>
                  <li><a  rel="noreferrer" href="https://www.instagram.com/ontherockspremiumdrinks" target="_BLANK" className="Link"> <i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
            <div className="about-icon">
            <div className="about-us-footer">
              <h4 className="FMenu">Info</h4>
                  <div className="footerlinks-container">
                   <Link style={{textDecoration:'none', color:'#e6e6d8', fontSize:'15px', marginBottom:'5px'}} to="/aboutus" className="links-footer" >About Us</Link>
                   <Link to="/shipping" style={{textDecoration:'none',fontSize:'15px', color:'#e6e6d8'}} className="links-footer" >Shipping</Link> 
                  </div>
                
            </div> 

            <div className="about-us-footer">
              <h4 className="FMenu">Devs</h4>
                  <div className="footerlinks-container">
                   <Link style={{textDecoration:'none', color:'#e6e6d8', fontSize:'15px', marginBottom:'5px'}} to="/aboutus" className="links-footer" >About Us</Link>
                   <Link to="/shipping" style={{textDecoration:'none',fontSize:'15px', color:'#e6e6d8'}} className="links-footer" >Shipping</Link> 
                  </div>
                
            </div> 
              <div className="iconfooter">
                <img alt="iconfooterOnTheRocks" src={iconfooter2} style={{width:'150px'}}></img>

              </div> 
              </div>
        </div>
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

import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footerContainer1">

<div className="center1">
<div className="social-test">
  <h4>Socials</h4>
<ul className="social">
  <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
  <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
  <li><i className="fa fa-github" aria-hidden="true"></i>
</li>
  
</ul>
</div>
<div className="ContactContainer">
<h4>Contact us</h4>
<ul>
  <li><i class="fas fa-phone-alt"> </i> +54 1153058082</li>
  <li><i class="fas fa-envelope-open"></i> drinks@hotmail.com </li>
  <li><i class="fas fa-map-marker-alt"></i> Argentina, Buenos Aires</li>
</ul>
</div>
 
  </div>
  
  <div className="divisorFooter">
  </div>
    </div>
  )
}

export default Footer

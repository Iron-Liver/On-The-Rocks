import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div style={{
      background: "#372c2E", 
      width: "100%", 
      height: '150px'
    }}>
      <div className="containerShare">
        <div className="tip">Share</div>
        <div className="share-window">
          <div className="share-bar">
            <div className="trigger"><a href="#"><i class="fab fa-facebook-f"></i></a></div>
            <div className="trigger"><a href="#"><i class="fab fa-twitter"></i></a></div>
            <div className="trigger"><a href="#"><i class="fab fa-pinterest-p"></i></a></div>
            <div className="trigger"><a href="#"><i class="fab fa-linkedin-in"></i></a></div>
            <div className="trigger"><a href="#"><i class="fab fa-whatsapp"></i></a></div>
            <div className="trigger"><a href="#"><i class="fas fa-paper-plane"></i></a></div>
          </div>
        </div>
        <div className="share">
          <div className="trigger share-btn"><a href="#"><i class="fas fa-plus"></i> Share</a></div>
        </div>
        <div className="like">
          <div className="trigger like-btn"><a href="#"><i class="fas fa-heart"></i> Share</a></div>
        </div>
      </div>
    </div>
  )
}

export default Footer

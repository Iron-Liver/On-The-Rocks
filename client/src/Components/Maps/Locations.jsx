import React from 'react'

const Locations = () => {
    return (
        <div>
            <div className="divider-page">
            <div className="dividers"></div>
            <h1 style={{color:'black'}}>Branch Offices</h1>
            <div className="dividers"></div>
          </div>      
            

            <div style={{marginTop:'45px', marginBottom:'150px', boxShadow:'0 10px 20px 0 black'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.710382262643!2d-76.52441068517888!3d3.420561352377885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6c11a460335%3A0xcd56ac08f2d4742a!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1629477595693!5m2!1ses!2sco" title="Location" width="100%" height="400" style={{ border: 0}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Locations

import React from 'react'
import './Locations.css'


const Locations = () => {
    return (
        <div className="divLocation">
            <div className="divMaps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.84593375704!2d-76.53803298517884!3d3.3877789525838984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1432114369f%3A0x7370d18bee059067!2sAquarela%20Centro%20Comercial!5e0!3m2!1ses!2sco!4v1629912712969!5m2!1ses!2sco" title="Cali" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="divMaps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5932328485324!2d-58.39606358459223!3d-34.58915766423532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaa28613e5a1%3A0xe3bdc100e90408d8!2sVicente%20L%C3%B3pez%202050%2C%20C1113%20CABA%2C%20Argentina!5e0!3m2!1ses!2sco!4v1629912508105!5m2!1ses!2sco" title="BuenosAires" width="100%" height="400" style={{ border: 0}} allowFullScreen="" loading="lazy"></iframe>
            </div>                
        </div>
    )
}

export default Locations

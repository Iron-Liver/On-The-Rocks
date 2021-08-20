import React from "react";
import { motion } from "framer-motion"
import './cuponRoulette.css'

export const CuponRoulette = () => {

    const [state,setState] = React.useState(true)
    const [degrees,setDegrees] = React.useState(0)
    const [realDegrees,setRealDegrees] = React.useState(0)

    const variants = {
        start : {
            pointerEvents: 'none',
            // transition: 'all 10s ease-out',
            transform: `rotate(${degrees}deg)`
        },
        end : {
            pointerEvents: 'auto',
            // transition: 'none',
            transform: `rotate(${realDegrees}deg)`
        }
    }

    const wheelStart = async (e) => {
        e.preventDefault()
        await setDegrees(Math.floor(5000 + Math.random() * 5000))
        await setTimeout(async() => {
            await setRealDegrees(degrees % 360)
            await setState(false);
            console.log('10s',degrees,realDegrees)
        }, 15000)
        await setState(true);
        console.log(degrees,realDegrees)
    }
    

    

    // wheel.addEventListener('transitionend', () => {
    //     startButton.style.pointerEvents = 'auto';
    //     wheel.style.transition = 'none';
    //     const realDegrees = degrees % 360;
    //     wheel.style.transform = `rotate(${realDegrees}deg)`
    // })


    return (
        <div>
            <h1>Cupon Roulette</h1>
            <div className="roulette-container">
                <motion.img
                    variants={variants}
                    animate={state ? "start" : "end"}
                    transition={state ? {duration:10} : {duration:0}}
                    className="roulette"
                    src="https://res.cloudinary.com/dpw5docvm/image/upload/v1629446175/Roulette_cuwthy.png"
                    alt="roulette"
                />
                <img
                    className="marker"
                    src="https://res.cloudinary.com/dpw5docvm/image/upload/v1629446169/Roulette_Arrow_xnecnv.png"
                    alt="roulette_arrow"
                />
            </div>
            <input type='button' onClick={wheelStart} className="button" value='Spin'/>
        </div>
    );
};
export default CuponRoulette;

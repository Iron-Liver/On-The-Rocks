import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import "./wheelOfCoupons.css";
import audio from "./Wheel_of_cupons.mp3";
import { Button } from "@material-ui/core";
import { getCoins, removeCoin } from "../../Redux/Users/userActions";
import verifyUser from '../../Utils/verifyUser'
export const WheelOfCoupons = () => {
    const currentUser = verifyUser()
    const dispatch = useDispatch();
    const { coins } = useSelector((state) => state.userReducer);
    const [muted, setMuted] = React.useState(false);
    const [idle, setIdle] = React.useState(true);
    const [state, setState] = React.useState();
    const [degrees, setDegrees] = React.useState(0);
    const cycles = 15 * 360;
    React.useEffect(
        () => {
            dispatch(getCoins(currentUser?.id));
        }, // eslint-disable-next-line
        [idle, dispatch]
    );
    const variants = {
        idle: {},
        start: {
            pointerEvents: "none",
            transform: `rotate(${degrees + cycles}deg)`,
        },
        end: {
            pointerEvents: "auto",
            transform: `rotate(${degrees}deg)`,
        },
    };
    const generateAward = () => {
        const percent = Math.ceil(Math.random() * 100);
        let discount;
        console.log(percent);
        switch (true) {
            case percent <= 1:
                discount = 50;
                // 180 = 160 ~ 200
                setDegrees(Math.floor(Math.random() * (200 - 160 + 1)) + 160);
                break;
            case percent <= 5:
                discount = 25;
                // 45 = 25 ~ 65
                setDegrees(Math.floor(Math.random() * (65 - 25 + 1)) + 25);
                break;
            case percent <= 15:
                discount = 20;
                // 225 = 205 ~ 245
                setDegrees(Math.floor(Math.random() * (245 - 205 + 1)) + 205);
                break;
            case percent <= 30:
                discount = 15;
                // 135 = 115 ~ 155
                setDegrees(Math.floor(Math.random() * (155 - 115 + 1)) + 115);
                break;
            case percent <= 40:
                discount = 10;
                // 315 = 295 ~ 335
                setDegrees(Math.floor(Math.random() * (335 - 295 + 1)) + 295);
                break;
            case percent <= 75:
                discount = 5;
                // 270 = 250 ~ 290
                setDegrees(Math.floor(Math.random() * (290 - 250 + 1)) + 250);
                break;
            case percent <= 95:
                discount = 2;
                // 90 = 70 ~ 110
                setDegrees(Math.floor(Math.random() * (110 - 70 + 1)) + 70);
                break;
            default:
                discount = 0;
                // 360 = 340 ~ 20
                if (Math.random() < 0.5) {
                    setDegrees(Math.floor(Math.random() * (20 - 0 + 1)) + 0);
                } else {
                    setDegrees(
                        Math.floor(Math.random() * (360 - 340 + 1)) + 340
                    );
                }
                break;
        }
        return discount;
    };
    const playAudio = () => {
        new Audio(audio).play();
    };
    const addCoupon = () => {
        //Here is where i would add a coupon to user but we dont have any coupon system yet
    };
    const spin = () => {
        dispatch(removeCoin(currentUser?.id));
        if (!muted) playAudio();
        const discount = generateAward();
        setState(true);
        setIdle(false);
        setTimeout(async () => {
            if (discount) {
                alert(`Congratulations! You got a %${discount} discount!`);
                addCoupon();
                setState(false);
                setDegrees(0);
                setTimeout(() => {
                    setIdle(true);
                }, 2000);
            } else {
                alert("Thats so sad! Maybe you ll get it another time c:");
                setState(false);
                setDegrees(0);
                setTimeout(() => {
                    setIdle(true);
                }, 2000);
            }
        }, 10000);
    };
    return (
        <div>
            <h1 className="game-title">Coupon Roulette</h1>
            <div className="game-container">
                <div className="game-instructions">
                    <h2 className="game-instructions-head">How to play</h2>
                    <p className="game-instructions-content">
                        Just press the button and close your eyes!
                    </p>
                    <h2 className="game-instructions-head">
                        How to get more coins
                    </h2>
                    <p className="game-instructions-content">
                        You will get coins every $1000 spent.
                    </p>
                    <p className="game-instructions-content">¿Cool right?</p>
                </div>
                <div className="roulette-container">
                    <div className="spinner-container">
                        <motion.img
                            variants={variants}
                            animate={idle ? "idle" : state ? "start" : "end"}
                            transition={
                                state
                                    ? { duration: 8.897, ease: "easeOut" }
                                    : { duration: 2, ease: "easeOut" }
                            }
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
                    <span>Remaining coins: {coins}</span>
                    <div>
                        <input
                            type="checkbox"
                            value={muted}
                            name="mute"
                            onChange={(e) => setMuted(e.target.checked)}
                        />{" "}
                        <i
                            class={
                                muted
                                    ? "fas fa-volume-mute"
                                    : "fas fa-volume-off"
                            }
                        />
                    </div>
                    <Button
                        classes="button"
                        size="large"
                        disabled={!idle}
                        variant="outlined"
                        color="primary"
                        type="button"
                        onClick={spin}
                        className="button"
                    >
                        Spin it!
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default WheelOfCoupons;

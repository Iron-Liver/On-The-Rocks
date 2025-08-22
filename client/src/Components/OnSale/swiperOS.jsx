import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperOS.css";
import SwiperCard from "./swiperCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Autoplay,
} from "swiper/modules";
import { getWishlist } from "../../Redux/Wishlist/wishlistActions";
import { getProducts } from "../../Redux/Products/productsActions";
import { useEffect } from "react";


function SwiperOS() {
    const { Products } = useSelector((state) => state.productReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWishlist());
        dispatch(getProducts());
    }, [dispatch]);

    var sale = Products?.filter((spirit) => spirit.onSale !== null);

    return (
        <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="swiper"
            slidesPerView={1}
            navigation
            spaceBetween={5}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 6000,
            }}
            loop={true}
        >
            {sale.map((spirit) => (
                <SwiperSlide key={spirit.id}>
                    <SwiperCard spirit={spirit} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperOS;

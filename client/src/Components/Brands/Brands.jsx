import {React, useEffect }from "react"
import './Brands.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";



export default function Brands() {

  useEffect(() => {
    Aos.init({duration:100})
  }, []);


  return (
    <div className="brandContent">
              <ul className="grid">
          {/* <li>
            <a href="#">
              <img src="https://bodegagarzon.com/wp-content/uploads/2018/08/vino-blanco-afrutado-750x450.png" data-aos="" className="imege1" alt=""/>
              <span className="description">White Wines</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F05%2F28%2Fsummer-chilled-red-wines-decoy-zinfandel-FT-BLOG0520.jpg" data-aos=""  className="imege2" alt=""/>
            </a>
            <span className="description">Red Wines</span>
          </li> */}
          <li>
            <Link to="/products?category=whisky">
              <img src="https://images.alphacoders.com/109/thumb-1920-1093028.jpg" data-aos="" className="imege3" alt=""/>
              <span className="description">Whisky</span>
            </Link>      
          </li>
          <li>
          <Link to="/products?category=Vodka">
            <img src="https://wallpaperaccess.com/full/2728194.jpg" data-aos="" className="imege4" alt=""/>
            <span className="description">Vodka</span>
          </Link>
          </li>
          <li>
            <Link to="/products?category=Tequila">
              <img src="https://lh5.googleusercontent.com/-yPvuOQ-NAKk/TYw2nn8iI4I/AAAAAAAAACU/6LuxAJDCefo/s1600/jose-cuervo-black1.jpg" data-aos="" alt=""/>
              <span className="description">Tequila</span>
            </Link>
          </li>
          <li>
            <Link to="/products?category=Ron">
              <img data-aos="" src="https://c1.wallpaperflare.com/preview/647/327/753/rum-alcohol-alcoholic-beverage-drink.jpg" alt=""/>
              <span className="description">Ron</span>
            </Link>
          </li>
          <li>
            <Link to="/products?category=Gin">
              <img  data-aos="" src="https://beffshuff.com/wp-content/uploads/2019/12/DSC_0687.jpg" alt=""/>
              <span className="description">Gin</span>
            </Link>
          </li>    
          <li>
            <Link to="/products?category=Brandy">
              <img data-aos="" src="https://wallpapercave.com/wp/wp3346116.jpg" alt="" />
              <span className="description">Brandy</span>
            </Link>
          </li>
          {/* <li>
            <a href="#">
              <img data-aos="" src="https://d.newsweek.com/en/full/1376318/american-made-sparkling-wine-rich-history-it-tastemeet-schramsberg-vineyards.png?w=1600&h=900&q=88&f=81b02a0adb1914b9adddc0b5e8d35d05" alt="" />
              <span className="description">Sparkling wines</span>
            </a>
          </li> */}
          
      </ul>
    </div>
  )
}

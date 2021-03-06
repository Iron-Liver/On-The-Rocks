
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//User imports
import LoginUser from "./Components/Users/UserLogin/userLogin";
import CreateUser from "./Components/Users/UserAdd/createUser";
import ResetPassword from "./Components/Users/UserResetPassword/resetPassword";
import Admin2FA from "./Components/Users/Admin2FA/admin2FA";
//Category imports
import CategoryDetail from "./Components/Categories/CategoryDetail/categoryDetail";
//Product imports
import Products from './Components/Products/products';
import ProductDetail from './Components/Products/productDetail';
//Order imports
import OrderDetail from "./Components/Orders/OrderDetail/orderDetail";
//Private routes imports
import AuthRoute from "./Components/PrivateRoutes/AuthRoute";
import UserRoute from "./Components/PrivateRoutes/UserRoute";
import AdminRoute from "./Components/PrivateRoutes/AdminRoute";
//Profile imports
import UserProfile from "./Components/Profile/UserProfile";
import AdminProfile from "./Components/Profile/AdminProfile";
//Misc imports
import NavBar from "./Components/NavBar/navBar";
import landingPage from "./Components/LandingPage/landingPage";
import AdminFeatures from "./Components/Admin/AdminFeatures";
import Error404 from "./Components/Error404/Error404";
import CreateOrder from "./Components/Orders/CreateOrder/createOrder";
import MercadoPago from "./Components/Mercadopago/Mercadopago";
// import Wishlist from "./Components/Wishlist/wishlist";
import { WheelOfCoupons } from './Components/Game/wheelOfCoupons';
import { ThemeProvider } from '@material-ui/core';
import theme from './Utils/theme';
import Footer from './Components/Footer/footer';
import ChatBotApp from "./Components/Chatbot/ChatBot";
import MercadopagoHelp from "./Components/Mercadopago/MercadopagoHelp";
import { AboutUs } from './Components/AboutUs/aboutUs';
import Shipping from './Components/Shipping/shipping';

const AppGlobal = () => {

  return (
      <Router>
        <ThemeProvider theme={theme}>
          <NavBar />    
          <ChatBotApp />       
          <Switch>
            <Route exact path="/" component={landingPage} />            
            <Route exact path="/login" component={LoginUser} />
            <Route exact path="/register" component={CreateUser} />
            <Route path="/verify/password" component={ResetPassword} />
            <Route path="/verify/admin" component={Admin2FA} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/createOrder" component={CreateOrder} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Route exact path="/category/:id" component={CategoryDetail} />
            <AuthRoute exact path="/order/:id" component={OrderDetail} />
            <AuthRoute exact path="/status/mercadopago/:status" component={MercadopagoHelp} />
            <AuthRoute exact path="/mercadopago/:orderId" component={MercadoPago} />
            <UserRoute path="/profile/:userId" component={UserProfile} />
            <AdminRoute path="/private/profile/:userId" component={AdminProfile} />
            <AdminRoute path="/private" component={AdminFeatures} />
            <Route exact path="/roulette" component={WheelOfCoupons} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/shipping" component={Shipping} />
            <Route path="*" component={Error404} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
  );
};

export default AppGlobal;

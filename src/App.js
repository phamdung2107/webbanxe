import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import "./App.css";
import LoginSignup from "./components/Authentication/LoginSignup";
import Search from "./components/Product/Search";
import ProductDetails from "./components/Product/ProductDetails";
import Cart from "./components/cart/Cart";
import Favourites from "./components/cart/Favourites";
import Products from "./components/Product/Products";
import UserData from "./components/more/UserData";
import Lichhen from "./components/more/Lichhen";
import CommingSoon from "./components/more/CommingSoon";
import Profile from "./components/user/Profile";
import UpdatePassword from "./components/user/UpdatePassword";
import EditProfile from "./components/user/EditProfile";

const user = [
  {
    name: "John",
    avatar: {
      url: "http://test.com/",
    },
  },
];

function App() {
  let isAuthenticated = true;
  return (
    <Router>
      {isAuthenticated && <UserData user={user} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginSignup />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:2" element={<ProductDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/faq" element={<CommingSoon />} />
        <Route exact path="/favourites" element={<Favourites />} />
        <Route exact path="/lichhen/:id" element={<Lichhen />} />
        <Route path="/me" element={<Profile />} />
        <Route exact path="/me/update" element={<UpdatePassword />} />
        <Route exact path="/me/update/info" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

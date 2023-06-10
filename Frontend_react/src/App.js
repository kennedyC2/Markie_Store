import { Routes, Route } from "react-router-dom";
import "./assets/css/app.css";
import Container from "./components/main";
import Home from "./components/home";
import Cart from "./components/cart";
import Wishlist from "./components/wishlist";
import Product from "./components/product";
import Admin from "./components/admin/main";
import User from "./components/user/main";
import Brooches from "./components/user/components/brooches";
import Scrubs from "./components/user/components/scrubs";
import CardHolders from "./components/user/components/cardHolder";
import Coats from "./components/user/components/coats";
import PenTorch from "./components/user/components/penTorch";
import ScrubCaps from "./components/user/components/scrubCaps";
import Crocs from "./components/user/components/crocs";
import Sneakers from "./components/user/components/sneakers";
import Shirts from "./components/user/components/tShirt";
import Login from "./components/login";
import SignUp from "./components/SignUp";
import Verify from "./components/verify";
import Profile from "./components/profile";

const App = () => {
    return (
        <div className="ext_cnt w-100 min-vh-100">
            <Routes>
                <Route path="/" element={<Container />}>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/medical_brooches" exact element={<Brooches />} />
                    <Route path="/cart" exact element={<Cart />} />
                    <Route path="/wishlist" exact element={<Wishlist />} />
                    <Route path="/profile" exact element={<Profile />} />
                    <Route path="/product/:collection/:productID/:page" exact element={<Product />} />
                    <Route path="/category" element={<User />}>
                        <Route path="/category/scrubs" exact element={<Scrubs />} />
                        <Route path="/category/medical_brooches" exact element={<Brooches />} />
                        <Route path="/category/id_card_holder" exact element={<CardHolders />} />
                        <Route path="/category/coats" exact element={<Coats />} />
                        <Route path="/category/crocs" exact element={<Crocs />} />
                        <Route path="/category/pen_torch" exact element={<PenTorch />} />
                        <Route path="/category/scrub_caps" exact element={<ScrubCaps />} />
                        <Route path="/category/sneakers" exact element={<Sneakers />} />
                        <Route path="/category/inscription_t-shirts" exact element={<Shirts />} />
                    </Route>
                </Route>
                <Route path="/admin" exact element={<Admin />} />
                <Route path="/account/login" exact element={<Login />} />
                <Route path="/account/create" exact element={<SignUp />} />
                <Route path="/account/verification" exact element={<Verify />} />
            </Routes>
        </div>
    );
};

export default App;

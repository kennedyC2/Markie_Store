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
import AdminBrooches from "./components/admin/component/brooches";
import AdminCardHolder from "./components/admin/component/cardHolder";
import AdminCoats from "./components/admin/component/coats";
import AdminCrocs from "./components/admin/component/crocs";
import AdminTorch from "./components/admin/component/penTorch";
import AdminCaps from "./components/admin/component/scrubCaps";
import AdminScrubs from "./components/admin/component/scrubs";
import AdminSneakers from "./components/admin/component/sneakers";
import AdminShirts from "./components/admin/component/tShirt";
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
                <Route path="/admin" exact element={<Admin />}>
                    <Route path="/admin/product/scrubs" exact element={<AdminScrubs />} />
                    <Route path="/admin/product/brooches" exact element={<AdminBrooches />} />
                    <Route path="/admin/product/cardHolder" exact element={<AdminCardHolder />} />
                    <Route path="/admin/product/coats" exact element={<AdminCoats />} />
                    <Route path="/admin/product/crocs" exact element={<AdminCrocs />} />
                    <Route path="/admin/product/penTorch" exact element={<AdminTorch />} />
                    <Route path="/admin/product/scrubCaps" exact element={<AdminCaps />} />
                    <Route path="/admin/product/sneakers" exact element={<AdminSneakers />} />
                    <Route path="/admin/product/shirts" exact element={<AdminShirts />} />
                </Route>
                <Route path="/account/login" exact element={<Login />} />
                <Route path="/account/create" exact element={<SignUp />} />
                <Route path="/account/verification" exact element={<Verify />} />
            </Routes>
        </div>
    );
};

export default App;

import { Routes, Route } from "react-router-dom";
import "./assets/css/app.css";
import Header from "./components/header";
import Home from "./components/home";
import Category from "./components/category";
import Cart from "./components/cart";
import Footer from "./components/footer";
import Wishlist from "./components/wishlist";
import Product from "./components/product";

const App = () => {
    return (
        <div className="ext_cnt w-100 min-vh-100">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/product" element={<Product />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;

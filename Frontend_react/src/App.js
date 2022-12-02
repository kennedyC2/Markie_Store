import "./assets/css/app.css";
import "./assets/js/app.js";
import Footer from "./components/footer";
import Header from "./components/header";

const App = () => {
    return (
        <div className="ext_cnt w-100 min-vh-100">
            <Header />
            <Footer />
        </div>
    );
};

export default App;

// import { useEffect } from "react";
import { Link } from "react-router-dom";
import scrub4 from "../assets/images/scrub 4.jpg";
import crocs2 from "../assets/images/crocs 2.png";
import scrub5 from "../assets/images/scrub 5.jpg";
import scrub1 from "../assets/images/scrub 1.jpg";
import pic1 from "../assets/images/pic 1.png";
import pic5 from "../assets/images/pic 5.jpg";
import pic2 from "../assets/images/pic 2.jpg";
import crocs1 from "../assets/images/crocs r1.jpg";
import brooch1 from "../assets/images/b 1.jpg";

const Home = () => {
    return (
        <div className="home m-auto">
            {/* Level One */}
            <div className="lv_1 container w_1200 py-3 d-flex justify-content-between">
                {/* Banner Carousel */}
                <div>
                    <div id="hm_banner" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner h-100 w-100">
                            <div className="carousel-item h-100 w-100 active">
                                <img src={scrub4} className="d-block w-100 h-100" alt="..." />
                            </div>
                            <div className="carousel-item h-100 w-100">
                                <img src={crocs2} className="d-block w-100 h-100" alt="..." />
                            </div>
                            <div className="carousel-item h-100 w-100">
                                <img src={scrub5} className="d-block w-100 h-100" alt="..." />
                            </div>
                            <div className="carousel-item h-100 w-100">
                                <img src={scrub1} className="d-block w-100 h-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner left */}
                <div className="ad1 d-flex flex-column justify-content-between">
                    <div>
                        <img src={scrub4} className="d-block w-100 h-100" alt="..." />
                    </div>
                    <div>
                        <img src={scrub1} className="d-block w-100 h-100" alt="..." />
                    </div>
                    <div>
                        <img src={scrub5} className="d-block w-100 h-100" alt="..." />
                    </div>
                </div>
            </div>

            {/* Level Three */}
            <div className="row lv_3 w_1200">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">New Arrivals</div>
                    <div className="intro line"></div>
                </div>

                {/* Cards */}
                <div id="newArrival" className="carousel slide m-auto" data-bs-ride="carousel">
                    <div className="carousel-inner w-100 h-100">
                        <div className="carousel-item active w-100 h-100">
                            <div className="grid">
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item w-100 h-100">
                            <div className="grid">
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item w-100 h-100">
                            <div className="grid">
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item w-100 h-100">
                            <div className="grid">
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item w-100 h-100">
                            <div className="grid">
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic1} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#newArrival" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#newArrival" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* Level Four */}
            <div className="row lv_4 w_1200">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">Trending</div>
                    <div className="intro line"></div>
                </div>

                {/* Cards */}
                <div id="trending" className="carousel slide m-auto" data-bs-ride="carousel">
                    <div className="carousel-inner w-100 h-100">
                        <div className="carousel-item active w-100 h-100">
                            <div className="grid">
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item w-100 h-100">
                            <div className="grid">
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item w-100 h-100">
                            <div className="grid">
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item w-100 h-100">
                            <div className="grid">
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item w-100 h-100">
                            <div className="grid">
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="imgcont">
                                        <Link to="/product" className="d-inline-block text-decoration-none">
                                            <img src={pic5} width="100%" height="100%" className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                            <h5 className="card-title ps-2">Purple Scrub Top</h5>
                                            <p className="card-text ps-2">&#x20A6; 5000</p>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <Link href="#" className="btn col-9 shadow">
                                                ADD TO CART
                                            </Link>
                                            <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#trending" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#trending" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* Banner */}
            <div className="banner"></div>

            {/* Level Five */}
            <div className="row lv_5 w_1200">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">Scrubs</div>
                    <div className="intro line"></div>
                </div>

                {/* Cards */}
                <div className="grid">
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={pic2} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>
                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title">Green Scrub Top</h5>
                                <p className="card-text">&#x20A6; 8000</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={pic2} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>
                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title">Green Scrub Top</h5>
                                <p className="card-text">&#x20A6; 8000</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={pic2} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>
                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title">Green Scrub Top</h5>
                                <p className="card-text">&#x20A6; 8000</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={pic2} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>
                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title">Green Scrub Top</h5>
                                <p className="card-text">&#x20A6; 8000</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={pic2} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>
                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title">Green Scrub Top</h5>
                                <p className="card-text">&#x20A6; 8000</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={pic2} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>
                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title">Green Scrub Top</h5>
                                <p className="card-text">&#x20A6; 8000</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={pic2} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>
                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title">Green Scrub Top</h5>
                                <p className="card-text">&#x20A6; 8000</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={pic2} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>
                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title">Green Scrub Top</h5>
                                <p className="card-text">&#x20A6; 8000</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={pic2} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>
                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title">Green Scrub Top</h5>
                                <p className="card-text">&#x20A6; 8000</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={pic2} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>
                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title">Green Scrub Top</h5>
                                <p className="card-text">&#x20A6; 8000</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Level Six */}
            <div className="row lv_6 w_1200">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">Crocs</div>
                    <div className="intro line"></div>
                </div>

                {/* Cards */}

                <div className="grid">
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={crocs1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Italian Crocs</h5>
                                <p className="card-text ps-2">&#x20A6; 3500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={crocs1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Italian Crocs</h5>
                                <p className="card-text ps-2">&#x20A6; 3500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={crocs1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Italian Crocs</h5>
                                <p className="card-text ps-2">&#x20A6; 3500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={crocs1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Italian Crocs</h5>
                                <p className="card-text ps-2">&#x20A6; 3500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={crocs1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Italian Crocs</h5>
                                <p className="card-text ps-2">&#x20A6; 3500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={crocs1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Italian Crocs</h5>
                                <p className="card-text ps-2">&#x20A6; 3500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={crocs1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Italian Crocs</h5>
                                <p className="card-text ps-2">&#x20A6; 3500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={crocs1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Italian Crocs</h5>
                                <p className="card-text ps-2">&#x20A6; 3500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={crocs1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Italian Crocs</h5>
                                <p className="card-text ps-2">&#x20A6; 3500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={crocs1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Italian Crocs</h5>
                                <p className="card-text ps-2">&#x20A6; 3500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Level Seven */}
            <div className="row lv_7 w_1200">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">Brooches</div>
                    <div className="intro line"></div>
                </div>

                {/* Cards */}
                <div className="grid">
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={brooch1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Medical</h5>
                                <p className="card-text ps-2">&#x20A6; 1500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={brooch1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Medical</h5>
                                <p className="card-text ps-2">&#x20A6; 1500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={brooch1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Medical</h5>
                                <p className="card-text ps-2">&#x20A6; 1500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={brooch1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Medical</h5>
                                <p className="card-text ps-2">&#x20A6; 1500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={brooch1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Medical</h5>
                                <p className="card-text ps-2">&#x20A6; 1500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={brooch1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Medical</h5>
                                <p className="card-text ps-2">&#x20A6; 1500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={brooch1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Medical</h5>
                                <p className="card-text ps-2">&#x20A6; 1500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={brooch1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Medical</h5>
                                <p className="card-text ps-2">&#x20A6; 1500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={brooch1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Medical</h5>
                                <p className="card-text ps-2">&#x20A6; 1500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgcont">
                            <Link to="/product" className="d-inline-block text-decoration-none">
                                <img src={brooch1} width="100%" height="100%" className="card-img-top" alt="..." />
                            </Link>
                        </div>

                        <div className="card-body">
                            <Link to="/product" className="d-inline-block px-2 pb-3 text-decoration-none">
                                <h5 className="card-title ps-2">Medical</h5>
                                <p className="card-text ps-2">&#x20A6; 1500</p>
                            </Link>
                            <div className="d-flex justify-content-between">
                                <Link href="#" className="btn col-9 shadow">
                                    ADD TO CART
                                </Link>
                                <Link href="#" className="btn px-1 wl col-2 shadow" title="Add to wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

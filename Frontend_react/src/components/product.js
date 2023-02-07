import { Link } from "react-router-dom";
import pic1 from "../assets/images/pic 1.png";
import pic6 from "../assets/images/pic 6.jpg";
import pic7 from "../assets/images/pic 7.jpg";

const Product = () => {
    return (
        <div className="product body m-auto pt-3">
            <div className="container w_1200">
                <div>
                    <div>
                        <p className="my-4 px-1 heading">Scrub</p>
                    </div>
                    <div className="min-h-50 mt-4 d-flex justify-content-between">
                        <div className="col-lg-8 h-auto d-flex justify-content-between pt-2">
                            <div className="pd_lft-1 col-md-5 col-lg-6">
                                {/* Carousel */}
                                <div id="item_dsp1" className="carousel slide carousel-fade w-100" data-bs-ride="carousel">
                                    <div className="carousel-inner h-100">
                                        <div className="carousel-item h-100 w-100 active">
                                            <img src={pic6} width="100%" height="100%" alt="..." />
                                        </div>
                                        <div className="carousel-item h-100 w-100">
                                            <img src={pic7} width="100%" height="100%" alt="..." />
                                        </div>
                                        <div className="carousel-item h-100 w-100">
                                            <img src={pic6} width="100%" height="100%" alt="..." />
                                        </div>
                                        <div className="carousel-item h-100 w-100">
                                            <img src={pic7} width="100%" height="100%" alt="..." />
                                        </div>
                                        <div className="carousel-item h-100 w-100">
                                            <img src={pic6} width="100%" height="100%" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#item_dsp1" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#item_dsp1" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div id="item_dsp2" className="w-100 d-flex justify-content-between flex-nowrap">
                                    <div className="item">
                                        <img src={pic6} width="100%" height="100%" alt="..." />
                                    </div>
                                    <div className="item">
                                        <img src={pic7} width="100%" height="100%" alt="..." />
                                    </div>
                                    <div className="item">
                                        <img src={pic6} width="100%" height="100%" alt="..." />
                                    </div>
                                    <div className="item">
                                        <img src={pic7} width="100%" height="100%" alt="..." />
                                    </div>
                                    <div className="item">
                                        <img src={pic6} width="100%" height="100%" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className="pd_lft-2 col-md-5 col-lg-5 h-100">
                                <div className="text-start px-1 pt-4">
                                    <p className="text-uppercase">FEMALE SCRUB TOP</p>
                                    <p className="mb-4">
                                        Brand: <span>D&G</span>
                                    </p>
                                    <p className="prc mb-4">&#x20A6; 5800</p>

                                    <div className="mb-4">
                                        <p>Colour:</p>
                                        <ul className="c_list">
                                            <li style={{ backgroundColor: "silver" }}></li>
                                            <li style={{ backgroundColor: "purple" }}></li>
                                            <li style={{ backgroundColor: "pink" }}></li>
                                            <li style={{ backgroundColor: "yellow" }}></li>
                                            <li style={{ backgroundColor: "mediumseagreen" }}></li>
                                            <li style={{ backgroundColor: "navy" }}></li>
                                        </ul>
                                    </div>

                                    <div className="mb-4">
                                        <p>Size:</p>
                                        <ul className="s_list">
                                            <li>S</li>
                                            <li>M</li>
                                            <li>L</li>
                                            <li>XL</li>
                                            <li>XXL</li>
                                        </ul>
                                    </div>

                                    <div className="mb-4">
                                        <p>Quantity:</p>
                                        <div className="input-group my-auto">
                                            <span className="input-group-text" id="minus">
                                                -
                                            </span>
                                            <input type="number" className="form-control text-center" placeholder="1" aria-label="Username" aria-describedby="basic-addon1" />
                                            <span className="input-group-text" id="plus">
                                                +
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 px-1 pt-4">
                            <div className="text-uppercase pt-2 pb-3 border-bottom border-2">Summary</div>
                            <div className="d-flex justify-content-between my-4 border-bottom border-1 pb-3">
                                <div className="col-5">Subtotal:</div>
                                <div className="col-5 text-end">&#x20A6; 20,800</div>
                            </div>
                            <div className="my-4">
                                <p className="mb-3">Location:</p>
                                <div className="dropdown-center">
                                    <button className="btn dropdown-toggle w-100 mb-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Owerri
                                    </button>
                                    <ul className="dropdown-menu w-100">
                                        <li className="dropdown-item">Owerri</li>
                                        <li className="dropdown-item">Abuja</li>
                                        <li className="dropdown-item">Kogi</li>
                                        <li className="dropdown-item">Enugu</li>
                                        <li className="dropdown-item">Lagos</li>
                                        <li className="dropdown-item">Benin</li>
                                        <li className="dropdown-item">Port Harcourt</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between my-4 border-bottom border-1 pb-4">
                                <div className="col-5">Delivery Fee:</div>
                                <div className="col-5 text-end">&#x20A6; 1,800</div>
                            </div>
                            <div className="c-btm">
                                <div className="w-100 d-flex justify-content-between border-bottom border-1 pb-2">
                                    <p>Total:</p>
                                    <p>&#x20A6; 22,600</p>
                                </div>
                                <div className="pt-1 pb-3">
                                    <div className="form-check text-start ps-4 pt-4 pb-3">
                                        <input className="form-check-input me-3" type="checkbox" value="" id="T&C" />
                                        <label className="form-check-label" htmlFor="T&C">
                                            {" "}
                                            I agree with the <span className="text-decoration-underline">Terms and Conditions</span>{" "}
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-md w-100 py-2 mb-3">
                                        CHECKOUT
                                    </button>{" "}
                                    <br />
                                    <Link href="./cart.html" className="btn btn-md w-100 py-2">
                                        RETURN TO HOMEPAGE
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <p className="my-5 px-1 heading">You might also like these:</p>
                    </div>
                    {/* Cards */}
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
        </div>
    );
};

export default Product;

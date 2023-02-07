import { Link } from "react-router-dom";
import pic1 from "../assets/images/pic 1.png";
import pic8 from "../assets/images/pic 8.png";
import pic5 from "../assets/images/pic 5.jpg";
import pic6 from "../assets/images/pic 6.jpg";
import pic4 from "../assets/images/pic 4.png";
import { useEffect } from "react";

const Cart = () => {
    useEffect(() => {
        const c_canvas = document.querySelector("div#cartlist.offcanvas");
        const c_canvas_close = document.querySelector("div#cartlist.offcanvas > div.offcanvas-header button");

        if (c_canvas.classList.contains("show")) {
            c_canvas_close.click();
        }

        return;
    });
    return (
        <div className="cartlist body m-auto pt-3">
            <div className="container w_1200">
                <div>
                    <p className="my-4 px-1 heading">My Cart List</p>
                </div>
                <div className="mt-4 d-flex justify-content-between">
                    <div className="col-lg-8 pt-2">
                        <div className="d-none d-lg-flex w-100 justify-content-between py-2 pe-2 text-uppercase">
                            <div className="col-3 px-2 text-center m-auto">Product</div>
                            <div className="col-2 m-auto text-start"></div>
                            <div className="col-2 m-auto text-center ps-4">PRICE</div>
                            <div className="col-3 m-auto text-center">QTY</div>
                            <div className="col-2 m-auto text-end"></div>
                        </div>
                        <ul className="cp_list">
                            <li className="pe-3 my-2">
                                <div className="d-flex justify-content-between w-100 h-100 py-3">
                                    <div className="col-5 col-md-4 col-lg-2 px-3">
                                        <img src={pic1} className="d-block w-100 h-100" alt="..." />
                                    </div>
                                    <div className="col-6 col-lg-9 d-flex">
                                        <div className="col-lg-5">
                                            <p className="px-2 py-1 m-auto">Scrub Top</p>
                                            <p className="px-2 py-1 m-auto">Purple</p>
                                            <p className="px-2 py-1 m-auto">XXL</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="px-2 py-1 m-auto">&#x20A6; 5800</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="input-group m-auto py-1">
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
                                    <div className="col-1 col-lg-1 text-end">
                                        <button type="button" className="btn-close text-reset"></button>
                                    </div>
                                </div>
                            </li>
                            <li className="pe-3 my-2">
                                <div className="d-flex justify-content-between w-100 h-100 py-3">
                                    <div className="col-5 col-md-4 col-lg-2 px-3">
                                        <img src={pic4} className="d-block w-100 h-100" alt="..." />
                                    </div>
                                    <div className="col-6 col-lg-9 d-flex">
                                        <div className="col-lg-5">
                                            <p className="px-2 py-1 m-auto">Scrub Top</p>
                                            <p className="px-2 py-1 m-auto">Purple</p>
                                            <p className="px-2 py-1 m-auto">XXL</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="px-2 py-1 m-auto">&#x20A6; 5800</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="input-group m-auto py-1">
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
                                    <div className="col-1 col-lg-1 text-end">
                                        <button type="button" className="btn-close text-reset"></button>
                                    </div>
                                </div>
                            </li>
                            <li className="pe-3 my-2">
                                <div className="d-flex justify-content-between w-100 h-100 py-3">
                                    <div className="col-5 col-md-4 col-lg-2 px-3">
                                        <img src={pic8} className="d-block w-100 h-100" alt="..." />
                                    </div>
                                    <div className="col-6 col-lg-9 d-flex">
                                        <div className="col-lg-5">
                                            <p className="px-2 py-1 m-auto">Scrub Top</p>
                                            <p className="px-2 py-1 m-auto">Purple</p>
                                            <p className="px-2 py-1 m-auto">XXL</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="px-2 py-1 m-auto">&#x20A6; 5800</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="input-group m-auto py-1">
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
                                    <div className="col-1 col-lg-1 text-end">
                                        <button type="button" className="btn-close text-reset"></button>
                                    </div>
                                </div>
                            </li>
                            <li className="pe-3 my-2">
                                <div className="d-flex justify-content-between w-100 h-100 py-3">
                                    <div className="col-5 col-md-4 col-lg-2 px-3">
                                        <img src={pic5} className="d-block w-100 h-100" alt="..." />
                                    </div>
                                    <div className="col-6 col-lg-9 d-flex">
                                        <div className="col-lg-5">
                                            <p className="px-2 py-1 m-auto">Scrub Top</p>
                                            <p className="px-2 py-1 m-auto">Purple</p>
                                            <p className="px-2 py-1 m-auto">XXL</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="px-2 py-1 m-auto">&#x20A6; 5800</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="input-group m-auto py-1">
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
                                    <div className="col-1 col-lg-1 text-end">
                                        <button type="button" className="btn-close text-reset"></button>
                                    </div>
                                </div>
                            </li>
                            <li className="pe-3 my-2">
                                <div className="d-flex justify-content-between w-100 h-100 py-3">
                                    <div className="col-5 col-md-4 col-lg-2 px-3">
                                        <img src={pic6} className="d-block w-100 h-100" alt="..." />
                                    </div>
                                    <div className="col-6 col-lg-9 d-flex">
                                        <div className="col-lg-5">
                                            <p className="px-2 py-1 m-auto">Scrub Top</p>
                                            <p className="px-2 py-1 m-auto">Purple</p>
                                            <p className="px-2 py-1 m-auto">XXL</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="px-2 py-1 m-auto">&#x20A6; 5800</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="input-group m-auto py-1">
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
                                    <div className="col-1 col-lg-1 text-end">
                                        <button type="button" className="btn-close text-reset"></button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 px-1 pt-3">
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
                                <Link to="/" className="btn btn-md w-100 py-2">
                                    RETURN TO HOMEPAGE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

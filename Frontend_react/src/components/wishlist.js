import { Link } from "react-router-dom";
import pic1 from "../assets/images/pic 1.png";
import pic8 from "../assets/images/pic 8.png";
import pic5 from "../assets/images/pic 5.jpg";
import pic6 from "../assets/images/pic 6.jpg";
import pic4 from "../assets/images/pic 4.png";
import { useEffect } from "react";

const Wishlist = () => {
    useEffect(() => {
        const w_canvas = document.querySelector("div#wishlist.offcanvas");
        const w_canvas_close = document.querySelector("div#wishlist.offcanvas > div.offcanvas-header button");

        if (w_canvas.classList.contains("show")) {
            console.log("true");
            w_canvas_close.click();
        }

        return;
    });

    return (
        <div className="wishlist body m-auto pt-3">
            <div className="container w_1200">
                <div>
                    <p className="my-4 px-1 heading">My Wish List</p>
                </div>
                <div>
                    <div className="d-none d-lg-flex w-100 justify-content-between py-2 pe-2 text-uppercase">
                        <div className="col-3 px-1 text-center m-auto">Product</div>
                        <div className="col-2 m-auto"></div>
                        <div className="col-2 m-auto">PRICE</div>
                        <div className="col-3 m-auto ps-4">QTY</div>
                        <div className="col-2 m-auto text-end"></div>
                    </div>
                    <ul className="wp_list">
                        <li className="pe-3 my-2">
                            <div className="d-flex justify-content-between w-100 h-100 py-3">
                                <div className="col-5 col-md-4 col-lg-2 px-2">
                                    <img src={pic1} className="d-block w-100 h-100" alt="..." />
                                </div>
                                <div className="col-6 col-lg-9 d-flex">
                                    <div className="col-lg-4">
                                        <p className="px-2 py-1 m-auto">Scrub Top</p>
                                        <p className="px-2 py-1 m-auto">Purple</p>
                                        <p className="px-2 py-1 m-auto">XXL</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p className="px-1 py-1 m-auto">&#x20A6; 5800</p>
                                    </div>
                                    <div className="d-none d-lg-block col-lg-2">
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
                                    <div className="col-lg-2 py-1">
                                        <button type="button" className="btn btn-md py-2 px-3">
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                                <div className="col-1 col-lg-1 text-end">
                                    <button type="button" className="btn-close text-reset"></button>
                                </div>
                            </div>
                        </li>
                        <li className="pe-3 my-2">
                            <div className="d-flex justify-content-between w-100 h-100 py-3">
                                <div className="col-5 col-md-4 col-lg-2 px-2">
                                    <img src={pic4} className="d-block w-100 h-100" alt="..." />
                                </div>
                                <div className="col-6 col-lg-9 d-flex">
                                    <div className="col-lg-4">
                                        <p className="px-2 py-1 m-auto">Scrub Top</p>
                                        <p className="px-2 py-1 m-auto">Purple</p>
                                        <p className="px-2 py-1 m-auto">XXL</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p className="px-1 py-1 m-auto">&#x20A6; 5800</p>
                                    </div>
                                    <div className="d-none d-lg-block col-lg-2">
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
                                    <div className="col-lg-2 py-1">
                                        <button type="button" className="btn btn-md py-2 px-3">
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                                <div className="col-1 col-lg-1 text-end">
                                    <button type="button" className="btn-close text-reset"></button>
                                </div>
                            </div>
                        </li>
                        <li className="pe-3 my-2">
                            <div className="d-flex justify-content-between w-100 h-100 py-3">
                                <div className="col-5 col-md-4 col-lg-2 px-2">
                                    <img src={pic8} className="d-block w-100 h-100" alt="..." />
                                </div>
                                <div className="col-6 col-lg-9 d-flex">
                                    <div className="col-lg-4">
                                        <p className="px-2 py-1 m-auto">Scrub Top</p>
                                        <p className="px-2 py-1 m-auto">Purple</p>
                                        <p className="px-2 py-1 m-auto">XXL</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p className="px-1 py-1 m-auto">&#x20A6; 5800</p>
                                    </div>
                                    <div className="d-none d-lg-block col-lg-2">
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
                                    <div className="col-lg-2 py-1">
                                        <button type="button" className="btn btn-md py-2 px-3">
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                                <div className="col-1 col-lg-1 text-end">
                                    <button type="button" className="btn-close text-reset"></button>
                                </div>
                            </div>
                        </li>
                        <li className="pe-3 my-2">
                            <div className="d-flex justify-content-between w-100 h-100 py-3">
                                <div className="col-5 col-md-4 col-lg-2 px-2">
                                    <img src={pic5} className="d-block w-100 h-100" alt="..." />
                                </div>
                                <div className="col-6 col-lg-9 d-flex">
                                    <div className="col-lg-4">
                                        <p className="px-2 py-1 m-auto">Scrub Top</p>
                                        <p className="px-2 py-1 m-auto">Purple</p>
                                        <p className="px-2 py-1 m-auto">XXL</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p className="px-1 py-1 m-auto">&#x20A6; 5800</p>
                                    </div>
                                    <div className="d-none d-lg-block col-lg-2">
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
                                    <div className="col-lg-2 py-1">
                                        <button type="button" className="btn btn-md py-2 px-3">
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                                <div className="col-1 col-lg-1 text-end">
                                    <button type="button" className="btn-close text-reset"></button>
                                </div>
                            </div>
                        </li>
                        <li className="pe-3 my-2">
                            <div className="d-flex justify-content-between w-100 h-100 py-3">
                                <div className="col-5 col-md-4 col-lg-2 px-2">
                                    <img src={pic6} className="d-block w-100 h-100" alt="..." />
                                </div>
                                <div className="col-6 col-lg-9 d-flex">
                                    <div className="col-lg-4">
                                        <p className="px-2 py-1 m-auto">Scrub Top</p>
                                        <p className="px-2 py-1 m-auto">Purple</p>
                                        <p className="px-2 py-1 m-auto">XXL</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p className="px-1 py-1 m-auto">&#x20A6; 5800</p>
                                    </div>
                                    <div className="d-none d-lg-block col-lg-2">
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
                                    <div className="col-lg-2 py-1">
                                        <button type="button" className="btn btn-md py-2 px-3">
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                                <div className="col-1 col-lg-1 text-end">
                                    <button type="button" className="btn-close text-reset"></button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-4">
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-end">
                            <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    1
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    2
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    3
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;

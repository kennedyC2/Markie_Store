import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import pic1 from "../assets/images/pic 1.png";
import { domain } from "./helpers";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";

// InitialState
const InitialState = {
    "_id": "",
    "title": "",
    "brand": "",
    "sizes": {},
    "quantity": "",
    "price": "",
    "colors": {},
    "category": "",
    "description": "",
    "misc": [],
    "images": {}
}

const Product = () => {
    const Dispatch = useDispatch()
    const { appData, user } = useSelector(state => state)
    const [selectedSize, setSelectedSize] = useState("all")
    const [order, setOrder] = useState({
        title: "",
        brand: "",
        category: "",
        quantity: 1,
        color: "",
        size: "",
        sex: ""
    })
    const { collection, productID, page } = useParams()
    const data = useSelector(state => state[collection])
    const [target, setTarget] = useState(InitialState)

    useEffect(() => {
        if (data && data[page]) {
            let _data = data[page].filter((item) => item._id === productID)
            _data[0]["order"] = 1
            setTarget(_data[0])
        } else {
            (async () => {
                let response = await axios.get(domain + `products/get?i=${productID}&a=false&c=${collection}`);
                response.data["order"] = 1
                setTarget(response.data)
            })()
        }
    }, [collection, data, productID, page])

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
                                    {target["images"]["main"] ? (
                                        <Fragment>
                                            <div className="carousel-inner h-100">
                                                <div className="carousel-item h-100 w-100 active">
                                                    <img src={domain + "image/" + target.images.main} width="100%" height="100%" alt={collection} />
                                                </div>
                                                <div className="carousel-item h-100 w-100">
                                                    <img src={domain + "image/" + target.images.image_1} width="100%" height="100%" alt={collection} />
                                                </div>
                                                <div className="carousel-item h-100 w-100">
                                                    <img src={domain + "image/" + target.images.image_2} width="100%" height="100%" alt={collection} />
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
                                        </Fragment>
                                    ) : (
                                        " "
                                    )}
                                </div>
                                <div id="item_dsp2" className="w-100 d-flex flex-nowrap mt-5">
                                    <div className="item me-2">
                                        <img src={domain + "image/" + target.images.main} width="100%" height="100%" alt={collection} />
                                    </div>
                                    <div className="item me-2">
                                        <img src={domain + "image/" + target.images.image_1} width="100%" height="100%" alt={collection} />
                                    </div>
                                    <div className="item me-2">
                                        <img src={domain + "image/" + target.images.image_2} width="100%" height="100%" alt={collection} />
                                    </div>
                                </div>
                            </div>
                            <div className="pd_lft-2 col-md-5 col-lg-5 h-100">
                                <div className="text-start px-1 pt-4">
                                    <p className="text-uppercase">{target.title}</p>
                                    <p className="mb-4">
                                        Brand: <span>{target.brand}</span>
                                    </p>
                                    <p className="prc mb-4">&#x20A6; {new Intl.NumberFormat("en-US", {}).format(target.price)}</p>

                                    <div className="mb-4" style={{ display: Object.keys(target["sizes"]).length > 0 ? "block" : "none" }}>
                                        <p>Sizes:</p>
                                        <ul className="s_list">
                                            {
                                                Object.keys(target["sizes"]).length > 0 ? (
                                                    Object.keys(target["sizes"]).map((each, index) => {
                                                        return (
                                                            <li key={index} onClick={e => {
                                                                let selectedSz = document.querySelector("li.selectedSz")

                                                                if (selectedSz) {
                                                                    selectedSz.classList.remove("selectedSz")
                                                                }

                                                                document.querySelectorAll("input[type=checkbox]:checked").forEach(each => {
                                                                    each.checked = false
                                                                })

                                                                e.currentTarget.classList.add("selectedSz")
                                                                setSelectedSize(each)
                                                            }}>{each}</li>
                                                        )
                                                    })
                                                ) : (" ")
                                            }
                                        </ul>
                                    </div>

                                    <div className="mb-4" style={{ display: Object.keys(target["colors"]).length > 0 ? "block" : "none" }}>
                                        <p>Colour:</p>
                                        <ul className="c_list">
                                            {
                                                Object.keys(target["colors"]).length > 0 ? (
                                                    selectedSize === "all" ? (
                                                        target["colors"].map((each, index) => {
                                                            return (
                                                                <input key={index} className="form-check-input" type="checkbox" id="checkboxNoLabel" style={{ backgroundColor: each }} />
                                                            )
                                                        })
                                                    ) : (
                                                        Object.keys(target["sizes"][selectedSize]).map((each, index) => {
                                                            return (
                                                                <input key={index} className="form-check-input" type="checkbox" id="checkboxNoLabel" style={{ backgroundColor: each }} onClick={e => {
                                                                    document.querySelectorAll("input[type=checkbox]:checked").forEach(each => {
                                                                        each.checked = false
                                                                    })

                                                                    e.currentTarget.checked = true
                                                                }} />
                                                            )
                                                        })
                                                    )
                                                ) : (" ")
                                            }
                                        </ul>
                                    </div>

                                    <div className="mb-4">
                                        <p>Quantity:</p>
                                        <div className="input-group py-1">
                                            <span className="input-group-text" id="minus" onClick={e => {
                                                setOrder({ ...order, quantity: order["quantity"] -= 1 })
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                </svg>
                                            </span>
                                            <input type="number" className="form-control inc text-center" placeholder="1" aria-label="Username" aria-describedby="basic-addon1" value={order["quantity"]} readOnly />
                                            <span className="input-group-text" id="plus" onClick={e => {
                                                setOrder({ ...order, quantity: order["quantity"] += 1 })
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
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
                                <div className="col-5 text-end">&#x20A6; {new Intl.NumberFormat("en-US", {}).format(parseInt(order["quantity"]) * parseInt(target["price"]))}</div>
                            </div>
                            <div className="my-4">
                                <p className="mb-3">Location:</p>
                                <div className="dropdown-center">
                                    <button className="btn dropdown-toggle w-100 mb-3 text-capitalize" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {user["delivery"]}
                                    </button>
                                    <ul className="dropdown-menu w-100">
                                        {appData && appData["delivery"] ? (
                                            Object.keys(appData["delivery"]).map((item, index) => {
                                                return (
                                                    <li key={index} className="dropdown-item text-capitalize" onClick={e => {
                                                        return Dispatch({ type: "delivery", payload: item })
                                                    }}>{item}</li>
                                                )
                                            })
                                        ) : (
                                            <div className="empty emptyS">
                                                <p>------- &nbsp;  no data &nbsp; -------</p>
                                            </div>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between my-4 border-bottom border-1 pb-4">
                                <div className="col-5">Delivery Fee:</div>
                                <div className="col-5 text-end">&#x20A6; {new Intl.NumberFormat("en-US", {}).format(appData && appData["delivery"] ? appData["delivery"][user["delivery"]] : "0.00")}</div>
                            </div>
                            <div className="c-btm">
                                <div className="w-100 d-flex justify-content-between border-bottom border-1 pb-2">
                                    <p>Total:</p>
                                    <p>&#x20A6; {new Intl.NumberFormat("en-US", {}).format(appData && appData["delivery"] ? ((parseInt(order["quantity"]) * parseInt(target["price"])) + appData["delivery"][user["delivery"]]) : "")}</p>
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

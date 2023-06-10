import { Link } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { domain } from "./helpers";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./main";
import { set } from "idb-keyval";

const Cart = () => {
    const Dispatch = useDispatch()
    const [selectedSize, setSelectedSize] = useState("all")
    const { appData, user, cart } = useSelector(state => state)
    console.log(appData)

    const total = () => {
        let val = 0
        for (const prop of cart.data) {
            val += (parseInt(prop["order"]["quantity"]) * parseInt(prop["price"]))
        }
        return val
    }

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
                        <div className="d-none d-lg-flex w-100 justify-content-between border border-1 rounded py-2 pe-2 text-uppercase">
                            <div className="ps-5 my-auto" style={{ width: "48.5%" }}>Product</div>
                            <div className="m-auto text-center ps-4" style={{ width: "15.5%" }}>PRICE</div>
                            <div className="m-auto text-center" style={{ width: "15.5%" }}>QTY</div>
                            <div className=" m-auto text-end"></div>
                        </div>
                        <ul className="cp_list">
                            {cart && cart.data && cart.data.length > 0 ?
                                (
                                    <Fragment>
                                        {cart.data.map((item, index) => {
                                            return (
                                                <li key={index} className="pe-3 my-2 rounded">
                                                    <div className="d-flex justify-content-between w-100 h-100 py-3">
                                                        <div className="box_1 ps-2">
                                                            <img src={domain + "image/" + item.images.main} className="d-block w-100 h-100" alt="..." />
                                                        </div>
                                                        <div className="box_2 d-flex justify-content-between">
                                                            <div className="col-lg-5">
                                                                <p className="px-2 py-1 m-auto">{item.title}</p>
                                                                <p className="px-2 py-1 m-auto">Brand: {item.brand}</p>
                                                                <p className="px-2 py-1 d-lg-none m-auto">&#x20A6; {new Intl.NumberFormat("en-US", {}).format(item.price)}</p>
                                                                <p className="px-2 py-1 m-auto">Sizes:</p>
                                                                <ul className="px-2 py-1 s_list">
                                                                    {Object.keys(item["sizes"]).map((each, index) => {
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
                                                                    })}
                                                                </ul>
                                                                <p className="px-2 py-1 m-auto">Colors:</p>
                                                                <div className="px-2 py-1 c_list">
                                                                    {selectedSize === "all" ? (
                                                                        item["colors"].map((each, index) => {
                                                                            return (
                                                                                <input key={index} className="form-check-input" type="checkbox" id="checkboxNoLabel" style={{ backgroundColor: each }} />
                                                                            )
                                                                        })
                                                                    ) : (
                                                                        Object.keys(item["sizes"][selectedSize]).map((each, index) => {
                                                                            return (
                                                                                <input key={index} className="form-check-input" type="checkbox" id="checkboxNoLabel" style={{ backgroundColor: each }} onClick={e => {
                                                                                    document.querySelectorAll("input[type=checkbox]:checked").forEach(each => {
                                                                                        each.checked = false
                                                                                    })

                                                                                    e.currentTarget.checked = true
                                                                                }} />
                                                                            )
                                                                        })
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="d-none d-lg-block col-lg-3">
                                                                <p className="px-2 py-1 m-auto">&#x20A6; {new Intl.NumberFormat("en-US", {}).format(item.price)}</p>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="input-group m-auto py-1">
                                                                    <span className="input-group-text" id="minus" onClick={e => {
                                                                        return Dispatch({ type: "decreaseCQuantity", payload: index })
                                                                    }}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                                        </svg>
                                                                    </span>
                                                                    <input type="number" className="form-control inc text-center" placeholder="1" aria-label="Username" aria-describedby="basic-addon1" value={item.order.quantity} readOnly />
                                                                    <span className="input-group-text" id="plus" onClick={e => {
                                                                        return Dispatch({ type: "increaseCQuantity", payload: index })
                                                                    }}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="box_3 text-end">
                                                            <button type="button" className="btn-close text-reset" onClick={async e => {
                                                                // Update Store
                                                                await set("cart", {
                                                                    id: cart.id.filter(each => {
                                                                        return each !== item._id
                                                                    }),
                                                                    data: cart.data.filter(each => {
                                                                        return each._id !== item._id
                                                                    }),
                                                                    expiry: cart.expiry
                                                                }, store)

                                                                return Dispatch({ type: "remove4rmCart", payload: item })
                                                            }}></button>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </Fragment>
                                ) : (
                                    <div className="empty">
                                        <p>------- &nbsp;  Empty &nbsp; -------</p>
                                    </div>
                                )
                            }
                        </ul>
                    </div>
                    <div className="col-lg-4 px-1 pt-1">
                        <div className="text-uppercase pt-2 pb-3 border-bottom border-2">Summary</div>
                        <div className="d-flex justify-content-between my-4 border-bottom border-1 pb-3">
                            <div className="col-5">Subtotal:</div>
                            <div className="col-5 text-end">&#x20A6; {
                                cart.data && cart.data && cart.data.length > 0 ?
                                    (
                                        new Intl.NumberFormat("en-US", {}).format(total())
                                    ) : (
                                        "0.00"
                                    )
                            }
                            </div>
                        </div>
                        <div className="my-4">
                            <p className="mb-3">Location:</p>
                            <div className="dropdown-center">
                                <button className="btn dropdown-toggle w-100 mb-3 text-capitalize" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user["delivery"]}
                                </button>
                                <ul className="dropdown-menu w-100">
                                    {
                                        appData && appData["delivery"] ? (
                                            Object.keys(appData["delivery"]).map((item, index) => {
                                                return (
                                                    <li key={index} className="dropdown-item text-capitalize" onClick={e => {
                                                        return Dispatch({ type: "delivery", payload: item })
                                                    }}>{item}</li>
                                                )
                                            })
                                        ) : (
                                            <li className="dropdown-item text-capitalize" >{user["delivery"]}</li>
                                        )
                                    }
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
                                <p>&#x20A6; {
                                    appData && appData["delivery"] && cart.data && cart.data && cart.data.length > 0 ?
                                        (
                                            new Intl.NumberFormat("en-US", {}).format(total() + appData["delivery"][user["delivery"]])
                                        ) : (
                                            "0.00"
                                        )
                                }
                                </p>
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
        </div >
    );
};

export default Cart;

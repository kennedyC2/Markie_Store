import { set } from "idb-keyval"
import { Link } from "react-router-dom"
import { store } from "./main"

export const Header_Cart_DSP = (domain, index, item, cart, dispatch) => {
    return (
        <div key={index} className="d-flex w-100 justify-content-between py-4">
            <div className="col-3 pe-2">
                <img src={domain + "image/" + item.images.main} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="col-5 text-start ps-2 m-auto">
                <p className="pb-1">{item.title}</p>
                <p className="pb-1">Brand: {item.brand}</p>
                <p className="pb-1">&#x20A6; {new Intl.NumberFormat("en-US", {}).format(item.price)}</p>
            </div>
            <div className="col-1 pt-2 m-auto">
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

                    return dispatch({ type: "remove4rmCart", payload: item })
                }}></button>
            </div>
        </div>
    )
}

export const Header_Wishlist_DSP = (domain, index, item, wishlist, dispatch) => {
    return (
        <div key={index} className="d-flex w-100 justify-content-between py-4">
            <div className="col-3 pe-2">
                <img src={domain + "image/" + item.images.main} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="col-5 text-start ps-2 m-auto">
                <p className="pb-1">{item.title}</p>
                <p className="pb-1">Brand: {item.brand}</p>
                <p className="pb-1">&#x20A6; {new Intl.NumberFormat("en-US", {}).format(item.price)}</p>
            </div>
            <div className="col-1 pt-2 m-auto">
                <button type="button" className="btn-close text-reset" onClick={async e => {
                    // Update Store
                    await set("wishlist", {
                        id: wishlist.id.filter(each => {
                            return each !== item._id
                        }),
                        data: wishlist.data.filter(each => {
                            return each._id !== item._id
                        }),
                        expiry: wishlist.expiry
                    }, store)

                    return dispatch({ type: "remove4rmWishlist", payload: item })
                }}></button>
            </div>
        </div>
    )
}

export const Product_DSP = (domain, collection, index, item, cart, wishlist, dispatch) => {
    return (
        <div key={index} className="card">
            <div className="imgcont">
                <Link to={`/product/${collection}/${item._id}/1`} state={{ collection: collection, page: "1", id: item._id }} preventScrollReset={false} className="d-inline-block text-decoration-none">
                    <img src={domain + "image/" + item.images.main} width="100%" height="100%" className="card-img-top" alt={collection} />
                </Link>
            </div>
            <div className="card-body">
                <Link to={`/product/${collection}/${item._id}/1`} preventScrollReset={false} className="d-inline-block px-2 pb-3 text-decoration-none">
                    <h5 className="card-title ps-2">{item.title}</h5>
                    <p className="card-text ps-2">&#x20A6; {new Intl.NumberFormat("en-US", {}).format(item.price)}</p>
                </Link>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn col-9 shadow" onClick={async e => {
                        let i = cart.id.indexOf(item["_id"])
                        if (i > -1) {
                            let _cart = cart.data
                            _cart.data[i]["order"]["quantity"] += 1

                            // Update Store
                            await set("cart", {
                                id: cart.id,
                                data: _cart,
                                expiry: cart.expiry
                            }, store)

                            // Update State
                            return dispatch({ type: "increaseQuantity", payload: i })
                        }

                        // Update Store
                        await set("cart", {
                            id: [...cart.id, item._id],
                            data: [...cart.data, item],
                            expiry: cart.expiry
                        }, store)

                        return dispatch({ type: "addToCart", payload: item })

                    }}>
                        ADD TO CART
                    </button>
                    <button type="button" className="btn px-1 wl col-2 shadow" title="Add to wishlist" onClick={async e => {
                        let i = wishlist.id.indexOf(item["_id"])
                        if (i > -1) {

                            // Update Store
                            await set("wishlist", {
                                id: wishlist.id.filter(each => {
                                    return each !== item._id
                                }),
                                data: wishlist.data.filter(each => {
                                    return each._id !== item._id
                                }),
                                expiry: wishlist.expiry
                            }, store)

                            // Update State
                            return dispatch({ type: "remove4rmWishlist", payload: item })
                        }

                        // Update Store
                        await set("wishlist", {
                            id: [...wishlist.id, item._id],
                            data: [...wishlist.data, item],
                            expiry: wishlist.expiry
                        }, store)

                        return dispatch({ type: "addToWishlist", payload: item })

                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="90%" height="100%" className="bi bi-heart-fill" fill={wishlist.id.indexOf(item._id) > -1 ? "red" : "#adc0cf"} viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Admin_DSP = (domain, index, item, updateState, deleteItem) => {
    console.log(item)
    return (
        <div key={index} className="card" id={item._id + "_" + index}>
            <img src={domain + "image/" + item.images.main} className="card-img-top" alt="crocs" width={"100%"} height={"100%"} />
            <div className="card-body">
                <div>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">&#x20A6; {new Intl.NumberFormat("en-US", {}).format(item.price)}</p>
                </div>

                <div className="card-body px-0 pb-0 d-flex justify-content-between">
                    <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target={"#crocs_" + index + "a"}>
                        view
                    </button>

                    <div className="modal fade" id={"crocs_" + index + "a"} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={"crocs_" + index + "a_Label"} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modalThree">
                            <div className="modal-content py-3">
                                <div className="modal-header px-4">
                                    <h1 className="modal-title fs-5" id={"crocs_" + index + "a_Label"}>Details:</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-start px-4">
                                    <div>
                                        <div className="w-75">
                                            <h5 className="title">Product: {item.title}</h5>
                                            <div className="py-2 d-flex justify-content-between">
                                                <p>Price: &#x20A6; {new Intl.NumberFormat("en-US", {}).format(item.price)}</p>
                                                <p>In Stock: {new Intl.NumberFormat("en-US", {}).format(item.quantity)}</p>
                                                <p>Purchased: {new Intl.NumberFormat("en-US", {}).format(item.sold)}</p>
                                            </div>
                                            <p className="desc pt-0">Description: {item.description}</p>
                                        </div>
                                        <div className="cont4">
                                            <div>
                                                <img src={domain + "image/" + item.images.main} alt="main" />
                                            </div>
                                            <div>
                                                <img src={domain + "image/" + item.images.image_1} alt="image_1" />
                                            </div>
                                            <div>
                                                <img src={domain + "image/" + item.images.image_2} alt="image_2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer px-4">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => updateState(index, item._id)}>
                        edit
                    </button>

                    <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target={"#crocs_" + index + "b"}>
                        delete
                    </button>

                    <div className="modal fade" id={"crocs_" + index + "b"} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={"crocs_" + index + "b_Label"} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modalFour">
                            <div className="modal-content">
                                <div className="modal-body text-start py-5 px-4">
                                    Do you really want to delete this item?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary px-5" data-bs-dismiss="modal">No</button>
                                    <button type="button" className="btn btn-danger px-5" data-bs-dismiss="modal" onClick={(e) => deleteItem(e, item._id, item.category, item.images)}>Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
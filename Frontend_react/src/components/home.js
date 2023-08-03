import scrub4 from "../assets/images/scrub 4.jpg";
import crocs2 from "../assets/images/crocs 2.png";
import scrub5 from "../assets/images/scrub 5.jpg";
import scrub1 from "../assets/images/scrub 1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useCallback, useEffect } from "react";
import { domain } from "./helpers";
import { Product_DSP } from "./dsp";
import { store } from "./main";

const Home = ({ FetchData, CreateCart, CreateWishlist, Populate }) => {
    const { coats, scrubs, crocs, sneakers, penTorch, scrubCaps, brooches, cardHolders, shirts, trending, newArrivals, cart, wishlist } = useSelector((state) => state);
    const Dispatch = useDispatch()

    // ======================================================================
    // "Wrap Function in USeCallback"
    // ======================================================================

    useEffect(() => {
        if (coats.length === 0) {
            FetchData("products", "coats", Dispatch, "createCoats")
        }

        if (scrubs.length === 0) {
            FetchData("products", "scrubs", Dispatch, "createScrubs")
        }

        if (crocs.length === 0) {
            FetchData("products", "crocs", Dispatch, "createCrocs")
        }

        if (sneakers.length === 0) {
            FetchData("products", "sneakers", Dispatch, "createSneakers")
        }

        if (penTorch.length === 0) {
            FetchData("products", "penTorch", Dispatch, "createTorch")
        }

        if (scrubCaps.length === 0) {
            FetchData("products", "scrubCaps", Dispatch, "createCaps")
        }

        if (brooches.length === 0) {
            FetchData("products", "brooches", Dispatch, "createBrooches")
        }

        if (cardHolders.length === 0) {
            FetchData("products", "cardHolders", Dispatch, "createCardHolders")
        }

        if (shirts.length === 0) {
            FetchData("products", "shirts", Dispatch, "createShirts")
        }

        if (trending.data.length === 0) {
            FetchData("trending", null, Dispatch, "createTrending", "TH")
        }

        if (newArrivals.data.length === 0) {
            FetchData("newArrivals", null, Dispatch, "createNewArrivals", "TH")
        }

        // Load User Cart
        if (Object.keys(cart).length === 0) {
            CreateCart(Dispatch, store)
        }

        // Load User Wishlist
        if (Object.keys(wishlist).length === 0) {
            CreateWishlist(Dispatch, store)
        }

        return

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        Populate("newArrival")
        Populate("trending")
    }, [newArrivals, trending, Populate])

    const randomTrials_A = useCallback((file, dir) => {
        // const dd = await get(dir, store)
        const dd = JSON.parse(sessionStorage.getItem(dir))

        if (dd !== null && dd !== undefined) {
            return dd
        } else {
            const trials = []
            let pos = []
            if (file && file.length >= 10) {
                for (var i = 0; i < 10; i++) {
                    let index = Math.floor((Math.random() * file.length))
                    if (pos.includes(index)) {
                        i--
                    } else {
                        let copy = JSON.parse(JSON.stringify(file[index]))
                        copy["pos"] = index
                        pos.push(index)
                        trials.push(copy)
                    }
                }
            }

            // Update Store
            sessionStorage.setItem(dir, JSON.stringify(trials))

            return trials
        }
    }, [])

    return (
        <div className="home m-auto">
            {/* Level One */}
            <div className="lv_1 container w_1200 py-2 d-flex justify-content-between">
                {/* Banner Carousel */}
                <div className="d-none d-lg-block">
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
            <div className="row lv_4 w_1200">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">Trending</div>
                    <div className="intro line"></div>
                </div>

                {/* Cards */}
                <Fragment>
                    {trending && trending.data.length === 5 && newArrivals.data.length === 5 && coats.length >= 10 && crocs.length >= 10 && sneakers.length >= 10 && penTorch.length >= 10 && scrubCaps.length >= 10 && brooches.length >= 10 && cardHolders.length >= 10 && shirts.length >= 10 && scrubs.length >= 10 ?
                        (
                            <Fragment >
                                <div id="trending" className="carousel slide m-auto" data-bs-ride="carousel">
                                    <div className="carousel-inner w-100 h-100">
                                        {trending.data.map((item, index) => {
                                            return (
                                                <div key={"TN" + index} className={`carousel-item ${index === 0 ? "active" : ""} w-100 h-100`}>
                                                    <div className="grid">
                                                        {Product_DSP(domain, "trending", index, item, cart, wishlist, Dispatch)}
                                                    </div>
                                                </div>
                                            )
                                        })}
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
                            </Fragment>
                        ) : (
                            <div className="empty">
                                <p>------- &nbsp;  no data &nbsp; -------</p>
                            </div>
                        )}
                </Fragment>
            </div>

            {/* Level Four */}
            <div className="row lv_3 w_1200">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">New Arrivals</div>
                    <div className="intro line"></div>
                </div>

                {/* Cards */}
                <Fragment>
                    {newArrivals && newArrivals.data.length === 5 && trending.data.length === 5 && coats.length >= 10 && crocs.length >= 10 && sneakers.length >= 10 && penTorch.length >= 10 && scrubCaps.length >= 10 && brooches.length >= 10 && cardHolders.length >= 10 && shirts.length >= 10 && scrubs.length >= 10 ?
                        (
                            <Fragment >
                                <div id="newArrival" className="carousel slide m-auto" data-bs-ride="carousel">
                                    <div className="carousel-inner w-100 h-100">
                                        {newArrivals.data.map((item, index) => {
                                            return (
                                                <div key={"NT" + index} className={`carousel-item ${index === 0 ? "active" : ""} w-100 h-100`}>
                                                    <div className="grid">
                                                        {Product_DSP(domain, "newArrivals", index, item, cart, wishlist, Dispatch)}
                                                    </div>
                                                </div>
                                            )
                                        })}
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
                            </Fragment>
                        ) : (
                            <div className="empty">
                                <p>------- &nbsp;  no data &nbsp; -------</p>
                            </div>
                        )}
                </Fragment>
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
                <Fragment>
                    {scrubs && coats.length >= 10 && crocs.length >= 10 && sneakers.length >= 10 && penTorch.length >= 10 && scrubCaps.length >= 10 && brooches.length >= 10 && cardHolders.length >= 10 && shirts.length >= 10 && scrubs.length >= 10 ?
                        (
                            <Fragment >
                                <div className="grid">
                                    {randomTrials_A(scrubs, "scrubs_H").map((item) => {
                                        return (
                                            Product_DSP(domain, "scrubs", item.pos, item, cart, wishlist, Dispatch)
                                        )
                                    })}
                                </div>
                            </Fragment>
                        ) : (
                            <div className="empty">
                                <p>------- &nbsp;  no data &nbsp; -------</p>
                            </div>
                        )}
                </Fragment>
            </div>

            {/* Level Six */}
            <div className="row lv_6 w_1200">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">Ward Coats</div>
                    <div className="intro line"></div>
                </div>

                {/* Cards */}
                <Fragment>
                    {coats && coats.length >= 10 && crocs.length >= 10 && sneakers.length >= 10 && penTorch.length >= 10 && scrubCaps.length >= 10 && brooches.length >= 10 && cardHolders.length >= 10 && shirts.length >= 10 && scrubs.length >= 10 ?
                        (
                            <Fragment >
                                <div className="grid">
                                    {randomTrials_A(coats, "coats_H").map((item) => {
                                        return (
                                            Product_DSP(domain, "coats", item.pos, item, cart, wishlist, Dispatch)
                                        )
                                    })}
                                </div>
                            </Fragment>
                        ) : (
                            <div className="empty">
                                <p>------- &nbsp;  no data &nbsp; -------</p>
                            </div>
                        )}
                </Fragment>
            </div>

            {/* Level Seven */}
            <div className="row lv_7 w_1200">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">Crocs</div>
                    <div className="intro line"></div>
                </div>

                {/* Cards */}
                <Fragment>
                    {crocs && coats.length >= 10 && crocs.length >= 10 && sneakers.length >= 10 && penTorch.length >= 10 && scrubCaps.length >= 10 && brooches.length >= 10 && cardHolders.length >= 10 && shirts.length >= 10 && scrubs.length >= 10 ?
                        (
                            <Fragment >
                                <div className="grid">
                                    {randomTrials_A(crocs, "crocs_H").map((item) => {
                                        return (
                                            Product_DSP(domain, "crocs", item.pos, item, cart, wishlist, Dispatch)
                                        )
                                    })}
                                </div>
                            </Fragment>
                        ) : (
                            <div className="empty">
                                <p>------- &nbsp;  no data &nbsp; -------</p>
                            </div>
                        )}
                </Fragment>
            </div>

            {/* Level Eight */}
            <div className="row lv_8 w_1200">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">Brooches</div>
                    <div className="intro line"></div>
                </div>

                {/* Cards */}
                <Fragment>
                    {brooches && coats.length >= 10 && crocs.length >= 10 && sneakers.length >= 10 && penTorch.length >= 10 && scrubCaps.length >= 10 && brooches.length >= 10 && cardHolders.length >= 10 && shirts.length >= 10 && scrubs.length >= 10 ?
                        (
                            <Fragment >
                                <div className="grid">
                                    {randomTrials_A(brooches, "brooches_H").map((item) => {
                                        return (
                                            Product_DSP(domain, "brooches", item.pos, item, cart, wishlist, Dispatch)
                                        )
                                    })}
                                </div>
                            </Fragment>
                        ) : (
                            <div className="empty">
                                <p>------- &nbsp;  no data &nbsp; -------</p>
                            </div>
                        )}
                </Fragment>
            </div>

            {/* Level nine */}
            <div className="row lv_9 w_1200">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">Sneakers</div>
                    <div className="intro line"></div>
                </div>

                {/* Cards */}
                <Fragment>
                    {sneakers && coats.length >= 10 && crocs.length >= 10 && sneakers.length >= 10 && penTorch.length >= 10 && scrubCaps.length >= 10 && brooches.length >= 10 && cardHolders.length >= 10 && shirts.length >= 10 && scrubs.length >= 10 ?
                        (
                            <Fragment >
                                <div className="grid">
                                    {randomTrials_A(sneakers, "sneakers_H").map((item) => {
                                        return (
                                            Product_DSP(domain, "sneakers", item.pos, item, cart, wishlist, Dispatch)
                                        )
                                    })}
                                </div>
                            </Fragment>
                        ) : (
                            <div className="empty">
                                <p>------- &nbsp;  no data &nbsp; -------</p>
                            </div>
                        )}
                </Fragment>
            </div>

            {/* Level ten */}
            <div className="row lv_10 w_1200">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">T-Shirts</div>
                    <div className="intro line"></div>
                </div>

                {/* Cards */}
                <Fragment>
                    {shirts && coats.length >= 10 && crocs.length >= 10 && sneakers.length >= 10 && penTorch.length >= 10 && scrubCaps.length >= 10 && brooches.length >= 10 && cardHolders.length >= 10 && shirts.length >= 10 && scrubs.length >= 10 ?
                        (
                            <Fragment >
                                <div className="grid">
                                    {randomTrials_A(shirts, "shirts_H").map((item) => {
                                        return (
                                            Product_DSP(domain, "shirts", item.pos, item, cart, wishlist, Dispatch)
                                        )
                                    })}
                                </div>
                            </Fragment>
                        ) : (
                            <div className="empty">
                                <p>------- &nbsp;  no data &nbsp; -------</p>
                            </div>
                        )}
                </Fragment>
            </div>
        </div>
    );
};

export default Home;

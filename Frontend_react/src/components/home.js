import scrub4 from "../assets/images/scrub 4.jpg";
import crocs2 from "../assets/images/crocs 2.png";
import scrub5 from "../assets/images/scrub 5.jpg";
import scrub1 from "../assets/images/scrub 1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import axios from "axios";
import { domain, Populate } from "./helpers";
import { Product_DSP } from "./dsp";

const Home = () => {
    const { home, cart, wishlist } = useSelector((state) => state);
    const Dispatch = useDispatch()
    Populate("newArrival")
    Populate("trending")

    useEffect(() => {
        if (Object.keys(home).length === 0) {
            (async () => {
                const response = await axios.get(domain + "home");
                Dispatch({ type: "createHome", payload: response.data });
            })();
        }

        return
    }, [Dispatch, home]);

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
                <Fragment>
                    {home["newArrival"] && home["newArrival"].length > 0 ?
                        (
                            <Fragment >
                                <div id="newArrival" className="carousel slide m-auto" data-bs-ride="carousel">
                                    <div className="carousel-inner w-100 h-100">
                                        {home["newArrival"].map((item, index) => {
                                            return (
                                                <div className={`carousel-item ${index === 0 ? "active" : ""} w-100 h-100`}>
                                                    <div className="grid">
                                                        {Product_DSP(domain, "newArrival", index, item, cart, wishlist, Dispatch)}
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
            <div className="row lv_4 w_1200">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">Trending</div>
                    <div className="intro line"></div>
                </div>

                {/* Cards */}
                <Fragment>
                    {home["trending"] && home["trending"].length > 0 ?
                        (
                            <Fragment >
                                <div id="trending" className="carousel slide m-auto" data-bs-ride="carousel">
                                    <div className="carousel-inner w-100 h-100">
                                        {home["trending"].map((item, index) => {
                                            return (
                                                <div className={`carousel-item ${index === 0 ? "active" : ""} w-100 h-100`}>
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
                    {home["scrubs"] && home["scrubs"].length > 0 ?
                        (
                            <Fragment >
                                <div className="grid">
                                    {home["scrubs"].map((item, index) => {
                                        return (
                                            Product_DSP(domain, "scrubs", index, item, cart, wishlist, Dispatch)
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
                    {home["coats"] && home["coats"].length > 0 ?
                        (
                            <Fragment >
                                <div className="grid">
                                    {[...home["coats"]].map((item, index) => {
                                        return (
                                            Product_DSP(domain, "coats", index, item, cart, wishlist, Dispatch)
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
                    {home["crocs"] && home["crocs"].length > 0 ?
                        (
                            <Fragment >
                                <div className="grid">
                                    {home["crocs"].map((item, index) => {
                                        return (
                                            Product_DSP(domain, "crocs", index, { ...item }, cart, wishlist, Dispatch)
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
                    {home["brooches"] && home["brooches"].length > 0 ?
                        (
                            <Fragment >
                                <div className="grid">
                                    {home["brooches"].map((item, index) => {
                                        return (
                                            Product_DSP(domain, "brooches", index, item, cart, wishlist, Dispatch)
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
                    {home["sneakers"] && home["sneakers"].length > 0 ?
                        (
                            <Fragment >
                                <div className="grid">
                                    {home["sneakers"].map((item, index) => {
                                        return (
                                            Product_DSP(domain, "sneakers", index, item, cart, wishlist, Dispatch)
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
                    {home["shirts"] && home["shirts"].length > 0 ?
                        (
                            <Fragment >
                                <div className="grid">
                                    {home["shirts"].map((item, index) => {
                                        return (
                                            Product_DSP(domain, "shirts", index, item, cart, wishlist, Dispatch)
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

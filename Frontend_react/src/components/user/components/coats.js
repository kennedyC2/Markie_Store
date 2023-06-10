import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import scrub4 from "../../../assets/images/scrub 4.jpg";
import crocs2 from "../../../assets/images/crocs 2.png";
import scrub5 from "../../../assets/images/scrub 5.jpg";
import scrub1 from "../../../assets/images/scrub 1.jpg";
import { Fragment, useEffect } from "react";
import { domain } from "../../helpers";
import { useLocation, useOutletContext } from "react-router-dom";
import { Product_DSP } from "../../dsp";

const Coats = () => {
    const [selectCatg] = useOutletContext()
    const { collection, page } = useLocation()["state"]
    const { cart, wishlist } = useSelector(state => state)
    const data = useSelector(state => state[collection])[page]
    const Dispatch = useDispatch()

    useEffect(() => {
        // Set Brand
        selectCatg(collection)

        return
    }, [selectCatg, collection]);

    useEffect(() => {
        if (!data) {
            (async () => {
                const response = await axios.get(domain + "products/get?i=marky&a=true&c=coats");
                Dispatch({ type: "createCoats", payload: response.data });
            })();
        }

        return
    }, [Dispatch, data]);

    return (
        <Fragment>
            {/* Banner Carousel */}
            <div id="pd_banner" className="carousel slide carousel-fade" data-bs-ride="carousel">
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

            {/* Cards */}
            <div className="pt-2">
                <div className="w-100 mt-5 mb-3 d-flex flex-row justify-content-between">
                    <div className="intro line"></div>
                    <div className="intro">WARD COATS</div>
                    <div className="intro line"></div>
                </div>

                <button className="btn btn-outline-secondary d-lg-none bg-transparent mb-3 ms-1 p-1" style={{ borderColor: "#adc0cf" }} type="button" data-bs-toggle="offcanvas" data-bs-target="#filter" aria-controls="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
                        <path fill="#adc0cf " d="M2 4a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Zm2 6a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2Zm4 4a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4H8Z" />
                    </svg>
                </button>

                <div className="offcanvas offcanvas-start ps-2" tabIndex="-1" id="filter" aria-labelledby="filterLabel">
                    <button type="button" className="btn-close me-2" data-bs-dismiss="offcanvas" data-bs-target="#filter" aria-label="Close"></button>
                    <div className="offcanvas-body">
                        <div className="accordion accordion-flush" id="m_filter">
                            {/* Brand Selector */}
                            <div className="accordion-item px-4">
                                <h2 className="accordion-header" id="brand_hd">
                                    <button className="accordion-button text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush_brand" aria-expanded="false" aria-controls="flush_brand">
                                        Brand
                                    </button>
                                </h2>
                                <div id="flush_brand" className="accordion-collapse collapse show" aria-labelledby="brand_hd" data-bs-parent="#m_filter">
                                    <div className="accordion-body">
                                        <ul className="b_list">
                                            <li>D&G</li>
                                            <li>Nike</li>
                                            <li>Louis Vuitton</li>
                                            <li>Prada</li>
                                            <li>Adidas</li>
                                            <li>Medico</li>
                                            <li>levenc</li>
                                            <li>Anna</li>
                                            <li>Chanel</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Colour Selector */}
                            <div className="accordion-item px-4">
                                <h2 className="accordion-header" id="colour_hd">
                                    <button className="accordion-button text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-colour" aria-expanded="false" aria-controls="flush-colour">
                                        Colour
                                    </button>
                                </h2>
                                <div id="flush-colour" className="accordion-collapse collapse show" aria-labelledby="colour_hd" data-bs-parent="#m_filter">
                                    <div className="accordion-body">
                                        <ul className="c_list">
                                            <li style={{ backgroundColor: "silver" }}></li>
                                            <li style={{ backgroundColor: "purple" }}></li>
                                            <li style={{ backgroundColor: "pink" }}></li>
                                            <li style={{ backgroundColor: "yellow" }}></li>
                                            <li style={{ backgroundColor: "mediumseagreen" }}></li>
                                            <li style={{ backgroundColor: "black" }}></li>
                                            <li style={{ backgroundColor: "navy" }}></li>
                                            <li style={{ backgroundColor: "orchid" }}></li>
                                            <li style={{ backgroundColor: "blueviolet" }}></li>
                                            <li style={{ backgroundColor: "brown" }}></li>
                                            <li style={{ backgroundColor: "orange" }}></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Sex */}
                            <div className="accordion-item px-4">
                                <h2 className="accordion-header" id="sex_hd">
                                    <button className="accordion-button text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-sex" aria-expanded="false" aria-controls="flush-sex">
                                        Sex
                                    </button>
                                </h2>
                                <div id="flush-sex" className="accordion-collapse collapse show" aria-labelledby="sex_hd" data-bs-parent="#m_filter">
                                    <div className="accordion-body">
                                        <div className="form-check py-1">
                                            <input className="form-check-input me-3" type="checkbox" value="" id="male" />
                                            <label className="form-check-label" htmlFor="male">
                                                {" "}
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check py-1">
                                            <input className="form-check-input me-3" type="checkbox" value="" id="female" />
                                            <label className="form-check-label" htmlFor="female">
                                                {" "}
                                                Female{" "}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Size Selector */}
                            <div className="accordion-item px-4">
                                <h2 className="accordion-header" id="size_hd">
                                    <button className="accordion-button text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-size" aria-expanded="false" aria-controls="flush-size">
                                        Size
                                    </button>
                                </h2>
                                <div id="flush-size" className="accordion-collapse collapse show" ari-labelledby="size_hd" data-bs-parent="#m_filter">
                                    <div className="accordion-body">
                                        <ul className="s_list">
                                            <li>S</li>
                                            <li>M</li>
                                            <li>L</li>
                                            <li>XL</li>
                                            <li>XXL</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Availability */}
                            <div className="accordion-item px-4">
                                <h2 className="accordion-header" id="avail_hd">
                                    <button className="accordion-button text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-avail" aria-expanded="false" aria-controls="flush-avail">
                                        Availability
                                    </button>
                                </h2>
                                <div id="flush-avail" className="accordion-collapse collapse show" aria-labelledby="avail_hd" data-bs-parent="#m_filter">
                                    <div className="accordion-body">
                                        <div className="form-check py-1">
                                            <input className="form-check-input me-3" type="checkbox" value="" id="i_stock" />
                                            <label className="form-check-label" htmlFor="i_stock">
                                                {" "}
                                                In Stock{" "}
                                            </label>
                                        </div>
                                        <div className="form-check py-1">
                                            <input className="form-check-input me-3" type="checkbox" value="" id="o_stock" />
                                            <label className="form-check-label" htmlFor="o_stock">
                                                {" "}
                                                Out of Stock{" "}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Fragment>
                    {data && data.length > 0 ?
                        (
                            <Fragment >
                                <div className="grid">
                                    {data.map((item, index) => {
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
        </Fragment>
    );
};

export default Coats;

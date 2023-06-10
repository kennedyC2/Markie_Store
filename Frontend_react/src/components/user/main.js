import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { FetchAppData } from "../action";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
    const Dispatch = useDispatch()
    const { appData } = useSelector(state => state)

    // Load appData
    useEffect(() => {
        if (Object.keys(appData).length === 0) {
            FetchAppData(Dispatch)
        }

    }, [appData, Dispatch])

    const [selectedCatg, setCatg] = useState("")
    const { brand, colors, sex, sizes_1, sizes_2 } = appData

    const selectCatg = useCallback((str) => {
        // Set Brand
        setCatg(str)

        // Uncheck all checked colors
        document.querySelectorAll("input[type=checkbox]:checked").forEach(each => {
            each.checked = false
        })
    }, [])

    return (
        <div className="container category body w_1200 d-flex justify-content-between m-auto">
            <div className="lft d-none d-lg-block pt-1">
                <div className="accordion accordion-flush" id="d_filter">
                    {/* Brand Selector */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="brand_hd">
                            <button className="accordion-button text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush_brand" aria-expanded="false" aria-controls="flush_brand">
                                Brand
                            </button>
                        </h2>
                        <div id="flush_brand" className="accordion-collapse collapse show" aria-labelledby="brand_hd" data-bs-parent="">
                            <div className="accordion-body">
                                <ul className="b_list">{
                                    brand && Object.keys(brand).length > 0 && selectedCatg !== "" && brand[selectedCatg].length > 0 ? (
                                        brand[selectedCatg].map((each, index) => {
                                            return (
                                                <li key={index} onClick={e => {
                                                    let selectedBd = document.querySelector("li.selectedBd")

                                                    if (selectedBd) {
                                                        selectedBd.classList.remove("selectedBd")
                                                    }

                                                    e.currentTarget.classList.add("selectedBd")
                                                    // setSelectedSize(each)
                                                }}>{each}</li>
                                            )
                                        })
                                    ) : (
                                        <div className="empty emptyS">
                                            <p>------- &nbsp;  no data &nbsp; -------</p>
                                        </div>
                                    )
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Colour Selector */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="colour_hd">
                            <button className="accordion-button text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-colour" aria-expanded="false" aria-controls="flush-colour">
                                Colour
                            </button>
                        </h2>
                        <div id="flush-colour" className="accordion-collapse collapse show" aria-labelledby="colour_hd" data-bs-parent="">
                            <div className="accordion-body">
                                {
                                    colors && Object.keys(colors).length > 0 && selectedCatg !== "" && colors[selectedCatg].length > 0 ? (
                                        <ul className="c_list">
                                            {colors[selectedCatg].map((each, index) => {
                                                return (
                                                    <input key={index} className="form-check-input" type="checkbox" id="checkboxNoLabel" style={{ backgroundColor: each }} onClick={e => {
                                                        document.querySelectorAll("input[type=checkbox]:checked").forEach(g => {
                                                            g.checked = false
                                                        })

                                                        e.currentTarget.checked = true
                                                    }} />
                                                )
                                            })}
                                        </ul>
                                    ) : (
                                        <div className="empty emptyS">
                                            <p>------- &nbsp;  no data &nbsp; -------</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    {/* Sex */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="sex_hd">
                            <button className="accordion-button text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-sex" aria-expanded="false" aria-controls="flush-sex">
                                Sex
                            </button>
                        </h2>
                        <div id="flush-sex" className="accordion-collapse collapse show" aria-labelledby="sex_hd" data-bs-parent="">
                            <div className="accordion-body">
                                {
                                    sex && sex.length > 0 ? (

                                        sex.map((each, index) => {
                                            return (

                                                <div key={index} className="form-check py-1">
                                                    <input className="form-check-input me-3" type="checkbox" value={each} id={each} />
                                                    <label className="form-check-label text-capitalize" htmlFor={each}>
                                                        {" "}
                                                        {each}
                                                    </label>
                                                </div>
                                            )
                                        })

                                    ) : (
                                        <div className="empty emptyS">
                                            <p>------- &nbsp;  no data &nbsp; -------</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    {/* Size Selector */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="size_hd">
                            <button className="accordion-button text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-size" aria-expanded="false" aria-controls="flush-size">
                                Size
                            </button>
                        </h2>
                        <div id="flush-size" className="accordion-collapse collapse show" ari-labelledby="size_hd" data-bs-parent="">
                            <div className="accordion-body">
                                <ul className="s_list">
                                    {
                                        sizes_1 && sizes_2 && Object.keys(sizes_1).length > 0 && Object.keys(sizes_2).length > 0 ? selectedCatg === "crocs" || selectedCatg === "sneakers" ? (
                                            Object.entries(sizes_2).map(([key, value], index) => {
                                                return (
                                                    <li key={index} onClick={e => {
                                                        let selectedBd = document.querySelector("li.selectedBd")

                                                        if (selectedBd) {
                                                            selectedBd.classList.remove("selectedBd")
                                                        }

                                                        e.currentTarget.classList.add("selectedBd")
                                                    }}>{value}</li>
                                                )
                                            })
                                        ) : (
                                            Object.entries(sizes_1).map(([key, value], index) => {
                                                return (

                                                    <li key={index} onClick={e => {
                                                        let selectedBd = document.querySelector("li.selectedBd")

                                                        if (selectedBd) {
                                                            selectedBd.classList.remove("selectedBd")
                                                        }

                                                        e.currentTarget.classList.add("selectedBd")
                                                    }}>{value}</li>
                                                )
                                            })
                                        ) : (
                                            <div className="empty emptyS">
                                                <p>------- &nbsp;  no data &nbsp; -------</p>
                                            </div>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rgt">
                <Outlet context={[selectCatg]} />
            </div>
        </div>
    );
};

export default User;
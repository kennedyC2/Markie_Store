import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";
import { useOutletContext } from "react-router-dom";

const AdminCoats = ({ FetchData }) => {
    const [setData, dKeys] = useOutletContext()
    const { coats, trending, newArrivals } = useSelector((state) => state);
    const Dispatch = useDispatch();
    const [display, setDisplay] = useState(true)

    const updateState = (pos, id) => {
        const coat = coats[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: coat["title"],
                brand: coat["brand"],
                quantity: coat["quantity"],
                price: coat["price"],
                dColor: coat["dColor"],
                colors: coat["colors"],
                category: coat["category"],
                tags: coat["tags"],
                sizes: coat["sizes"],
                sold: coat["sold"],
                sex: coat["sex"],
                order: coat["order"],
                misc: coat["misc"],
            },
            images: {
                main: coat["images"]["main"],
                image_1: coat["images"]["image_1"],
                image_2: coat["images"]["image_2"],
            },
            newImages: {
                main: "",
                image_1: "",
                image_2: "",
            }
        }
        setData(_data)
    }

    const deleteItem = async (e, id, category, images, misc) => {
        e.preventDefault();

        // Hide
        setDisplay(false)

        try {
            await axios({
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                url: domain + "products/delete?t=" + id + "&c=" + category,
                data: {
                    images: images,
                    misc: misc
                }
            });

            const updated = coats.filter(each => {
                return each._id !== id
            })

            // Notification
            const notification = document.getElementById("notifB")
            notification.firstChild.innerHTML = "SUCCESS"
            notification.classList.add("showNotif")

            setTimeout(() => {
                // Show
                setDisplay(true)

                // Close Notification
                notification.classList.remove("showNotif")

                setTimeout(() => {
                    // Close Modal
                    e.target.previousSibling.click()

                    // Update
                    Dispatch({ type: dKeys[category]["delete"], payload: updated })
                }, 500);
            }, 1000);
        } catch (error) {
            // Show
            setDisplay(true)

            // Continue
            const { data } = error.response

            // Notification
            const notification = document.getElementById("notifA")
            notification.firstChild.innerHTML = data.message
            notification.classList.add("showNotif")

            setTimeout(() => {
                // Close Notification
                notification.classList.remove("showNotif")

                // Close Modal
                e.target.previousSibling.click()
            }, 1000);
        }
    };

    const addTN = async (e, item, trend) => {
        e.preventDefault();

        // Hide
        e.target.classList.add("d-none")
        trend ? e.target.nextSibling.classList.remove("d-none") : e.target.previousSibling.classList.remove("d-none")

        try {
            await axios({
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                url: trend ? domain + "products/trending/add" : domain + "products/newArrivals/add",
                data: item
            });

            // Notification
            const notification = document.getElementById("notifB")
            notification.firstChild.innerHTML = "SUCCESS"
            notification.classList.add("showNotif")

            setTimeout(() => {
                // Show
                trend ? e.target.nextSibling.classList.add("d-none") : e.target.previousSibling.classList.add("d-none")
                e.target.classList.remove("d-none")

                // Close Notification
                notification.classList.remove("showNotif")
                // Update
                Dispatch({ type: trend ? "addToTrending" : "addToNewArrivals", payload: item })

            }, 1000);
        } catch (error) {
            // Show
            trend ? e.target.nextSibling.classList.add("d-none") : e.target.previousSibling.classList.add("d-none")
            e.target.classList.remove("d-none")

            // Continue
            const { data } = error.response

            // Notification
            const notification = document.getElementById("notifA")
            notification.firstChild.innerHTML = data.message
            notification.classList.add("showNotif")

            setTimeout(() => {
                // Close Notification
                notification.classList.remove("showNotif")
            }, 1000);
        }
    };

    useEffect(() => {
        if (coats.length === 0) {
            FetchData("products", "coats", Dispatch, "createCoats")
        }

        if (trending.data.length === 0) {
            FetchData("trending", null, Dispatch, "createTrending", "TH")
        }

        if (newArrivals.data.length === 0) {
            FetchData("newArrivals", null, Dispatch, "createNewArrivals", "TH")
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            {coats && coats.length > 0 ?
                <div className="w-100 grid">
                    {
                        coats.map((item, index) => {
                            return (
                                Admin_DSP(domain, index, item, updateState, deleteItem, addTN, display, trending.id, newArrivals.id)
                            )
                        })
                    }
                </div>
                :
                <Fragment>
                    <div className="empty">
                        <p>------- &nbsp;  no data &nbsp; -------</p>
                    </div>
                </Fragment>
            }
        </Fragment>
    );
};

export default AdminCoats;

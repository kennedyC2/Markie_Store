import { Fragment, useState, useEffect } from "react";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import axios from "axios";
import { domain } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { FetchAppData } from "../../action";
import { Link, Outlet } from "react-router-dom";

// InitialState
const InitialState = {
    item: -1,
    id: "",
    details: {
        title: "",
        brand: "",
        quantity: "",
        sold: "0",
        price: "",
        dColor: "",
        colors: [],
        category: "",
        description: "",
        sizes: {},
        sex: "male",
        tags: "",
        misc: [],
    },
    images: {
        index: "",
        main: "",
        image_1: "",
        image_2: "",
    },
}

// Dispatch Keys
const dKeys = {
    coats: {
        add: "addCoat",
        update: "updateCoat",
        delete: "deleteCoat"
    },
    scrubs: {
        add: "addScrub",
        update: "updateScrub",
        delete: "deleteScrub"
    },
    crocs: {
        add: "addCroc",
        update: "updateCroc",
        delete: "deleteCroc"
    },
    sneakers: {
        add: "addSneaker",
        update: "updateSneaker",
        delete: "deleteSneaker"
    },
    penTorch: {
        add: "addTorch",
        update: "updateTorch",
        delete: "deleteTorch"
    },
    scrubCaps: {
        add: "addCap",
        update: "updateCap",
        delete: "deleteCap"
    },
    brooches: {
        add: "addBrooch",
        update: "updateBrooch",
        delete: "deleteBrooch"
    },
    cardHolders: {
        add: "addCardHolder",
        update: "updateCardHolder",
        delete: "deleteCardHolder"
    },
    shirts: {
        add: "addShirt",
        update: "updateShirt",
        delete: "deleteShirt"
    },
}

const AdminList = () => {
    const Dispatch = useDispatch()
    const _data = useSelector(state => state)
    const [data, setData] = useState(InitialState);

    // Load appData
    useEffect(() => {
        if (Object.keys(_data.appData).length === 0) {
            FetchAppData(Dispatch)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const submitForm = async (e) => {
        e.preventDefault();
        console.log(data.details)

        delete data["images"]["index"];

        try {
            const response = await axios({
                method: data["item"] < 0 ? "POST" : "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                url: data["item"] < 0 ? domain + "products/add" : domain + "products/update",
                data: data,
            });

            const result = response.data;

            if (data["item"] < 0) {
                // Update State
                Dispatch({ type: dKeys[data.details.category.toLowerCase()]["add"], payload: result })
            } else {
                const newData = [..._data[data.details.category]]
                newData[data["item"]] = result

                // Update State
                Dispatch({ type: dKeys[data.details.category.toLowerCase()]["update"], payload: newData })
            }

            // Close Modal
            document.getElementById("f2c").click()

            // Reset
            setData(InitialState)

        } catch (error) {
            console.log(error);
        }
    };

    const clickSubmit = () => {
        document.querySelector("button.f1_sub").click();
    };

    return (
        <Fragment>
            <div className="mt-4 sub_list">
                <div className="d-flex justify-content-between">
                    <div className="lft">
                        <ul className="d_list">
                            <li>
                                <Link to="/admin/product/coats">Coats</Link>
                            </li>
                            <li>
                                <Link to="/admin/product/scrubs">Scrubs</Link>
                            </li>
                            <li>
                                <Link to="/admin/product/crocs">Crocs</Link>
                            </li>
                            <li>
                                <Link to="/admin/product/sneakers">Sneakers</Link>
                            </li>
                            <li>
                                <Link to="/admin/product/penTorch">Pen Torch</Link>
                            </li>
                            <li>
                                <Link to="/admin/product/scrubCaps">Scrub Caps</Link>
                            </li>
                            <li>
                                <Link to="/admin/product/CardHolder">ID Card Holder</Link>
                            </li>
                            <li>
                                <Link to="/admin/product/shirts">Inscription T-shirt</Link>
                            </li>
                            <li>
                                <Link to="/admin/product/brooches">Medical Brooches</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="rgt">
                        <Outlet context={[setData, dKeys]} />
                    </div>
                </div>
            </div>

            <Link className="btn btn-primary rounded-circle" title="Go to Home" to="/" role="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" className="bi bi-house rounded-circle" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                </svg>
            </Link>

            <a className="btn btn-primary rounded-circle" title="Add Product" data-bs-toggle="modal" href="#staticBackdrop" role="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="#fff" className="bi bi-plus rounded-circle" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </a>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" aria-hidden="true" aria-labelledby="staticBackdropLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modalOne">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 invisible" id="staticBackdropLabel">
                                Details
                            </h1>
                            <button type="button" className="btn-close" id="f1c" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form1 data={data} setData={setData} submit={submitForm} appData={_data.appData} />
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary px-4" data-bs-target="#staticBackdrop3" data-bs-toggle="modal">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" aria-hidden="true" aria-labelledby="staticBackdropLabel3" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modalOne">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 invisible" id="staticBackdropLabel">
                                Colors
                            </h1>
                            <button type="button" className="btn-close" id="f3c" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ minHeight: "400px" }}>
                            <Form3 data={data} setData={setData} submit={submitForm} appData={_data.appData} />
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                            <button className="btn btn-secondary px-4" data-bs-target="#staticBackdrop" data-bs-toggle="modal">
                                Previous
                            </button>
                            <button className="btn btn-secondary px-4" data-bs-target="#staticBackdrop2" data-bs-toggle="modal">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" aria-hidden="true" aria-labelledby="staticBackdropLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modalTwo">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-6 invisible" id="staticBackdropLabel2">
                                Images
                            </h1>
                            <button type="button" className="btn-close" id="f2c" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form2 data={data} setData={setData} appData={_data.appData} />
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                            <button className="btn btn-secondary px-4" data-bs-target="#staticBackdrop3" data-bs-toggle="modal">
                                Previous
                            </button>
                            <button type="button" className="btn btn-secondary  px-4" onClick={clickSubmit}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
};

export default AdminList;

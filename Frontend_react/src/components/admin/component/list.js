import { Fragment, useState, useEffect } from "react";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import axios from "axios";
import { domain } from "../../helpers";
import AdminBrooches from "./brooches";
import AdminCardHolder from "./cardHolder";
import AdminCoats from "./coats";
import AdminCrocs from "./crocs";
import AdminTorch from "./penTorch";
import AdminCaps from "./scrubCaps";
import AdminScrubs from "./scrubs";
import AdminSneakers from "./sneakers";
import AdminShirts from "./tShirt";
import { useDispatch, useSelector } from "react-redux";
import { FetchAppData } from "../../action";

// InitialState
const InitialState = {
    item: -1,
    id: "",
    details: {
        title: "",
        brand: "",
        quantity: "",
        purchased: 0,
        price: "",
        dColor: "",
        colors: [],
        category: "",
        description: "",
        sizes: {},
        sex: "male",
        misc: [],
        sold: 0,
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

            // Reset
            setData(InitialState)

            // Close Modal
            document.getElementById("f2c").click()

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
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="v-pills-coats-tab" data-bs-toggle="pill" data-bs-target="#v-pills-coats" type="button" role="tab" aria-controls="v-pills-coats" aria-selected="true">
                            Ward coats
                        </button>
                        <button className="nav-link" id="v-pills-scrubs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-scrubs" type="button" role="tab" aria-controls="v-pills-scrubs" aria-selected="false">
                            Scrubs
                        </button>
                        <button className="nav-link" id="v-pills-crocs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-crocs" type="button" role="tab" aria-controls="v-pills-crocs" aria-selected="false">
                            Crocs
                        </button>
                        <button className="nav-link" id="v-pills-sneakers-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sneakers" type="button" role="tab" aria-controls="v-pills-sneakers" aria-selected="false">
                            Sneakers
                        </button>
                        <button className="nav-link" id="v-pills-torch-tab" data-bs-toggle="pill" data-bs-target="#v-pills-torch" type="button" role="tab" aria-controls="v-pills-torch" aria-selected="false">
                            Pen Torch
                        </button>
                        <button className="nav-link" id="v-pills-caps-tab" data-bs-toggle="pill" data-bs-target="#v-pills-caps" type="button" role="tab" aria-controls="v-pills-caps" aria-selected="false">
                            Scrub Caps
                        </button>
                        <button className="nav-link" id="v-pills-cards-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cards" type="button" role="tab" aria-controls="v-pills-cards" aria-selected="false">
                            ID Card Holder
                        </button>
                        <button className="nav-link" id="v-pills-shirts-tab" data-bs-toggle="pill" data-bs-target="#v-pills-shirts" type="button" role="tab" aria-controls="v-pills-shirts" aria-selected="false">
                            Inscription T-Shirt
                        </button>
                        <button className="nav-link" id="v-pills-brooches-tab" data-bs-toggle="pill" data-bs-target="#v-pills-brooches" type="button" role="tab" aria-controls="v-pills-brooches" aria-selected="false">
                            Brooches
                        </button>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        <AdminCoats setData={setData} dKeys={dKeys} />
                        <AdminScrubs setData={setData} dKeys={dKeys} />
                        <AdminCrocs setData={setData} dKeys={dKeys} />
                        <AdminSneakers setData={setData} dKeys={dKeys} />
                        <AdminTorch setData={setData} dKeys={dKeys} />
                        <AdminCaps setData={setData} dKeys={dKeys} />
                        <AdminCardHolder setData={setData} dKeys={dKeys} />
                        <AdminShirts setData={setData} dKeys={dKeys} />
                        <AdminBrooches setData={setData} dKeys={dKeys} />
                    </div>
                </div>
            </div>

            <a className="btn btn-primary rounded-circle" title="Add Product" data-bs-toggle="modal" href="#staticBackdrop" role="button" onClick={() => setData(InitialState)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="#fff" className="bi bi-plus rounded-circle" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </a>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" aria-hidden="true" aria-labelledby="staticBackdropLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modalOne">
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
                <div className="modal-dialog modal-dialog-centered modalOne">
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
                <div className="modal-dialog modal-dialog-centered modalTwo">
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
        </Fragment>
    );
};

export default AdminList;

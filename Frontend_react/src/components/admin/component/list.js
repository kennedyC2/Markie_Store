import { Fragment, useState, useEffect } from "react";
import Form1 from "./form1";
import Form2 from "./form2";
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

// InitialState
const InitialState = {
    item: -1,
    id: "",
    details: {
        title: "crocs",
        quantity: 0,
        price: 0,
        colors: [],
        category: "crocs",
        description: "",
        misc: [],
    },
    images: {
        index: "",
        main: "",
        image_1: "",
        image_2: "",
    },
}

const AdminList = () => {
    const [data, setData] = useState(InitialState);

    const submitForm = async (e) => {
        e.preventDefault();

        delete data["images"]["index"];

        try {
            const response = await axios({
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                url: data["item"] < 0 ? domain + "products/add" : domain + "products/update",
                data: data,
            });

            const result = response.data;

            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    const clickSubmit = () => {
        document.querySelector("button.f1_sub").click();
    };

    useEffect(() => {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll(".needs-validation");

        // Loop over them and prevent submission
        Array.from(forms).forEach((form) => {
            form.addEventListener(
                "submit",
                (event) => {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    form.classList.add("was-validated");
                },
                false
            );
        });
    });

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
                        <AdminCoats setData={setData} />
                        <AdminScrubs setData={setData} />
                        <AdminCrocs setData={setData} />
                        <AdminSneakers setData={setData} />
                        <AdminTorch setData={setData} />
                        <AdminCaps setData={setData} />
                        <AdminCardHolder setData={setData} />
                        <AdminShirts setData={setData} />
                        <AdminBrooches setData={setData} />
                    </div>
                </div>
            </div>

            <a className="btn btn-primary" data-bs-toggle="modal" href="#staticBackdrop" role="button" onClick={() => setData(InitialState)}>
                Add Product
            </a>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" aria-hidden="true" aria-labelledby="staticBackdropLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modalOne">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 invisible" id="staticBackdropLabel">
                                Details
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form1 data={data} setData={setData} submit={submitForm} />
                        </div>
                        <div className="modal-footer">
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
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form2 data={data} setData={setData} />
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                            <button className="btn btn-secondary px-4" data-bs-target="#staticBackdrop" data-bs-toggle="modal">
                                Back
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

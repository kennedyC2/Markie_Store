import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";

const AdminCrocs = (props) => {
    const { setData } = props;
    const { crocs } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const _data = {
            item: pos,
            id: id,
            details: {
                title: crocs[pos]["title"],
                quantity: crocs[pos]["quantity"],
                price: crocs[pos]["price"],
                colors: crocs[pos]["colors"],
                category: crocs[pos]["category"],
                description: crocs[pos]["description"],
                misc: crocs[pos]["misc"],
            },
            images: {
                main: crocs[pos]["images"]["main"],
                image_1: crocs[pos]["images"]["image_1"],
                image_2: crocs[pos]["images"]["image_2"],
            },
        }
        setData(_data)
    }

    const deleteItem = async (e, pos, id) => {
        e.preventDefault();

        try {
            const response = await axios({
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                url: domain + "products/delete?t=" + id,
            });

            const result = response.data;

            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async () => {
            const response = await axios.get(domain + "products?i=marky&a=true&c=scrubs");
            Dispatch({ type: "createCrocs", payload: response.data });
        })();
    }, [Dispatch]);

    return (
        <Fragment>
            <div className="tab-pane fade" id="v-pills-crocs" role="tabpanel" aria-labelledby="v-pills-crocs-tab" tabIndex="0">
                <div className="w-100 grid">
                    {crocs && crocs.length > 0
                        ? crocs.map((item, index) => {
                            return (
                                <div key={index} className="card" id={item._id + "_" + index}>
                                    <img src={domain + "image/" + item.images.main} className="card-img-top" alt="crocs" width={"100%"} height={"100%"} />
                                    <div className="card-body">
                                        <div>
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                        </div>

                                        <div className="card-body d-flex justify-content-between">
                                            <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target={"#crocs_" + index + "a"}>
                                                view
                                            </button>

                                            <div className="modal fade" id={"crocs_" + index + "a"} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={"crocs_" + index + "a_Label"} aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modalThree">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5 invisible" id={"crocs_" + index + "a_Label"}>Modal title</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body text-start">
                                                            <div>
                                                                <div className="">
                                                                    <h5 className="title">Product: {item.title}</h5>
                                                                    <div className="mt-2 d-flex justify-content-between">
                                                                        <p>Price: {item.price}</p>
                                                                        <p>In Stock: {item.quantity}</p>
                                                                        <p>Purchased: {item.sold}</p>
                                                                    </div>
                                                                    <p className="desc">Description: {item.description}</p>
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
                                                        <div className="modal-footer">
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
                                                <div className="modal-dialog modal-dialog-centered modalThree">
                                                    <div className="modal-content">
                                                        <div className="modal-body text-start py-5">
                                                            Do you really want to delete this item?
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary px-5" data-bs-dismiss="modal">No</button>
                                                            <button type="button" className="btn btn-danger px-5" data-bs-dismiss="modal" onClick={(e) => deleteItem(e, index, item._id)}>Yes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        : ""}
                </div>
            </div>
        </Fragment>
    );
};

export default AdminCrocs;

import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";

const AdminCrocs = (props) => {
    const { setData, dKeys } = props;
    const { crocs } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const croc = crocs[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: croc["title"],
                brand: croc["brand"],
                quantity: croc["quantity"],
                price: croc["price"],
                dColor: croc["dColor"],
                colors: croc["colors"],
                category: croc["category"],
                description: croc["description"],
                sizes: croc["sizes"],
                sold: croc["sold"],
                sex: croc["sex"],
                order: croc["order"],
                misc: croc["misc"],
            },
            images: {
                main: croc["images"]["main"],
                image_1: croc["images"]["image_1"],
                image_2: croc["images"]["image_2"],
            },
            newImages: {
                main: "",
                image_1: "",
                image_2: "",
            }
        }
        setData(_data)
    }

    const deleteItem = async (e, id, category, images) => {
        e.preventDefault();

        try {
            await axios({
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                url: domain + "products/delete?t=" + id + "&c=" + category,
                data: images
            });

            const updated = crocs.filter(each => {
                return each._id !== id
            })

            Dispatch({ type: dKeys[category]["delete"], payload: updated })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (crocs.length === 0) {
            (async () => {
                const response = await axios.get(domain + "products/get?i=marky&a=true&c=crocs");
                Dispatch({ type: "createCrocs", payload: response.data });
            })();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <div className="tab-pane fade" id="v-pills-crocs" role="tabpanel" aria-labelledby="v-pills-crocs-tab" tabIndex="0">
                <Fragment>
                    {crocs && crocs.length > 0 ?
                        <div className="w-100 grid">
                            {
                                crocs.map((item, index) => {
                                    return (
                                        Admin_DSP(domain, index, item, updateState, deleteItem)
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
            </div>
        </Fragment>
    );
};

export default AdminCrocs;

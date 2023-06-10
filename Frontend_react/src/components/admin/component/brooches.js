import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";

const AdminBrooches = (props) => {
    const { setData, dKeys } = props;
    const { brooches } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const brooch = brooches[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: brooch["title"],
                quantity: brooch["quantity"],
                price: brooch["price"],
                colors: brooch["colors"],
                category: brooch["category"],
                description: brooch["description"],
                misc: brooch["misc"],
            },
            images: {
                main: brooch["images"]["main"],
                image_1: brooch["images"]["image_1"],
                image_2: brooch["images"]["image_2"],
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

            const updated = brooches.filter(each => {
                return each._id !== id
            })

            Dispatch({ type: dKeys[category]["delete"], payload: updated })
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        if (brooches.length === 0) {
            (async () => {
                const response = await axios.get(domain + "products/get?i=marky&a=true&c=brooches");
                Dispatch({ type: "createBrooches", payload: response.data });
            })();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <div className="tab-pane fade" id="v-pills-brooches" role="tabpanel" aria-labelledby="v-pills-brooches-tab" tabIndex="0">
                <Fragment>
                    {brooches && brooches.length > 0 ?
                        <div className="w-100 grid">
                            {
                                brooches.map((item, index) => {
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

export default AdminBrooches;

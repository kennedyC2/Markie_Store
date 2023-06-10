import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";

const AdminCaps = (props) => {
    const { setData, dKeys } = props;
    const { scrubCaps } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const scrubCap = scrubCaps[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: scrubCap["title"],
                quantity: scrubCap["quantity"],
                price: scrubCap["price"],
                colors: scrubCap["colors"],
                category: scrubCap["category"],
                description: scrubCap["description"],
                misc: scrubCap["misc"],
            },
            images: {
                main: scrubCap["images"]["main"],
                image_1: scrubCap["images"]["image_1"],
                image_2: scrubCap["images"]["image_2"],
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

            const updated = scrubCaps.filter(each => {
                return each._id !== id
            })

            Dispatch({ type: dKeys[category]["delete"], payload: updated })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (scrubCaps.length === 0) {
            (async () => {
                const response = await axios.get(domain + "products/get?i=marky&a=true&c=scrubCaps");
                Dispatch({ type: "createCaps", payload: response.data });
            })();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <div className="tab-pane fade" id="v-pills-caps" role="tabpanel" aria-labelledby="v-pills-caps-tab" tabIndex="0">
                <Fragment>
                    {scrubCaps && scrubCaps.length > 0 ?
                        <div className="w-100 grid">
                            {
                                scrubCaps.map((item, index) => {
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

export default AdminCaps;

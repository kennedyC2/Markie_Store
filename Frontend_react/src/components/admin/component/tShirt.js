import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";

const AdminShirts = (props) => {
    const { setData, dKeys } = props;
    const { shirts } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const shirt = shirts[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: shirt["title"],
                quantity: shirt["quantity"],
                price: shirt["price"],
                colors: shirt["colors"],
                category: shirt["category"],
                description: shirt["description"],
                misc: shirt["misc"],
            },
            images: {
                main: shirt["images"]["main"],
                image_1: shirt["images"]["image_1"],
                image_2: shirt["images"]["image_2"],
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

            const updated = shirts.filter(each => {
                return each._id !== id
            })

            Dispatch({ type: dKeys[category]["delete"], payload: updated })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (shirts.length === 0) {
            (async () => {
                const response = await axios.get(domain + "products/get?i=marky&a=true&c=shirts");
                Dispatch({ type: "createShirts", payload: response.data });
            })();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <div className="tab-pane fade" id="v-pills-shirts" role="tabpanel" aria-labelledby="v-pills-shirts-tab" tabIndex="0">
                <Fragment>
                    {shirts && shirts.length > 0 ?
                        <div className="w-100 grid">
                            {
                                shirts.map((item, index) => {
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

export default AdminShirts;

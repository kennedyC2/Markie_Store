import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";

const AdminScrubs = (props) => {
    const { setData, dKeys } = props;
    const { scrubs } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const scrub = scrubs[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: scrub["title"],
                quantity: scrub["quantity"],
                price: scrub["price"],
                colors: scrub["colors"],
                category: scrub["category"],
                description: scrub["description"],
                misc: scrub["misc"],
            },
            images: {
                main: scrub["images"]["main"],
                image_1: scrub["images"]["image_1"],
                image_2: scrub["images"]["image_2"],
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

            const updated = scrubs.filter(each => {
                return each._id !== id
            })

            Dispatch({ type: dKeys[category]["delete"], payload: updated })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (scrubs.length === 0) {
            (async () => {
                const response = await axios.get(domain + "products/get?i=marky&a=true&c=scrubs");
                console.log(response.data)
                Dispatch({ type: "createScrubs", payload: response.data });
            })();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <div className="tab-pane fade" id="v-pills-scrubs" role="tabpanel" aria-labelledby="v-pills-scrubs-tab" tabIndex="0">
                <Fragment>
                    {scrubs && scrubs.length > 0 ?
                        <div className="w-100 grid">
                            {
                                scrubs.map((item, index) => {
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

export default AdminScrubs;

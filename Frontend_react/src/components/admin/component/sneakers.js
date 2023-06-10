import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";

const AdminSneakers = (props) => {
    const { setData, dKeys } = props;
    const { sneakers } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const sneaker = sneakers[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: sneaker["title"],
                quantity: sneaker["quantity"],
                price: sneaker["price"],
                colors: sneaker["colors"],
                category: sneaker["category"],
                description: sneaker["description"],
                misc: sneaker["misc"],
            },
            images: {
                main: sneaker["images"]["main"],
                image_1: sneaker["images"]["image_1"],
                image_2: sneaker["images"]["image_2"],
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

            const updated = sneakers.filter(each => {
                return each._id !== id
            })

            Dispatch({ type: dKeys[category]["delete"], payload: updated })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (sneakers.length === 0) {
            (async () => {
                const response = await axios.get(domain + "products/get?i=marky&a=true&c=sneakers");
                Dispatch({ type: "createSneakers", payload: response.data });
            })();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <div className="tab-pane fade" id="v-pills-sneakers" role="tabpanel" aria-labelledby="v-pills-sneakers-tab" tabIndex="0">
                <Fragment>
                    {sneakers && sneakers.length > 0 ?
                        <div className="w-100 grid">
                            {
                                sneakers.map((item, index) => {
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

export default AdminSneakers;

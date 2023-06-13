import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";
import { useOutletContext } from "react-router-dom";

const AdminTorch = () => {
    const [setData, dKeys] = useOutletContext()
    const { penTorch } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const penT = penTorch[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: penT["title"],
                brand: penT["brand"],
                quantity: penT["quantity"],
                price: penT["price"],
                dColor: penT["dColor"],
                colors: penT["colors"],
                category: penT["category"],
                description: penT["description"],
                sizes: penT["sizes"],
                sold: penT["sold"],
                sex: penT["sex"],
                order: penT["order"],
                misc: penT["misc"],
            },
            images: {
                main: penT["images"]["main"],
                image_1: penT["images"]["image_1"],
                image_2: penT["images"]["image_2"],
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

            const updated = penTorch.filter(each => {
                return each._id !== id
            })

            Dispatch({ type: dKeys[category]["delete"], payload: updated })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (penTorch.length === 0) {
            (async () => {
                const response = await axios.get(domain + "products/get?i=marky&a=true&c=penTorch");
                Dispatch({ type: "createTorch", payload: response.data });
            })();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            {penTorch && penTorch.length > 0 ?
                <div className="w-100 grid">
                    {
                        penTorch.map((item, index) => {
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
    );
};

export default AdminTorch;

import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";
import { useOutletContext } from "react-router-dom";

const AdminCoats = () => {
    const [setData, dKeys] = useOutletContext()
    const { coats } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const coat = coats[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: coat["title"],
                brand: coat["brand"],
                quantity: coat["quantity"],
                price: coat["price"],
                dColor: coat["dColor"],
                colors: coat["colors"],
                category: coat["category"],
                tags: coat["tags"],
                sizes: coat["sizes"],
                sold: coat["sold"],
                sex: coat["sex"],
                order: coat["order"],
                misc: coat["misc"],
            },
            images: {
                main: coat["images"]["main"],
                image_1: coat["images"]["image_1"],
                image_2: coat["images"]["image_2"],
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

            const updated = coats.filter(each => {
                return each._id !== id
            })

            Dispatch({ type: dKeys[category]["delete"], payload: updated })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (coats.length === 0) {
            (async () => {
                const response = await axios.get(domain + "products/get?i=marky&a=true&c=coats");
                Dispatch({ type: "createCoats", payload: response.data });
            })();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            {coats && coats.length > 0 ?
                <div className="w-100 grid">
                    {
                        coats.map((item, index) => {
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

export default AdminCoats;

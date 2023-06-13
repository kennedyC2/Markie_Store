import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";
import { useOutletContext } from "react-router-dom";

const AdminShirts = () => {
    const [setData, dKeys] = useOutletContext()
    const { shirts } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const shirt = shirts[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: shirt["title"],
                brand: shirt["brand"],
                quantity: shirt["quantity"],
                price: shirt["price"],
                dColor: shirt["dColor"],
                colors: shirt["colors"],
                category: shirt["category"],
                description: shirt["description"],
                sizes: shirt["sizes"],
                sold: shirt["sold"],
                sex: shirt["sex"],
                order: shirt["order"],
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
    );
};

export default AdminShirts;

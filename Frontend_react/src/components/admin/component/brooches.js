import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";
import { useOutletContext } from "react-router-dom";

const AdminBrooches = () => {
    const [setData, dKeys] = useOutletContext()
    const { brooches } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const brooch = brooches[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: brooch["title"],
                brand: brooch["brand"],
                quantity: brooch["quantity"],
                price: brooch["price"],
                dColor: brooch["dColor"],
                colors: brooch["colors"],
                category: brooch["category"],
                tags: brooch["tags"],
                sizes: brooch["sizes"],
                sold: brooch["sold"],
                sex: brooch["sex"],
                order: brooch["order"],
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
    );
};

export default AdminBrooches;

import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";
import { useOutletContext } from "react-router-dom";

const AdminCaps = () => {
    const [setData, dKeys] = useOutletContext()
    const { scrubCaps } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const scrubCap = scrubCaps[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: scrubCap["title"],
                brand: scrubCap["brand"],
                quantity: scrubCap["quantity"],
                price: scrubCap["price"],
                dColor: scrubCap["dColor"],
                colors: scrubCap["colors"],
                category: scrubCap["category"],
                description: scrubCap["description"],
                sizes: scrubCap["sizes"],
                sold: scrubCap["sold"],
                sex: scrubCap["sex"],
                order: scrubCap["order"],
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
    );
};

export default AdminCaps;

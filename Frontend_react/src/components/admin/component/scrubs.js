import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";
import { useOutletContext } from "react-router-dom";

const AdminScrubs = () => {
    const [setData, dKeys] = useOutletContext()
    const { scrubs } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const scrub = scrubs[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: scrub["title"],
                brand: scrub["brand"],
                quantity: scrub["quantity"],
                price: scrub["price"],
                dColor: scrub["dColor"],
                colors: scrub["colors"],
                category: scrub["category"],
                tags: scrub["tags"],
                sizes: scrub["sizes"],
                sold: scrub["sold"],
                sex: scrub["sex"],
                order: scrub["order"],
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
    );
};

export default AdminScrubs;

import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";
import { useOutletContext } from "react-router-dom";

const AdminSneakers = () => {
    const [setData, dKeys] = useOutletContext()
    const { sneakers } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const sneaker = sneakers[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: sneaker["title"],
                brand: sneaker["brand"],
                quantity: sneaker["quantity"],
                price: sneaker["price"],
                dColor: sneaker["dColor"],
                colors: sneaker["colors"],
                category: sneaker["category"],
                tags: sneaker["tags"],
                sizes: sneaker["sizes"],
                sold: sneaker["sold"],
                sex: sneaker["sex"],
                order: sneaker["order"],
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
    );
};

export default AdminSneakers;

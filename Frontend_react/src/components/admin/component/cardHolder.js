import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../../helpers";
import { Admin_DSP } from "../../dsp";
import { useOutletContext } from "react-router-dom";

const AdminCardHolder = () => {
    const [setData, dKeys] = useOutletContext()
    const { cardHolders } = useSelector((state) => state);
    const Dispatch = useDispatch();

    const updateState = (pos, id) => {
        const cardHolder = cardHolders[pos]
        const _data = {
            item: pos,
            id: id,
            details: {
                title: cardHolder["title"],
                brand: cardHolder["brand"],
                quantity: cardHolder["quantity"],
                price: cardHolder["price"],
                dColor: cardHolder["dColor"],
                colors: cardHolder["colors"],
                category: cardHolder["category"],
                description: cardHolder["description"],
                sizes: cardHolder["sizes"],
                sold: cardHolder["sold"],
                sex: cardHolder["sex"],
                order: cardHolder["order"],
                misc: cardHolder["misc"],
            },
            images: {
                main: cardHolder["images"]["main"],
                image_1: cardHolder["images"]["image_1"],
                image_2: cardHolder["images"]["image_2"],
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

            const updated = cardHolders.filter(each => {
                return each._id !== id
            })

            Dispatch({ type: dKeys[category]["delete"], payload: updated })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (cardHolders.length === 0) {
            (async () => {
                const response = await axios.get(domain + "products/get?i=marky&a=true&c=cardHolders");
                Dispatch({ type: "createCardHolders", payload: response.data });
            })();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            {cardHolders && cardHolders.length > 0 ?
                <div className="w-100 grid">
                    {
                        cardHolders.map((item, index) => {
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

export default AdminCardHolder;

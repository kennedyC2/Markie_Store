import { Fragment } from "react";
import { useSelector } from "react-redux";

const Form1 = (props) => {
    const { categories } = useSelector(state => state)
    const { data, setData, submit } = props;

    const setColors = (e) => {
        if (data["details"]["colors"].indexOf(e.target.value) < 0) {
            setData({ ...data, ...data["details"]["colors"].push(e.target.value) });
        } else {
            setData({ ...data, ...(data["details"]["colors"] = data["details"]["colors"].filter((color) => color !== e.target.value)) });
        }
    };

    const setMisc = (e) => {
        if (data["details"]["misc"].indexOf(e.target.value) < 0) {
            setData({ ...data, ...data["details"]["misc"].push(e.target.value) });
        } else {
            setData({ ...data, ...(data["details"]["misc"] = data["details"]["misc"].filter((item) => item !== e.target.value)) });
        }
    };
    console.log(data.details)

    return (
        <Fragment>
            <form action="#" method="post" className="needs-validation" onSubmit={submit} noValidate>
                <div className="d-flex justify-content-between fdiv">
                    <div>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                                Title:
                            </label>
                            <input type="text" className="form-control" id="title" name="title" onChange={(e) => setData({ ...data, ...(data["details"]["title"] = e.target.value) })} value={data.details.title} required />
                            <div className="invalid-feedback">Please enter product title.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">
                                Quantity:
                            </label>
                            <input type="text" className="form-control" id="quantity" name="quantity" onChange={(e) => setData({ ...data, ...(data["details"]["quantity"] = e.target.value) })} value={data.details.quantity} required />
                            <div className="invalid-feedback">Please enter product quantity.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">
                                Price:
                            </label>
                            <input type="text" className="form-control" id="price" name="price" onChange={(e) => setData({ ...data, ...(data["details"]["price"] = e.target.value) })} value={data.details.price} required />
                            <div className="invalid-feedback">Please enter product price.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                                Colors:
                            </label>
                            <div className="clr d-flex flex-wrap">
                                <input className="form-check-input" type="checkbox" value="yellow" id="yellow" style={{ backgroundColor: "yellow" }} onChange={(e) => setColors(e)} checked={data.details.colors.indexOf("yellow") > -1 ? true : false} />
                                <input className="form-check-input" type="checkbox" value="green" id="green" style={{ backgroundColor: "green" }} onChange={(e) => setColors(e)} checked={data.details.colors.indexOf("green") > -1 ? true : false} />
                                <input className="form-check-input" type="checkbox" value="blue" id="blue" style={{ backgroundColor: "blue" }} onChange={(e) => setColors(e)} checked={data.details.colors.indexOf("blue") > -1 ? true : false} />
                                <input className="form-check-input" type="checkbox" value="red" id="red" style={{ backgroundColor: "red" }} onChange={(e) => setColors(e)} checked={data.details.colors.indexOf("red") > -1 ? true : false} />
                                <input className="form-check-input" type="checkbox" value="gray" id="gray" style={{ backgroundColor: "gray" }} onChange={(e) => setColors(e)} checked={data.details.colors.indexOf("gray") > -1 ? true : false} />
                                <input className="form-check-input" type="checkbox" value="purple" id="purple" style={{ backgroundColor: "purple" }} onChange={(e) => setColors(e)} checked={data.details.colors.indexOf("purple") > -1 ? true : false} />
                                <input className="form-check-input" type="checkbox" value="pink" id="pink" style={{ backgroundColor: "pink" }} onChange={(e) => setColors(e)} checked={data.details.colors.indexOf("pink") > -1 ? true : false} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <label htmlFor="category" className="form-label">
                                Category:
                            </label>
                            <select className="form-select" id="category" aria-label="select" onChange={(e) => setData({ ...data, ...(data["details"]["category"] = e.target.value) })} value={data.details.category} required>
                                {categories.length > 0 ? (
                                    categories.map((catg, index) => {
                                        return (
                                            <option key={index} value={catg}>{catg}</option>
                                        )
                                    })
                                ) : (
                                    <option value={false}>Empty</option>
                                )}
                            </select>
                            <div className="invalid-feedback">Please select product category.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">
                                Description:
                            </label>
                            <textarea className="form-control" id="desc" rows="5" onChange={(e) => setData({ ...data, ...(data["details"]["description"] = e.target.value) })} value={data.details.description} required></textarea>
                            <div className="invalid-feedback">Please enter product description.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                                Misc:
                            </label>
                            <div className="form-check">
                                <input className="form-check-input me-3" type="checkbox" value="new" id="new" onChange={(e) => setMisc(e)} checked={data.details.misc.indexOf("new") > -1 ? true : false} />
                                <label className="form-check-label" htmlFor="new">
                                    New Arrivals
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input me-3" type="checkbox" value="trend" id="trend" onChange={(e) => setMisc(e)} checked={data.details.misc.indexOf("trend") > -1 ? true : false} />
                                <label className="form-check-label" htmlFor="trend">
                                    Trending
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-sm btn-primary f1_sub" hidden>
                        Submit
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default Form1;

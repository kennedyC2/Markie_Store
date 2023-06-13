import { useEffect } from "react";
import AdminList from "./component/list";
import { useDispatch, useSelector } from "react-redux";
import { createUserData, updateStatus } from "../action";
import { store } from "../main";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const { user, status } = useSelector(state => state)
    const Dispatch = useDispatch()
    const Navigate = useNavigate()
    useEffect(() => {
        // Variables
        const dashboard = document.getElementById("dashboard");
        const menuTab = document.querySelector("ul#myTab");
        const _menuTab = document.querySelector("div#myTabContent");
        const menuTabs = document.querySelectorAll("ul#myTab li");
        let tabs_width = 0;

        if (dashboard) {
            menuTabs.forEach((element) => {
                tabs_width += element.clientWidth;
            });

            const padding = ((menuTab.clientWidth - _menuTab.clientWidth) / 2) + (_menuTab.clientWidth - tabs_width);

            // Centralize menu
            menuTab.setAttribute("style", "padding-left:" + padding + "px");
        }
    });

    // Load User Data
    useEffect(() => {
        if (Object.keys(user).length === 0) {
            createUserData(Dispatch, store)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Load User Status
    useEffect(() => {
        if (Object.keys(status).length === 0) {
            updateStatus(Dispatch, store)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Validate User
    useEffect(() => {
        if (Object.keys(user).length > 0 && Object.keys(status).length > 0) {
            if (!user.admin || !status.active) {
                // Navigate
                Navigate("/", { replace: true })
            }
        }
    })

    return (
        <div className="ext_cnt min-vh-100" id="dashboard">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                        Home
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="products-tab" data-bs-toggle="tab" data-bs-target="#products-tab-pane" type="button" role="tab" aria-controls="products-tab-pane" aria-selected="false">
                        Products
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="settled-tab" data-bs-toggle="tab" data-bs-target="#settled-tab-pane" type="button" role="tab" aria-controls="settled-tab-pane" aria-selected="false">
                        Settled
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pending-tab" data-bs-toggle="tab" data-bs-target="#pending-tab-pane" type="button" role="tab" aria-controls="pending-tab-pane" aria-selected="false">
                        Pending
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    Home
                </div>

                {/* Product list */}
                <div className="tab-pane fade" id="products-tab-pane" role="tabpanel" aria-labelledby="products-tab" tabIndex="0">
                    <AdminList />
                </div>

                <div className="tab-pane fade" id="settled-tab-pane" role="tabpanel" aria-labelledby="settled-tab" tabIndex="0">
                    Settled List
                </div>
                <div className="tab-pane fade" id="pending-tab-pane" role="tabpanel" aria-labelledby="pending-tab" tabIndex="0">
                    Pending List
                </div>
            </div>
        </div>
    );
};

export default Admin;

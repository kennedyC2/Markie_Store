import Header from "./header";
import Footer from "./footer";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { createStore } from "idb-keyval";

// Create Store If Non-existent
export const store = createStore("Makkie-Stores_MEDISH", "MKS-6645008")

const Container = () => {
    return (
        <Fragment>
            <Header />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default Container
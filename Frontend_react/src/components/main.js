import Header from "./header";
import Footer from "./footer";
import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { createStore } from "idb-keyval";
import { FetchAppData, createCart, createUserData, createWishlist, updateStatus } from "./action";

// Create Store If Non-existent
export const store = createStore("Makkie-Stores_MEDISH", "MKS-6645008")

const Container = () => {
    const Dispatch = useDispatch()
    const { appData, user, cart, wishlist, status } = useSelector((state) => state)

    // Load App Data
    useEffect(() => {
        if (Object.keys(appData).length === 0) {
            FetchAppData(Dispatch)
        }

    }, [appData, Dispatch])

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

    // Load User Cart
    useEffect(() => {
        if (Object.keys(cart).length === 0) {
            createCart(Dispatch, store)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Load User Wishlist
    useEffect(() => {
        if (Object.keys(wishlist).length === 0) {
            createWishlist(Dispatch, store)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <Header />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default Container
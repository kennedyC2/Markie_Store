// Reducers
const scrubs = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createScrubs":
            return [...state, ...action.payload]

        case "addScrub":
            return [...state, action.payload];

        case "updateScrub":
            return [...action.payload];

        case "deleteScrub":
            return [...action.payload];

        default:
            return state;
    }
};

const coats = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createCoats":
            return [...state, ...action.payload]

        case "addCoat":
            return [...state, action.payload]

        case "updateCoat":
            return [...action.payload];

        case "deleteCoat":
            return [...action.payload];

        default:
            return state;
    }
};

const crocs = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createCrocs":
            return [...state, ...action.payload]

        case "addCroc":
            return [...state, action.payload]

        case "updateCroc":
            return [...action.payload];

        case "deleteCroc":
            return [...action.payload];

        default:
            return state;
    }
};

const sneakers = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createSneakers":
            return [...state, ...action.payload]

        case "addSneaker":
            return [...state, action.payload]

        case "updateSneaker":
            return [...action.payload];

        case "deleteSneaker":
            return [...action.payload];

        default:
            return state;
    }
};

const penTorch = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createTorch":
            return [...state, ...action.payload]

        case "addTorch":
            return [...state, action.payload]

        case "updateTorch":
            return [...action.payload];

        case "deleteTorch":
            return [...action.payload];

        default:
            return state;
    }
};

const scrubCaps = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createCaps":
            return [...state, ...action.payload]

        case "addCap":
            return [...state, action.payload]

        case "updateCap":
            return [...action.payload];

        case "deleteCap":
            return [...action.payload];

        default:
            return state;
    }
};

const brooches = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createBrooches":
            return [...state, ...action.payload]

        case "addBrooch":
            return [...state, action.payload]

        case "updateBrooch":
            return [...action.payload];

        case "deleteBrooch":
            return [...action.payload];

        default:
            return state;
    }
};

const cardHolders = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createCardHolders":
            return [...state, ...action.payload]

        case "addCardHolder":
            return [...state, action.payload]

        case "updateCardHolder":
            return [...action.payload];

        case "deleteCardHolder":
            return [...action.payload];

        default:
            return state;
    }
};

const shirts = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createShirts":
            return [...state, ...action.payload]

        case "addShirt":
            return [...state, action.payload]

        case "updateShirt":
            return [...action.payload];

        case "deleteShirt":
            return [...action.payload];

        default:
            return state;
    }
};

const home = (state = {}, action) => {
    // ============================
    switch (action.type) {
        case "createHome":
            return { ...state, ...action.payload };

        case "add":
            return { ...state, ...action.payload.data };

        case "update":
            return { ...state, ...(state[action.payload.id] = action.payload.data) };

        case "delete":
            delete state[action.payload.id];
            return { ...state };

        default:
            return state;
    }
};

const appData = (state = {}, action) => {
    // ============================
    switch (action.type) {
        case "createData":
            return { ...state, ...action.payload };

        case "add":
            return { ...state, ...action.payload.data };

        case "updateData":
            return { ...state, ...state["appData"]["brand"] = new Set(state["appData"]["brand"]).add(action.payload) };

        case "delete":
            delete state[action.payload.id];
            return { ...state };

        default:
            return state;
    }
};

const user = (state = {}, action) => {
    // ============================
    switch (action.type) {
        case "createUserData":
            return { ...state, ...action.payload };

        case "delivery":
            return { ...state, delivery: action.payload };

        case "verify":
            return { ...state, verified: action.payload };

        case "pending":
            return { ...state, pending: [...state.pending, action.payload] };

        case "history":
            return { ...state, pending: [...state.history, action.payload] };

        case "settled":
            return { ...state, settled: [...state.settled, action.payload] };

        case "delete":
            delete state[action.payload.id];
            return { ...state };

        default:
            return state;
    }
};

const cart = (state = {}, action) => {
    // ============================
    switch (action.type) {
        case "createCart":
            return { ...state, ...action.payload };

        case "addToCart":
            return { ...state, id: [...state.id, action.payload._id], data: [...state.data, action.payload] };

        case "remove4rmCart":
            return {
                ...state,
                id: state.id.filter((each) => {
                    return each !== action.payload["_id"]
                }),
                data: state.data.filter((each) => {
                    return each["_id"] !== action.payload["_id"]
                })
            };

        case "increaseCQuantity":
            let ideal = JSON.parse(JSON.stringify(state.data))
            ideal[action.payload]["order"]["quantity"] += 1
            return { ...state, data: [...ideal] };

        case "decreaseCQuantity":
            let cdeal = JSON.parse(JSON.stringify(state.data))
            cdeal[action.payload]["order"]["quantity"] -= 1
            return { ...state, data: [...cdeal] };

        case "updateSize":
            return { ...state, data: action.payload }

        case "updateColor":
            return { ...state, data: action.payload }

        case "deleteCart":
            return {
                ...state,
                id: [],
                data: []
            };

        default:
            return state;
    }
};

const wishlist = (state = {}, action) => {
    // ============================
    switch (action.type) {
        case "createWishlist":
            return { ...state, ...action.payload };

        case "addToWishlist":
            return { ...state, id: [...state.id, action.payload._id], data: [...state.data, action.payload] };

        case "remove4rmWishlist":
            return {
                ...state,
                id: state.id.filter((each) => {
                    return each !== action.payload["_id"]
                }),
                data: state.data.filter((each) => {
                    return each["_id"] !== action.payload["_id"]
                })
            };

        case "increaseWQuantity":
            let ideal = [...state.data]
            ideal[action.payload]["order"]["quantity"] += 1
            return { ...state, data: [...ideal] };

        case "decreaseWQuantity":
            let cdeal = [...state.data]
            cdeal[action.payload]["order"]["quantity"] -= 1
            return { ...state, data: [...cdeal] };

        default:
            return state;
    }
};

const status = (state = {}, action) => {
    // ============================
    switch (action.type) {
        case "createStatus":
            return { ...state, ...action.payload };

        case "active":
            return { ...state, active: action.payload };

        case "session":
            return { ...state, session: action.payload };

        default:
            return state;
    }
};

const search = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createSearchData":
            return [...action.payload];

        default:
            return state;
    }
};

const pending = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createPendingOrders":
            return [...action.payload];

        case "addToPending":
            return [...state, ...action.payload]

        case "remove4rmPending":
            return state.filter((item) => {
                return item._id !== action.payload["_id"]
            })

        default:
            return state;
    }
};

const trending = (state = { id: [], data: [] }, action) => {
    // ============================
    switch (action.type) {
        case "createTrending":
            return {
                ...state,
                id: action.payload.map(each => {
                    return each["_id"]
                }),
                data: [...action.payload]
            }

        case "addToTrending":
            return {
                ...state,
                id: [...state.id, ...action.payload["_id"]],
                data: [...state.data, action.payload]
            }

        case "remove4rmTrending":
            return {
                ...state,
                id: state["id"].filter(item => {
                    return item !== action.payload["_id"]
                }),
                data: state["data"].filter((item) => {
                    return item._id !== action.payload["_id"]
                })
            }

        default:
            return state;
    }
};

const newArrivals = (state = { id: [], data: [] }, action) => {
    // ============================
    switch (action.type) {
        case "createNewArrivals":
            return {
                ...state,
                id: action.payload.map(each => {
                    return each["_id"]
                }),
                data: [...action.payload]
            }

        case "addToNewArrivals":
            return {
                ...state,
                id: [...state.id, ...action.payload["_id"]],
                data: [...state.data, action.payload]
            }

        case "remove4rmNewArrivals":
            return {
                ...state,
                id: state["id"].filter(item => {
                    return item !== action.payload["_id"]
                }),
                data: state["data"].filter((item) => {
                    return item._id !== action.payload["_id"]
                })
            }

        default:
            return state;
    }
};

const completed = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createCompletedOrders":
            return [...action.payload];

        default:
            return state;
    }
};

// Combine Reducers
const rootReducer = {
    coats,
    scrubs,
    crocs,
    sneakers,
    penTorch,
    scrubCaps,
    brooches,
    cardHolders,
    shirts,
    home,
    user,
    appData,
    cart,
    wishlist,
    status,
    search,
    pending,
    completed,
    trending,
    newArrivals
};

export default rootReducer;

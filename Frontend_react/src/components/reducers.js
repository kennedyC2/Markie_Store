import { combineReducers } from "redux";

// Reducers
const scrubs = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createScrubs":
            return [...action.payload];

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

const coats = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createCoats":
            return [...action.payload];

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

const crocs = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createCrocs":
            return [...action.payload];

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

const sneakers = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createSneakers":
            return [...action.payload];

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

const penTorch = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createTorch":
            return [...action.payload];

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

const scrubCaps = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createCaps":
            return [...action.payload];

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

const brooches = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createBrooches":
            return [...action.payload];

        case "addBrooches":
            return { ...state, ...action.payload };

        case "update":
            return { ...state, ...(state[action.payload.id] = action.payload.data) };

        case "delete":
            delete state[action.payload.id];
            return { ...state };

        default:
            return state;
    }
};

const cardHolders = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createCardHolders":
            return [...action.payload];

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

const inscription_shirts = (state = [], action) => {
    // ============================
    switch (action.type) {
        case "createShirts":
            return [...action.payload];

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

const categories = () => {
    return [
        "ward coats",
        "scrubs",
        "crocs",
        "sneakers",
        "pen torch",
        "scrub caps",
        "brooches",
        "ID card Holders",
        "Inscription shirts",
    ]
}

// Combine Reducers
const rootReducer = combineReducers({
    coats,
    scrubs,
    crocs,
    sneakers,
    penTorch,
    scrubCaps,
    brooches,
    cardHolders,
    inscription_shirts,
    categories
});

export default rootReducer;

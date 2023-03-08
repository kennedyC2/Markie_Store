const { createFile, getFile, updateFile, delete_P } = require("../lib/mongo");
const { saveImages } = require("../lib/file");
const { ObjectId } = require("mongodb");

// Container
const product = {};

// Create Product
product["create"] = (data, callback) => {
    // Check Method
    switch (data.method) {
        case "options":
            callback(200, {}, "json");
            break;

        case "post":
            // Validate Data
            const title = typeof data.payload.details.title === "string" && data.payload.details.title.trim().length > 0 ? data.payload.details.title.trim() : false;
            const quantity = typeof data.payload.details.quantity === "string" && data.payload.details.quantity.trim().length > 0 ? data.payload.details.quantity.trim() : false;
            const price = typeof data.payload.details.price === "string" && data.payload.details.price.trim().length > 0 ? data.payload.details.price.trim() : false;
            const colors = typeof data.payload.details.colors === "object" ? data.payload.details.colors : false;
            const category = typeof data.payload.details.category === "string" && data.payload.details.category.trim().length > 0 ? data.payload.details.category.trim() : false;
            const description = typeof data.payload.details.description === "string" && data.payload.details.description.trim().length > 0 ? data.payload.details.description.trim() : false;
            const misc = typeof data.payload.details.misc === "object" ? data.payload.details.misc : false;
            const main = typeof data.payload.images.main === "string" && data.payload.images.main.trim().length > 0 ? data.payload.images.main.trim() : false;

            if (title && quantity && price && colors && category && description && misc) {
                // Check Images
                if (main) {
                    // Sav Images
                    saveImages(data.payload.images, (err, file) => {
                        if (!err && data) {
                            // Define Response
                            const response = {
                                _id: ObjectId(Date.now()),
                                title: title,
                                quantity: quantity,
                                price: price,
                                colors: colors,
                                category: category,
                                description: description,
                                misc: misc,
                                images: file,
                            };

                            // Send to database
                            createFile(response, "scrubs", (err, dtb) => {
                                if (!err && dtb) {
                                    // Return
                                    callback(200, response, "json");
                                } else {
                                    console.log(dtb);
                                }
                            });
                        } else {
                            callback(400, { error: file.error }, "json");
                        }
                    });
                } else {
                    callback(400, { error: "Main Image Missing" }, "json");
                }
            } else {
                callback(400, { error: "Missing Required Fields" }, "json");
            }

            break;

        default:
            callback(500, {}, "json");
            break;
    }
};

// Get Product List
product["read"] = (data, callback) => {
    // Check Method
    switch (data.method) {
        case "options":
            callback(200, {}, "json");
            break;

        case "get":
            // Validate Data
            const id = typeof data.query.i === "string" && data.query.i.trim().length > 0 ? data.query.i.trim() : false;
            const collection = typeof data.query.c === "string" && data.query.c.trim().length > 0 ? data.query.c.trim() : false;
            const all = typeof data.query.a === "string" && data.query.a.trim().length > 0 ? Boolean(data.query.c.trim()) : false;

            if (id && collection && all) {
                // Fetch
                getFile(all, ObjectId(id), collection, (err, file) => {
                    if (!err && file) {
                        // Return
                        callback(200, file, "json");
                    } else {
                        console.log(err);
                        callback(500, { error: "Oops, Something Went Wrong, Try Again Later" });
                    }
                });
            } else {
                callback(400, { error: "Missing Required Fields" }, "json");
            }

            break;

        default:
            callback(500, {}, "json");
            break;
    }
};

// Update Product
product["update"] = (data, callback) => {
    // Check Method
    switch (data.method) {
        case "options":
            callback(200, {}, "json");
            break;

        case "update":
            // Validate Data
            const title = typeof data.payload.details.title === "string" && data.payload.details.title.trim().length > 0 ? data.payload.details.title.trim() : false;
            const quantity = typeof data.payload.details.quantity === "string" && data.payload.details.quantity.trim().length > 0 ? data.payload.details.quantity.trim() : false;
            const id = typeof data.payload.id === "string" && data.payload.id.trim().length > 0 ? data.payload.id.trim() : false;
            const price = typeof data.payload.details.price === "string" && data.payload.details.price.trim().length > 0 ? data.payload.details.price.trim() : false;
            const colors = typeof data.payload.details.colors === "object" ? data.payload.details.colors : false;
            const category = typeof data.payload.details.category === "string" && data.payload.details.category.trim().length > 0 ? data.payload.details.category.trim() : false;
            const description = typeof data.payload.details.description === "string" && data.payload.details.description.trim().length > 0 ? data.payload.details.description.trim() : false;
            const misc = typeof data.payload.details.misc === "object" ? data.payload.details.misc : false;
            const main = typeof data.payload.images.main === "string" && data.payload.images.main.trim().length > 0 ? data.payload.images.main.trim() : false;

            if (title && id && quantity && price && colors && category && description && misc) {
                // Check Images
                if (main) {
                    // Sav Images
                    saveImages(data.payload.images, (err, file) => {
                        if (!err && data) {
                            // Define Response
                            const response = {
                                title: title,
                                quantity: quantity,
                                price: price,
                                colors: colors,
                                category: category,
                                description: description,
                                misc: misc,
                                images: file,
                            };

                            // Send to database
                            updateFile(id, response, "scrubs", (err, dtb) => {
                                if (!err && dtb) {
                                    response["id"] = id

                                    // Return
                                    callback(200, response, "json");
                                } else {
                                    console.log(dtb);
                                }
                            });
                        } else {
                            callback(400, { error: file.error }, "json");
                        }
                    });
                } else {
                    callback(400, { error: "Main Image Missing" }, "json");
                }
            } else {
                callback(400, { error: "Missing Required Fields" }, "json");
            }

            break;

        default:
            callback(500, {}, "json");
            break;
    }
};

// Delete product
product["delete"] = (data, callback) => {
    // Check Method
    switch (data.method) {
        case "options":
            callback(200, {}, "json");
            break;

        case "delete":
            // Validate Data
            const id = typeof data.query.i === "string" && data.query.i.trim().length > 0 ? data.query.i.trim() : false;
            const collection = typeof data.query.c === "string" && data.query.c.trim().length > 0 ? data.query.c.trim() : false;

            if (id && collection && all) {
                // Fetch
                delete_P(id, collection, (err, file) => {
                    if (!err && file) {
                        // Return
                        callback(200, file, "json");
                    } else {
                        console.log(err);
                        callback(500, { error: "Oops, Something Went Wrong, Try Again Later" });
                    }
                });
            } else {
                callback(400, { error: "Missing Required Fields" }, "json");
            }

            break;

        default:
            callback(500, {}, "json");
            break;
    }
};

// Export Module
module.exports = product;

const { client, database } = require("../../lib/mongo");
const { updateImages } = require("../../lib/file");

// Update Product
const updateProduct = (data, callback) => {
    // Check Method
    switch (data.method) {
        case "options":
            callback(200, {}, "json");
            break;

        case "put":
            // Validate Data
            const title = typeof data.payload.details.title === "string" && data.payload.details.title.trim().length > 0 ? data.payload.details.title.trim() : false;
            const brand = typeof data.payload.details.brand === "string" && data.payload.details.brand.trim().length > 0 ? data.payload.details.brand.trim() : false;
            const dColor = typeof data.payload.details.dColor === "string" && data.payload.details.dColor.trim().length > 0 ? data.payload.details.dColor.trim() : false;
            const sex = typeof data.payload.details.sex === "string" && data.payload.details.sex.trim().length > 0 ? data.payload.details.sex.trim() : false;
            const sizes = typeof data.payload.details.sizes === "object" ? data.payload.details.sizes : false;
            const quantity = typeof data.payload.details.quantity === "number" && data.payload.details.quantity > 0 ? data.payload.details.quantity : false;
            const id = typeof data.payload.id === "string" && data.payload.id.trim().length > 0 ? data.payload.id.trim() : false;
            const price = typeof data.payload.details.price === "string" && data.payload.details.price.trim().length > 0 ? data.payload.details.price.trim() : false;
            const colors = typeof data.payload.details.colors === "object" ? data.payload.details.colors : false;
            const category = typeof data.payload.details.category === "string" && data.payload.details.category.trim().length > 0 ? data.payload.details.category.trim() : false;
            const misc = typeof data.payload.details.misc === "object" ? data.payload.details.misc : false;
            const main = typeof data.payload.images.main === "string" && data.payload.images.main.trim().length > 0 ? data.payload.images.main.trim() : false;

            console.log(typeof (data.payload.details.quantity))
            console.log(title, brand, dColor, sex, sizes, id, quantity, price, colors, category, misc)
            if (title && brand && dColor && sex && sizes && id && quantity && price && colors && category && misc) {
                // Check Images
                if (main) {
                    // Sav Images
                    updateImages(data.payload.images, data.payload.newImages, async (err, file) => {
                        if (!err && file) {
                            // Define Response
                            const response = {
                                title: title,
                                brand: brand,
                                dColor: dColor,
                                sex: sex,
                                sizes: sizes,
                                quantity: quantity,
                                order: {
                                    title: title,
                                    brand: brand,
                                    category: category,
                                    quantity: 1,
                                    color: "",
                                    size: "",
                                    sex: ""
                                },
                                price: price,
                                colors: colors,
                                category: category,
                                misc: misc,
                                images: file,
                            };

                            // Send to database
                            try {
                                const directory = client.db(database);
                                const sub_directory = directory.collection(category);
                                await sub_directory.replaceOne({ _id: new ObjectId(id) }, response, { upsert: true });

                                // Add id
                                response.id = id

                                // Return
                                callback(200, response, "json");
                            } catch (error) {
                                // Return
                                console.log(error);
                                callback(502, { error: "Oops, Something Went Wrong, Try Again Later" }, "json");
                            } finally {
                                client.close;
                            }
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
            callback(405, {}, "json");
            break;
    }
};

module.exports = updateProduct

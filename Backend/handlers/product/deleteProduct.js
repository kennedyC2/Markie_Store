const { client, database, ObjectId } = require("../../lib/mongo");
const { deleteImages } = require("../../lib/file");

// Delete product
const deleteProduct = (data, callback) => {
    // Check Method
    switch (data.method) {
        case "options":
            callback(200, {}, "json");
            break;

        case "delete":
            // Validate Data
            const id = typeof data.query.t === "string" && data.query.t.trim().length > 0 ? data.query.t.trim() : false;
            const collection = typeof data.query.c === "string" && data.query.c.trim().length > 0 ? data.query.c.trim() : false;
            const images = typeof data.payload === "object" ? data.payload : false;

            if (id && collection && images) {
                // delete images
                deleteImages(images, async (err) => {
                    if (!err) {
                        // Fetch
                        try {
                            const directory = client.db(database);
                            const sub_directory = directory.collection(collection);
                            await sub_directory.deleteOne({ _id: new ObjectId(id) });

                            // Return
                            callback(200, {}, "json");
                        } catch (error) {
                            // Return
                            console.log(error);
                            callback(502, { error: "Oops, Something Went Wrong, Try Again Later" }, "json");
                        } finally {
                            client.close;
                        }
                    } else {
                        callback(502, { error: "Oops, Something Went Wrong, Try Again Later" }, "json");
                    }
                })
            } else {
                callback(400, { error: "Missing Required Fields" }, "json");
            }

            break;

        default:
            callback(405, {}, "json");
            break;
    }
};

// Export Module
module.exports = deleteProduct;
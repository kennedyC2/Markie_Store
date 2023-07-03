const { client, database, ObjectId } = require("../../lib/mongo");

// Get Product List
const getProduct = async (data, callback) => {
    // Check Method
    switch (data.method) {
        case "options":
            callback(200, {}, "json");
            break;

        case "get":
            // Validate Data
            const id = typeof data.query.i === "string" && data.query.i.trim().length > 0 ? data.query.i.trim() : false;
            const collection = typeof data.query.c === "string" && data.query.c.trim().length > 0 ? data.query.c.trim() : false;
            const all = typeof data.query.a === "string" && data.query.a.trim().length > 0 && data.query.a.trim() == "true" ? true : false;

            if (id && collection) {
                // Fetch
                if (all) {
                    try {
                        const directory = client.db(database);
                        const sub_directory = directory.collection("products");
                        const data = await sub_directory.find({ category: collection }).toArray();

                        // Return
                        callback(200, data, "json");
                    } catch (error) {
                        // Return
                        console.log(error);
                        callback(502, { error: "Oops, Something Went Wrong, Try Again Later" }, "json");
                    } finally {
                        client.close;
                    }
                } else {
                    try {
                        const directory = client.db(database);
                        const sub_directory = directory.collection(collection);
                        const data = await sub_directory.findOne({ _id: new ObjectId(id) });

                        // Return
                        callback(200, data, "json");
                    } catch (error) {
                        // Return
                        console.log(error);
                        callback(502, { error: "Oops, Something Went Wrong, Try Again Later" }, "json");
                    } finally {
                        client.close;
                    }
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

module.exports = getProduct
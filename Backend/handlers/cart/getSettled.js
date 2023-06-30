const { client, database } = require("../../lib/mongo");

// Get Product List
const getSettled = async (data, callback) => {
    // Check Method
    switch (data.method) {
        case "options":
            callback(200, {}, "json");
            break;

        case "get":
            // Fetch
            try {
                const directory = client.db(database);
                const sub_directory = directory.collection("settled");
                const data = await sub_directory.find({}).toArray();

                // Return
                callback(200, data, "json");
            } catch (error) {
                // Return
                console.log(error);
                callback(502, { error: "Oops, Something Went Wrong, Try Again Later" }, "json");
            } finally {
                client.close;
            }

            break;

        default:
            callback(405, {}, "json");
            break;
    }
};

module.exports = getSettled
const { hash } = require("../../lib/helper");
const { client, database } = require("../../lib/mongo");

// Get Product List
const getUser = async (data, callback) => {
    // Check Method
    switch (data.method) {
        case "options":
            callback(200, {}, "json");
            break;

        case "post":
            // Validate Data
            const email = typeof data.payload.email === "string" && data.payload.email.trim().length > 0 ? data.payload.email.trim() : false;
            const password = typeof data.payload.password === "string" && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;

            if (email && password) {
                // Fetch
                try {
                    const directory = client.db(database);
                    const sub_directory = directory.collection("users");
                    const data = await sub_directory.findOne({ email: email });

                    if (data !== null || data !== undefined) {
                        // Verify
                        const hashedPassword = hash(password)

                        if (hashedPassword === data.password) {
                            // Delete password
                            delete data.password

                            // Delete code
                            delete data.code

                            // Return
                            callback(200, data, "json");
                        } else {
                            // Return
                            callback(400, { message: "Wrong Password" }, "json");
                        }
                    } else {
                        // Return
                        callback(400, { message: "User with email does not exist" }, "json");
                    }
                } catch (error) {
                    // Return
                    console.log(error);
                    callback(502, { error: "Oops, Something Went Wrong, Try Again Later" }, "json");
                } finally {
                    client.close;
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

module.exports = getUser
const { client, database, ObjectId } = require("../../lib/mongo");
const { today, month, year } = require("./../../lib/helper")

// Create Cart
const closeCart = async (data, callback) => {
    // Check Method
    switch (data.method) {
        case "options":
            callback(200, {}, "json");
            break;

        case "post":
            // Validate Data
            const _data = typeof data.payload === "object" ? data.payload : false;

            if (_data) {
                // Define Response
                const response = {
                    _id: new ObjectId(Date.now()),
                    user: _data.user,
                    email: _data.email,
                    date: today + ", ", year,
                    month: month,
                    cart: _data.cart,
                    total: _data.total,
                    status: "Processed"
                };

                // Send to database
                try {
                    const directory = client.db(database);
                    const sub_directory_1 = directory.collection("settled");
                    await sub_directory_1.insertOne(response);
                    const sub_directory_2 = directory.collection("user");
                    const datm = await sub_directory_2.findOne({ _id: new ObjectId(_data.user) });

                    // Update pending
                    datm.pending = datm.pending.map((item) => {
                        return item !== _data._id
                    })

                    // Check pending
                    if (datm.settled.length >= 10) {
                        // Remove oldest
                        datm.settled.shift()

                        // Update new
                        datm.settled.push(response._id)
                    } else {
                        // Update new
                        datm.settled.push(response._id)
                    }

                    // Replace OLd
                    await sub_directory_2.replaceOne({ _id: new ObjectId(_data.user) }, response, { upsert: true });

                    // Return
                    callback(200, response, "json");
                } catch (error) {
                    // Return
                    console.log(error)
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

module.exports = closeCart
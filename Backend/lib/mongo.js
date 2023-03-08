// Dependencies
const { MongoClient, ObjectId } = require("mongodb");

// Server URL
const s_url = "mongodb+srv://NodeApp:C2FGwthfGr3hEzPM@test.v3cuzhq.mongodb.net/?retryWrites=true&w=majority";

// Database
const database = "makkie";

// Initialize
const client = new MongoClient(s_url);

// Container
const mongo = {};

// mongo options
// =====================================================================================================
mongo["createFile"] = async (data, collection, callback) => {
    // Validate
    const _data = typeof data == "object" ? data : false;

    if (data) {
        try {
            const directory = client.db(database);
            const sub_directory = directory.collection(collection);
            await sub_directory.insertOne(_data);

            // Return
            callback(false, _data);
        } catch (error) {
            // Return
            callback(true, error);
        } finally {
            client.close;
        }
    } else {
        callback(true, { message: "Empty dataset not supported" });
    }
};

// =====================================================================================================
mongo["getFile"] = async (all, id, collection, callback) => {
    if (all) {
        // Validate
        const _collection = typeof collection == "string" ? collection : false;

        if (_collection) {
            try {
                const directory = client.db(database);
                const sub_directory = directory.collection(_collection);
                const data = await sub_directory.find().toArray();

                // Return
                callback(false, data);
            } catch (error) {
                console.log(error);
                // Return
                callback(true, error);
            } finally {
                client.close;
            }
        } else {
            callback(true, { message: "Empty dataset not supported" });
        }
    } else {
        // Validate
        const pid = typeof id == "string" ? id : false;
        const _collection = typeof collection == "string" ? collection : false;

        if (id) {
            try {
                const directory = client.db(database);
                const sub_directory = directory.collection(_collection);
                const data = await sub_directory.findOne({ _id: pid });

                // Return
                callback(false, data);
            } catch (error) {
                console.log(error);
                // Return
                callback(true, error);
            } finally {
                client.close;
            }
        } else {
            callback(true, { message: "Empty dataset not supported" });
        }
    }
};

// =====================================================================================================
mongo["updateFile"] = async (id, data, collection, callback) => {
    // Validate
    const _data = typeof data == "object" ? data : false;
    const _id = typeof id == "string" ? ObjectId(id) : false;

    if (data && _id) {
        try {
            const directory = client.db(database);
            const sub_directory = directory.collection(collection);
            await sub_directory.replaceOne({ _id: _id }, { $set: _data }, { upsert: true });

            // Return
            callback(false, _data);
        } catch (error) {
            // Return
            callback(true, error);
        } finally {
            client.close;
        }
    } else {
        callback(true, { message: "Empty dataset not supported" });
    }
};

// =====================================================================================================
mongo["delete_P"] = async (id, collection, callback) => {
    // Validate
    const _id = typeof id == "string" ? ObjectId(id) : false;

    if (_id) {
        try {
            const directory = client.db(database);
            const sub_directory = directory.collection(collection);
            await sub_directory.deleteOne({ _id: _id });

            // Return
            callback(false, _data);
        } catch (error) {
            // Return
            callback(true, error);
        } finally {
            client.close;
        }
    } else {
        callback(true, { message: "Empty dataset not supported" });
    }
};

// =====================================================================================================

module.exports = mongo;

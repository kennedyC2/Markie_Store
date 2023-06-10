

const multiple = async (sort, s_query, s_num, limit, l_num, collection, callback) => {
    if (sort && !limit) {
        // Validate
        const _collection = typeof collection == "string" ? collection : false;
        const _s_query = typeof s_query == "string" ? s_query : false;

        if (_collection) {
            try {
                const directory = client.db(database);
                const sub_directory = directory.collection(_collection);
                const data = await sub_directory.find({}, { sort: { [_s_query]: s_num } }).toArray();

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

    if (limit && !sort) {
        // Validate
        const _collection = typeof collection == "string" ? collection : false;

        if (_collection) {
            try {
                const directory = client.db(database);
                const sub_directory = directory.collection(_collection);
                const data = await sub_directory.find({}, { limit: l_num }).toArray();

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

    if (sort && limit) {
        // Validate
        const _collection = typeof collection == "string" ? collection : false;
        const _s_query = typeof s_query == "string" ? s_query : false;

        if (_collection) {
            try {
                const directory = client.db(database);
                const sub_directory = directory.collection(_collection);
                const data = await sub_directory.find({}, { sort: { [_s_query]: s_num }, limit: l_num });

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
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

mongo["client"] = client
mongo["database"] = database
mongo["ObjectId"] = ObjectId


module.exports = mongo;

// Import Dependencies
// =======================================================
const url = require("url");
const http = require("http");
const stringDecoder = require("string_decoder").StringDecoder;
const configuration = require("./config");
const ping = require("../handlers/ping");
const notFound = require("../handlers/notFound");
const product = require("../handlers/product");
const { parseJSONObject } = require("./helper");
const { getImages } = require("./file");

// Container
// =======================================================
const server = {};

// http Server
// =======================================================
server["HTTPserver"] = http.createServer((req, res) => {
    server.unifiedServer(req, res);
});

// Server
// =======================================================
server["unifiedServer"] = (req, res) => {
    // Get URL
    const parsedUrl = url.parse(req.url, true);

    // Get Url Path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, "");
    console.log(trimmedPath);

    // Get Header
    const headers = req.headers;

    // Get Method
    const method = req.method.toLowerCase();

    // Get Query Strings
    const queryStringObject = parsedUrl.query;

    // Get Payload
    const decoder = new stringDecoder("utf8");
    let buffer = "";
    req.on("data", (data) => {
        buffer += decoder.write(data);
    });

    req.on("end", () => {
        // End Buffer
        buffer += decoder.end();

        // Check Request Handler
        let chosenHandler = server.router[trimmedPath] !== undefined ? server.router[trimmedPath] : notFound;

        // if request is image, route to image handler
        chosenHandler = trimmedPath.indexOf("image/") > -1 ? getImages : chosenHandler;

        // Define Data
        const data = {
            path: trimmedPath,
            header: headers,
            method: method,
            query: queryStringObject,
            payload: parseJSONObject(buffer),
        };

        // Route Request to Chosen Handler
        chosenHandler(data, (Code, Message, Type) => {
            // Handle Error
            try {
                server.handler(res, Code, Message, Type);
            } catch (error) {
                console.warn();
                server.handler(
                    res,
                    500,
                    {
                        error: "Something Went Wrong, Please Try Again Later",
                    },
                    "json"
                );
            }
        });
    });
};

// Server Handler
// =======================================================
server["handler"] = (res, Code, Message, Type) => {
    // Define Status Code to be sent
    const statusCode = typeof Code === "number" ? Code : 200;

    // Specify Content-Type
    const ContentType = typeof Type === "string" ? Type : "json";

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    // res.setHeader("Access-Control-Allow-Origin", "https://medsoph.com");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (ContentType === "json") {
        // Define Message to be sent
        const message = typeof Message === "object" ? JSON.stringify(Message) : {};

        // Return Response
        res.setHeader("Content-Type", "application/json");
        res.writeHead(statusCode);
        res.end(message);
    }

    if (ContentType === "jpg") {
        // Define Message to be sent
        const message = typeof Message !== "undefined" ? Message : {};

        // Return Response
        res.setHeader("Content-Type", "image/jpeg");
        res.writeHead(statusCode);
        res.end(message);
    }

    if (ContentType === "png") {
        // Define Message to be sent
        const message = typeof Message !== "undefined" ? Message : {};

        // Return Response
        res.setHeader("Content-Type", "image/png");
        res.writeHead(statusCode);
        res.end(message);
    }
};

// Define Routers
// =======================================================
server["router"] = {
    ping: ping,
    "products/add": product.create,
    "products/get": product.read,
    "products/update": product.update,
    "products/delete": product.delete
};

// Server Init
// =======================================================
server["SERVER_init"] = () => {
    // Listen
    server.HTTPserver.listen(configuration.HTTP_port, () => {
        console.log("HTTP Server is Listening On Port " + configuration.HTTP_port + " in " + configuration.mode + " mode");
    });
};

// Export Module
module.exports = server;

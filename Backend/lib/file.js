// import Dependencies
// =================================================================================
const { open, readFile, writeFile, close } = await import("fs");
const path = require("path");

// Container
const misc = {};

// Base Directory
misc["image_base_directory"] = path.join(__dirname, "./../.data/images/");

// Fetch Images
misc["getImages"] = (data, callback) => {
    // Check Method
    switch (data.method) {
        case "options":
            callback(200, {}, "json");
            break;

        case "get":
            // Get file name
            const filename = data.path.replace("image", "").trim();

            if (filename && filename.length > 0) {
                //  Read File
                readFile(misc.image_base_directory + filename, (err, image) => {
                    if (!err && image) {
                        // JPG
                        if (filename.indexOf(".jpg") > -1) {
                            // Return
                            callback(200, image, "jpg");
                        }

                        // PNG
                        if (filename.indexOf(".png") > -1) {
                            // Return
                            callback(200, image, "png");
                        }
                    } else {
                        callback(404, {}, "json");
                    }
                });
            } else {
                callback(400, {}, "json");
            }
            break;

        default:
            callback(405, {}, "json");
            break;
    }
};

// Save Images
misc["saveImages"] = (data, callback) => {
    // Check Method
    switch (data.method) {
        case "options":
            callback(200, {}, "json");
            break;

        case "post":
            // Validate data
            const email = typeof data.payload.email === "string" && data.payload.email.trim().length > 0 ? data.payload.email.trim().toLowerCase() : false;
            const base64 = typeof data.payload.base64 === "string" && data.payload.base64.trim().length > 0 ? data.payload.base64.trim() : false;

            if (email && base64) {
                const filename = Date.now() + ".jpg";

                // Open File
                open(misc.image_base_directory + filename, "wx", (err, fd) => {
                    // Check for error
                    if (!err && fd) {
                        // Get Payload
                        const base64_file = base64.toString("base64");

                        // Define Filename
                        const _file = base64_file.split(",")[1];

                        // Write data
                        writeFile(fd, _file, "base64", (err) => {
                            if (!err) {
                                // Close File
                                close(fd, (err) => {
                                    if (!err) {
                                        // Return
                                        callback(200, {}, "json");
                                    } else {
                                        callback(500, { error: "Something Happened, Please Try Again Later" }, "json");
                                    }
                                });
                            } else {
                                callback(500, { error: "Something Happened, Please Try Again Later" }, "json");
                            }
                        });
                    } else {
                        callback(500, { error: "Something Happened, Please Try Again Later" }, "json");
                    }
                });
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
module.exports = misc;

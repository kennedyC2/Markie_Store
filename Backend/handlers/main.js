// Dependencies
const ping = require("./ping")
const notFound = require("./notFound")
const appData = require("./appData")
const home = require("./home")
const createProduct = require("./product/createProduct")
const getProduct = require("./product/getProduct")
const updateProduct = require("./product/updateProduct")
const delivery = require("./product/delivery")
const deleteProduct = require("./product/deleteProduct")
const createUser = require("./account/createUser")
const { user, code } = require("./account/verifyUser")
const getUser = require("./account/getUser")
const updateUser = require("./account/updateUser")
const password = require("./account/password")
const deleteUser = require("./account/deleteUser")
const createCart = require("./cart/unsettled")
const getUnsettled = require("./cart/getUnsettled")
const getSettled = require("./cart/getSettled")
const closeCart = require("./cart/settled")


// Container
const main = {}

// Ping
main["ping"] = ping

// 404
main["notFound"] = notFound

// appData
main["appData"] = appData

// Home
main["homepage"] = home

// Products
main["createProduct"] = createProduct
main["getProduct"] = getProduct
main["updateProduct"] = updateProduct
main["deleteProduct"] = deleteProduct
main["delivery"] = delivery

// User
main["createUser"] = createUser
main["verifyUser"] = user
main["resendCode"] = code
main["getUser"] = getUser
main["updateUser"] = updateUser
main["password"] = password
main["deleteUser"] = deleteUser

// Cart
main["createCart"] = createCart
main["getUnsettled"] = getUnsettled
main["getSettled"] = getSettled
main["closeCart"] = closeCart

// Export
module.exports = main
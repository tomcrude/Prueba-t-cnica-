const express = require("express")
const pool = require("../dataBase/conection.js")
const handle = require("./handleEvents.js")

const Router = express.Router()

// Create User
Router.post("/create" , handle.create)

// Sign IN

Router.post("/signIn" , handle.signIn)

// GET customer info

Router.get("/getCustomerInfo/:token", handle.getCustomerInfo)

// GET single customer info

Router.get("/getCustomerInfo/:id/:token", handle.getSingleCustomerInfo)

// Create customer Info

Router.post("/createCustomerInfo" , handle.createCustomerInfo)

// Change customer info

Router.put("/changeCustomerInfo" , handle.changeCustomerInfo)

// DELETE customer info

Router.delete("/deleteCustomerInfo/:id/:token" , handle.deleteCustomerInfo)


module.exports = Router


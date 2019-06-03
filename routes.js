"use strict";

const express = require("express");
const router = express.Router();
const cartItems = require("./cart-items");

router.get("/cart-items",(req, res)=>{
    res.json(cartItems);
});

router.post("/cart-items",(req, res) => {
    console.log(req.body);
    cartItems.push(req.body);
    res.json(cartItems);
});

router.delete("/car-titems/:id", (req, res) => {
   console.log(req.params.name);
   cartItems.splice(cartList.findIndex(element => element.id === req.params.id), 1);
   res.json(cartItems);
});

router.put("/cart-items/:id", (req, res) => {
    cartList.splice(cartList.findIndex(element => element.id === req.params.id), 1, req.body);
    res.json(cartItems);
});


module.exports = router;
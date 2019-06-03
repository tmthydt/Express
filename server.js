"use strict";

const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.static(__dirname+"/public"));
app.use(express.json());
// connect and use api route
app.use("/",routes);

const port = 3000;

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
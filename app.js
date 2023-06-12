const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/myfacebook").then(() => console.log("Database Is Conected Now")), { useNewUrlParser: true, useUrifiedTopology: true };

app.set("view engine", "ejs");

const methodOverride = require("method-override");
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

app.use(express.static("public"));
app.use(express.static("node_modules"));

app.use(express.urlencoded({ extended: true }));

const router = require("./routes/appRoutes");
app.use("/", router);

app.listen(3000, () => console.log(`Server Is Started Now`));

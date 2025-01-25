const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index.js");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./lib/lib.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1", mainRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
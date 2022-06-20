const express = require("express");
const connectToMongo = require("./db")
const productRoute = require("../server/route/productRoute")
const PORT = process.env.port || 5000;
const app = express();

connectToMongo();

app.use(express.json());
app.use("/api/product",productRoute)  //http://localhost:5000/api/product

app.listen(PORT, () =>{
    console.log("Server is running at port " + PORT);
})
// require express for making server 
const express = require("express");
const app = express();

// requiring mongodb for data base 
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

// creating data base 
const MONGO_URL = "mongodb://127.0.0.1:27017/test";
async function main () {
    await mongoose.connect(MONGO_URL);
}

// CALLING MAIN FUNCTION 
main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
})

app.get("/", (req,res) => {
    res.send("Hi, i am root");
});

app.get("/testinglisting", (req,res) => {
    let smapleListing = new Listing  ({
        title: "My New villa",
        description: "By the beach",
        price: 1200,
        location: "calangute, Goa",
        Country: "India",
    });
})

// making server 
app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});
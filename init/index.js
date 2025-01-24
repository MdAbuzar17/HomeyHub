const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

Mongo_Url = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=> {
        console.log("Connected to DB");
    })
    .catch(err => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(Mongo_Url);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "677ed9a733d3173b58c6642e"
    }))
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();
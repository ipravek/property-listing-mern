const mongoose = require("mongoose");
const { MONGO_DB_URL, DB_NAME = "propertyListingApp" } = process.env;

exports.connect = async () => {
  try {
    const conn = await mongoose.connect(MONGO_DB_URL, { dbName: DB_NAME });
    if (conn) {
      console.log("Successfully connected to the mongo database");
    }
  } catch (err) {
    console.log(err);
  }
};

const mongoose = require("mongoose");
const connectDB = async (uri) => await mongoose.connect(uri);
const disconnectDB = async () => await mongoose.connection.close();
module.exports = { connectDB, disconnectDB };
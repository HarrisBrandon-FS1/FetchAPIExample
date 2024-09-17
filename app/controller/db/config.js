const mongoose = require("mongoose");

const connectDB = async () => {
try {
    const conn = mongoose.connect(process.env.MONGODB_URI, {
        //useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB successfully ${(await conn).Connection.host}`);
} catch (error) {
    console.log(error);
}
};

module.exports = connectDB;
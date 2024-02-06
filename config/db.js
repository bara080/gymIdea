//  database configuration

const  mongoose  = require ("mongoose");

//  connect to mongo database
const connectDB = async () =>
{
    //  make a promise
    const conn = await mongoose.connect (process.env.MONGO_URI);
    //  test the connection
    console.log(`Mongo db is Connected : ${conn.connection.host}`);
};

//  set the strictQueries to true
mongoose.set ("strictQuery", true);

//  export to the server js
module.exports  = connectDB;
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import DB_Connect from "./config/db.config.js";
import route from "./routes/user.routes.js";

const PORT = process.env.PORT || 8081;


// MIDDLEWARE
const app = express();
app.use(express.json());


// DATABASE CONNETIONS
DB_Connect(); 


// SERVER RESPONSE
app.get('/', (req, res) => {
  res.status(200).json({
    message: "Server Run Successfull",
  });
});


app.use('/', route);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
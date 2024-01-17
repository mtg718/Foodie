const express = require("express");
const app = express();

//load config from .env file
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8000;

//cors setup

app.use((req,res,next)=>{
res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-Width, Content-Type, Accept"
  );
  next();
})

//middleware to parse json request body (like body-parser)
app.use(express.json());
app.use('/api',require('./routes/CreateUser.js'))
app.use('/api',require('./routes/DisplayData.js'))
app.use('/api',require('./routes/OrderData.js'))

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//connect to databse
const connectdb = require("./database.js");
connectdb();

//default route

app.get("/", (req, res) => {
  res.send(`<h1> Hi bro what's Up </h1>`);
});


const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const router = require("./routes");

const app = express();
app.set("PORT", process.env.PORT || 3000);

const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "library",
};

// middleware
app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json())
app.use('/api/books', router)


app.listen(3000);
console.log("server on port", app.get("PORT"));

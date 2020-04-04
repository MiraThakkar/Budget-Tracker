const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const path = require("path");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});






// const express = require("express");
// const mongojs = require("mongojs");
// const mongoose = require("mongoose");
// const logger = require("morgan");
// const path = require("path");

// const app = express();

// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// const databaseUrl = process.env.MONGODB_URI || "budget";
// const collections = ["transactions"];

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

// app.use(require("./routes/api.js"));

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Application running on PORT ${PORT}`);
// });

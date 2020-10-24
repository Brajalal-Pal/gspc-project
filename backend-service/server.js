const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const gspcRoutes = require("./routes/gspc-route");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
   res.header("Access-Control-Allow-Methods", "*");
   res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
});
console.clear();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(gspcRoutes);
app.get("/", (req, res, next) => {
   res.send("Server is running...");
});

app.listen(PORT, () => {
   console.log(`Server is running on PORT ${PORT}`);
});

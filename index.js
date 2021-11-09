const express = require("express");
const app = express();

const servicesData = require("./services.json");

let port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  next();
});

app.get("/", (req, res) => {
  res.send("Working");
});

app.get("/api/services", (req, res) => {
  res.send(servicesData);
});

app.listen(port, () => {
  console.log(`App running on port http:localhost:${port}`);
});

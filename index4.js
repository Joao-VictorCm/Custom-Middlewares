import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;
var bandName = "";

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.setHeader('Content-Type', 'text/html'); 
  res.removeHeader('Content-Disposition'); 
  res.sendFile(path.join(__dirname, "public", "test.html"));
});


app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

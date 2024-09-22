import express from "express";

const app = express();
const port = 3000;


function logger(req, res, next) {
  console.log("Request method:", req.method)
  console.log("Request url:", req.url)
  next()
}

function data(req, res, next){
  const d = new Date()
  console.log(d)
  next()
}

app.use(logger);

app.use(data)

app.get("/", (req, res) => {
  res.send("Hello" + data.d);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

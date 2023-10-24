import express from "express";
import bodyParser from "body-parser";
import { name } from "ejs";

const app = express();
const port = 3000;


app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  
    res.render("index.ejs");
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


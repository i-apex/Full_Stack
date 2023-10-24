import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req, res) => {
  //res.sendfile requires a full path in order to send bacck the file
  //when our server is hosted on a cloud comp. and not on local com.,
  //we need the full address of the path

  //console.log (__dirname+"/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
  console.log(req.body );
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


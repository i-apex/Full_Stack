import express from "express";
const app = express();
//const app of type express 
const port = 3000; 
//specifying port

app.listen(port, () => {
  //listening to the event
  console.log(`Server running on port ${port}.`);
  //callback
});

//to start the server we need node app.js
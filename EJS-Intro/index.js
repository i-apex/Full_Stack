import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import bodyParser from "body-parser";
// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// var write;
// app.use(bodyParser.urlencoded({extended:true}));

// function command(req,res,next){
//     if(getDay()==7){
//         write="it's weekend!";
//     }
//     else{
//         write="it's weekday";
//     }
// }
// app.use(command);




app.get("/", (req, res) => {
//   res.send(`<h1>${write}</h1>`);
    const today = new Date();
    const day = today.getDay();


    if(day==0 || day==6){
        res.render("index.ejs",{dayType: "weekend" ,
        advice: "it's time to sleep",
        });
        console.log(day);
    }

    else{
        res.render("index.ejs",{dayType: "weekday" ,
        advice: "it's time to work hard",
        });
        console.log(day);
    }
    
    
});

app.listen(port,()=>{
    console.log("running");
})


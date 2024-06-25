import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "1234",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

// GET home page
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
});




// const db1 = new pg.Client({
//   user: "postgres",
//   host: "localhost",
//   database : "flags",
//   password : "1234",
//   port : 5432,
// });

// db1.connect();

// let countryCodes = {};

// db1.query("SELECT name,flag FROM countries", (err, res) => {
//   res.rows.forEach((country) => {
//     countryCodes[country.name] = country.flag;
//   });
//   console.log(err, res.rows);
//   db1.end();
// });

// const db2 = new pg.Client({
//   user: "postgres",
//   host: "localhost",
//   database: "world",
//   password: "1234",
//   port: 5432,
// });

// db2.connect();




// app.post("/add",(req,res)=>{
//   const country = req.body.country;
//   console.log(countries);
//   res.render("index.ejs", 
//     { countries: countries, total: countries.length });
// });

//INSERT new country
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%' ",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      const countries = await checkVisisted();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
      });
    } catch (err) {
      console.log(err);
      const countries = await checkVisisted();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again.",
      });
    }
  } catch (err) {
    console.log(err);
    const countries = await checkVisisted();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

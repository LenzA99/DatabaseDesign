const express = require("express");
const mysql = require("mysql");
const ejs = require("ejs");

// Create express app
const app = new express();

// Create a database connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "GEMMAMINI97",
  database: "destinygearinfo", // comment out if running example 1
});

// Establish connection with the DB
db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Successful connected to the DB....`);
  }
});

// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/readsearch", (req, res) => {
var empt = 'index.ejs'.form1.text.value;
var GT = document.getElementById("GunType");
var GunType = GT.text;
var DT = document.getElementById("DMGType");
var DMGTYPE = DT.text;
var AC = document.getElementById("ArmorClass");
var ArmorClass = AC.text;
var AT = document.getElementById("ArmorType");
var ArmorType = AT.text;
var RI = document.getElementById("RarityID");
var RarityID = RI.text;

if (empt !== "" && checkemp == ture){

} else if (empt == ""){
  switch (checkbox.id){
    case 'Armor':
      /*if(ArmorClass == 'Hunter'){

      }
      else if(ArmorClass == 'Warlock'){

      }
      else if(ArmorClass == 'Titan'){

      }
      else{

      }
      if(ArmorType == 'Helmet'){

      }
      else if(ArmorType == 'Chest'){

      }
      else if(ArmorType == 'Legs'){

      }
      else if(ArmorType == 'Gauntlets'){

      }
      else if(ArmorType == 'ClassItem'){

      }
      else{

      }
      if(RarityID == 'Legendary'){

      }
      else if(RarityID == 'Exotic'){

      }
      else{

      }*/
      break;
    case 'Weapon':
      /*if(GunType == 'Auto Rifle'){

      }
      else if(GunType == 'Hand Canon'){

      }
      else if(GunType == 'Scout Rifle'){

      }
      else if(GunType == 'Pulse Rifle'){

      }
      else if(GunType == 'Sniper Rifle'){

      }
      else if(GunType == 'Fusion Rifle'){

      }
      else if(GunType == 'Linear Fusion Rifle'){

      }
      else if(GunType == 'Submachine Gun'){

      }
      else if(GunType == 'Machine Gun'){

      }
      else if(GunType == 'Trace Rifle'){

      }
      else if(GunType == 'Grenade Launcher'){

      }
      else if(GunType == 'Heavy Grenade Launcher'){

      }
      else if(GunType == 'Rocket Launcher'){

      }
      else if(GunType == 'Shotgun'){

      }
      else if(GunType == 'Sidearm'){

      }
      else if(GunType == 'Bow'){

      }
      else if(GunType == 'Sword'){

      }
      else{

      }
      if(DMGTYPE == 'Kinetic'){

      }
      else if(DMGTYPE == 'Void'){

      }
      else if(DMGTYPE == 'Arc'){

      }
      else if(DMGTYPE == 'Solar'){

      }
      else if(DMGTYPE == 'Stasis'){

      }
      else{

      }
      if(RarityID == 'Legendary'){

      }
      else if(RarityID == 'Exotic'){

      }
      else{

      }*/

      break;
    case 'Ghost':
      /*if (RarityID == 'Legendary'){

      } else if(RarityID == 'Exotic'){

      }*/
      break;
    default:
      var checkemp = true;
      break;
  }
} else{}
});
        


app.get("/readsearch", (req, res) => {
  let sql = `SELECT * FROM weapon, armor, ghost`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.render("readData", { data: result });
  });
});

// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

const express = require("express");
const mysql = require("mysql");
const ejs = require("ejs");

/*var armor;
var ghost;
var weapon;
var Rarity_ID;
var Armor_Name;
var */

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

var empt = document.form1.text.value;
if (empt !== ""){

} else if (empt == ""){
  switch (checkbox.id){
    case 'Armor':
      if('ArmorClass' == 'Any'){

      }
      if('ArmorClass' == 'Hunter'){

      }
      if('ArmorClass' == 'Warlock'){

      }
      if('ArmorClass' == 'Titan'){

      }
      else{

      }
      if('ArmorType' == 'Any'){

      }
      if('ArmorType' == 'Helmet'){

      }
      if('ArmorType' == 'Chest'){

      }
      if('ArmorType' == 'Legs'){

      }
      if('ArmorType' == 'Gauntlets'){

      }
      if('ArmorType' == 'ClassItem'){

      }
      else{

      }
      if('ArmorRarity' == 'Any'){

      }
      if('ArmorRarity' == 'Legendary'){

      }
      if('ArmorRarity' == 'Exotic'){

      }
      else{

      }
      break;
    case 'Weapon':
      if('GunType' = 'Any'){

      }
      if('GunType' = 'Auto Rifle'){

      }
      if('GunType' = 'Hand Canon'){

      }
      if('GunType' = 'Scout Rifle'){

      }
      if('GunType' = 'Pulse Rifle'){

      }
      if('GunType' = 'Sniper Rifle'){

      }
      if('GunType' = 'Fusion Rifle'){

      }
      if('GunType' = 'Linear Fusion Rifle'){

      }
      if('GunType' = 'Submachine Gun'){

      }
      if('GunType' = 'Machine Gun'){

      }
      if('GunType' = 'Trace Rifle'){

      }
      if('GunType' = 'Grenade Launcher'){

      }
      if('GunType' = 'Heavy Grenade Launcher'){

      }
      if('GunType' = 'Rocket Launcher'){

      }
      if('GunType' = 'Shotgun'){

      }
      if('GunType' = 'Sidearm'){

      }
      if('GunType' = 'Bow'){

      }
      if('GunType' = 'Sword'){

      }
      else{

      }
      if('DMGType' = 'Any'){

      }
      if('DMGType' = 'Kinetic'){

      }
      if('DMGType' = 'Void'){

      }
      if('DMGType' = 'Arc'){

      }
      if('DMGType' = 'Solar'){

      }
      if('DMGType' = 'Stasis'){

      }
      else{

      }
      if('WeaponRarity' == 'Any'){

      }
      if('WeaponRarity' == 'Legendary'){

      }
      if('WeaponRarity' == 'Exotic'){

      }
      else{

      }

      break;
    case 'Ghost':
      break;
    default:
      var checkemp = true;
      break;
  }
} else (empt === "" && checkemp === true )
        


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

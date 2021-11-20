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
/*var empt = document.form1.text.value; */
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
var sql;

if (empt !== "" && checkemp == ture){

} else if (empt == ""){
  switch (checkbox.id){
    case 'Armor':
      if (RI.text == 'Any' && AT.text != 'Any' && AC.text != 'Any'){
        sql = 'SELECT * FROM armor WHERE Armor_Type =  ?, Class_ID = ?' [ArmorType, ArmorClass]
      }else if(RI.text != 'Any' && AT.text == 'Any' && AC.text != 'Any'){
        sql = 'SELECT * FROM armor WHERE Class_ID = ? , Rarity_ID = ?' [ArmorCLass, RarityID]
      }else if (RI.text != 'Any' && AT.text != 'Any' && AC.text == 'Any'){
        sql = 'SELECT * FROM armor WHERE Armor_Type =  ?, Rarity_ID = ?' [ArmorType, RarityID]
      }else if (RI.text == 'Any' && AT.text == 'Any' && AC.text != 'Any'){
        sql = 'SELECT * FROM armor WHERE Class_ID = ?' [ArmorCLass]
      }else if (RI.text != 'Any' && AT.text == 'Any' && AC.text == 'Any'){
        sql = 'SELECT * FROM armor WHERE Rarity_ID = ?' [RarityID]
      }else if (RI.text == 'Any' && AT.text != 'Any' && AC.text == 'Any'){
        sql = 'SELECT * FROM armor WHERE Armor_Type =  ?' [ArmorType]
      }else if(RI.text == 'Any' && AT.text == 'Any' && AC.text == 'Any'){
        sql = 'SELECT * FROM armor'
      }else{
        sql = 'SELECT * FROM armor WHERE Armor_Type =  ?, Class_ID = ? , Rarity_ID = ?' [ArmorType, ArmorCLass, RarityID]
      }
      break;
    case 'Weapon':
       sql = 'SELECT * FROM weapon WHERE Weapon_Type ==  ?, Weapon_Dmg_Type == ? , Rarity_ID == ?' [GunType, ArmorCLass, RarityID]

      break;
    case 'Ghost':
       sql = 'SELECT * FROM ghost WHERE Armor_Type ==  ?, Class_ID == ? , Rarity_ID == ?' [ArmorType, ArmorCLass, RarityID]

      break;
    default:
       checkemp = true;
      break;
  }
} else{}
db.query(sql, (err, result) => {
  if (err) {
    throw err;
  }
  res.render("readData", { data: result });
});
});
        


/*app.get("/readsearch", (req, res) => {
  let sql = `SELECT * FROM weapon, armor, ghost`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.render("readData", { data: result });
  });
});*/

// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

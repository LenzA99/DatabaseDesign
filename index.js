const express = require("express");
const mysql = require("mysql");
const ejs = require("ejs");

// Create express app
const app = express();

// Create a database connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2206Snow!!!!",
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
var empt = document.form1.text.value; 
var GT = req.body.GunType;
var GunType = GT.text;
var DT = req.body.DMGType;
var DMGType = DT.text;
var AC = req.body.ArmorClass
var ArmorClass = AC.text;
var AT = req.body.ArmorType;
var ArmorType = AT.text;
var RI = req.body.RarityID;
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
        sql = 'SELECT * FROM armor WHERE Class_ID = ?' [ArmorClass]
      }else if (RI.text != 'Any' && AT.text == 'Any' && AC.text == 'Any'){
        sql = 'SELECT * FROM armor WHERE Rarity_ID = ?' [RarityID]
      }else if (RI.text == 'Any' && AT.text != 'Any' && AC.text == 'Any'){
        sql = 'SELECT * FROM armor WHERE Armor_Type =  ?' [ArmorType]
      }else if(RI.text == 'Any' && AT.text == 'Any' && AC.text == 'Any'){
        sql = 'SELECT * FROM armor'
      }else{
        sql = 'SELECT * FROM armor WHERE Armor_Type =  ?, Class_ID = ? , Rarity_ID = ?' [ArmorType, ArmorClass, RarityID]
      }
      break;
    case 'Weapon':
      if (RI.text == 'Any' && DT.text != 'Any' && GT.text != 'Any'){
        sql = 'SELECT * FROM weapon WHERE Weapon_Type ==  ?, Weapon_Dmg_Type == ?' [GunType, DMGType]
      }else if(RI.text != 'Any' && DT.text == 'Any' && GT.text != 'Any'){
        sql = 'SELECT * FROM weapon WHERE Weapon_Type ==  ?, Rarity_ID == ?' [GunType, RarityID]
      }else if (RI.text != 'Any' && DT.text != 'Any' && GT.text == 'Any'){
        sql = 'SELECT * FROM weapon WHERE Weapon_Dmg_Type == ? , Rarity_ID == ?' [DMGType, RarityID]
      }else if (RI.text == 'Any' && DT.text == 'Any' && GT.text != 'Any'){
        sql = 'SELECT * FROM weapon WHERE Weapon_Type ==  ?' [GunType]
      }else if (RI.text != 'Any' && DT.text == 'Any' && GT.text == 'Any'){
        sql = 'SELECT * FROM weapon WHERE Rarity_ID == ?' [RarityID]
      }else if (RI.text == 'Any' && DT.text != 'Any' && GT.text == 'Any'){
        sql = 'SELECT * FROM weapon WHERE Weapon_Dmg_Type == ?' [DMGType]
      }else if(RI.text == 'Any' && DT.text == 'Any' && GT.text == 'Any'){
        sql = 'SELECT * FROM weapon'
      }else{
        sql = 'SELECT * FROM weapon WHERE Weapon_Type ==  ?, Weapon_Dmg_Type == ? , Rarity_ID == ?' [GunType, DMGType, RarityID]

      }
      break;
    case 'Ghost':
      if (RI.text == 'Any'){
        sql = 'SELECT * FROM ghost'
      }
      else{
      sql = 'SELECT * FROM ghost WHERE Rarity_ID == ?' [RarityID]
      }
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

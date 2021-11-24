const express = require("express");
const mysql = require("mysql");
const ejs = require("ejs");

// Create express app
const app = express();
var bodyParser = require('body-parser')

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
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

// routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/readsearch", (req, res) => {
 
//var empt = document.form1.text.value;
empt =  req.body[search];  
// document.getElementById("GunType");
 GT = req.body[GunType];
//var GunType = GT.text;
 DT = req.body[DMGType];
//var DMGType = DT.text;
 AC = req.body[ArmorClass];
//var ArmorClass = AC.text;
 AT = req.body[ArmorType];
//var ArmorType = AT.text;
 RI = req.body[RarityID];
//var RarityID = RI.text;
 var sql;
 CB = req.body[chk]; 

//if (empt !== "" && checkemp == ture){

//} else 
if (empt == ""){
  switch (CB){
    case 'Armor':
      if (RI == 'Any' && AT != 'Any' && AC != 'Any'){
        sql = 'SELECT * FROM armor WHERE Armor_Type =  ?, Class_ID = ?' [AT, AC]//[ArmorType, ArmorClass]
      }else if(RI != 'Any' && AT == 'Any' && ACt != 'Any'){
        sql = 'SELECT * FROM armor WHERE Class_ID = ? , Rarity_ID = ?' [AC, RI]//[ArmorCLass, RarityID]
      }else if (RI != 'Any' && AT != 'Any' && AC == 'Any'){
        sql = 'SELECT * FROM armor WHERE Armor_Type =  ?, Rarity_ID = ?' [AT, RI]//[ArmorType, RarityID]
      }else if (RI == 'Any' && AT == 'Any' && AC != 'Any'){
        sql = 'SELECT * FROM armor WHERE Class_ID = ?' [AC]
      }else if (RI != 'Any' && AT == 'Any' && AC == 'Any'){
        sql = 'SELECT * FROM armor WHERE Rarity_ID = ?' [RI]
      }else if (RI == 'Any' && AT != 'Any' && AC == 'Any'){
        sql = 'SELECT * FROM armor WHERE Armor_Type =  ?' [AT]
      }else if(RI == 'Any' && AT == 'Any' && AC == 'Any'){
        sql = 'SELECT * FROM armor'
      }else{
        sql = 'SELECT * FROM armor WHERE Armor_Type =  ?, Class_ID = ? , Rarity_ID = ?' [AT, AC, RI]
      }
      break;
    case 'Weapon':
      if (RI == 'Any' && DT != 'Any' && GT != 'Any'){
        sql = 'SELECT * FROM weapon WHERE Weapon_Type ==  ?, Weapon_Dmg_Type == ?' [GT, DT]
      }else if(RI != 'Any' && DT == 'Any' && GT != 'Any'){
        sql = 'SELECT * FROM weapon WHERE Weapon_Type ==  ?, Rarity_ID == ?' [GT, RI]
      }else if (RI != 'Any' && DT != 'Any' && GT == 'Any'){
        sql = 'SELECT * FROM weapon WHERE Weapon_Dmg_Type == ? , Rarity_ID == ?' [DT, RI]
      }else if (RI == 'Any' && DT == 'Any' && GT != 'Any'){
        sql = 'SELECT * FROM weapon WHERE Weapon_Type ==  ?' [GT]
      }else if (RI != 'Any' && DT == 'Any' && GT == 'Any'){
        sql = 'SELECT * FROM weapon WHERE Rarity_ID == ?' [RI]
      }else if (RI == 'Any' && DT != 'Any' && GT == 'Any'){
        sql = 'SELECT * FROM weapon WHERE Weapon_Dmg_Type == ?' [DT]
      }else if(RI == 'Any' && DT == 'Any' && GT == 'Any'){
        sql = 'SELECT * FROM weapon'
      }else{
        sql = 'SELECT * FROM weapon WHERE Weapon_Type ==  ?, Weapon_Dmg_Type == ? , Rarity_ID == ?' [GT, DT, RI]

      }
      break;
    case 'Ghost':
      if (RI == 'Any'){
        sql = 'SELECT * FROM ghost'
      }
      else{
      sql = 'SELECT * FROM ghost WHERE Rarity_ID == ?' [RI]
      }
      break;
    default:
       checkemp = true;
      break;
  }
} else{
  sql = 'Select * FROM ghost, armor, weapon WHERE Name = ?'[CB]
}
db.query(sql, (err, result) => {
  if (err) {
    throw err;
  }
  res.render("readData", {data: result });
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

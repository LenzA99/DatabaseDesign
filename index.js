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
res.render("index.ejs");
});

 

app.post("/readsearch", (req, res) => {
  let data ={ name: req.body.xsearch};
  let sql = 'SELECT * FROM weapon WHERE Weapon_Name = ?';
  let query = db.query(sql, data, (err, result) => {
    console.log(CB)
    if (err) {
      throw err;
    }
    res.render("readData", {data: result });
  });
});

app.post("/readcheckbox", (req, res) => {
//var empt = req.body.xsearch;  
const GT = req.body.GunType;
const DT = req.body.DMGType;
const AC = req.body.ArmorClass;
const AT = req.body.ArmorType;
const RI = req.body.RarityID;
const CB = req.body.chk;
let sql;

  switch (CB){
    case 'Armor':
      if (RI == 'Any' && AT != 'Any' && AC != 'Any'){
       sql = 'SELECT * FROM armor WHERE Armor_Type =  ?, Class_ID = ?'
      }else if(RI != 'Any' && AT == 'Any' && AC != 'Any'){
       sql = 'SELECT * FROM armor WHERE Class_ID = ? , Rarity_ID = ?'
      }else if (RI != 'Any' && AT != 'Any' && AC == 'Any'){
       sql = 'SELECT * FROM armor WHERE Armor_Type =  ?, Rarity_ID = ?'
      }else if (RI == 'Any' && AT == 'Any' && AC != 'Any'){
       sql = 'SELECT * FROM armor WHERE Class_ID = ?'
      }else if (RI != 'Any' && AT == 'Any' && AC == 'Any'){
       sql = 'SELECT * FROM armor WHERE Rarity_ID = ?'
      }else if (RI == 'Any' && AT != 'Any' && AC == 'Any'){
       sql = 'SELECT * FROM armor WHERE Armor_Type =  ?' 
      }else if(RI == 'Any' && AT == 'Any' && AC == 'Any'){
       sql = 'SELECT * FROM armor'
      }else{
       sql = 'SELECT * FROM armor WHERE Armor_Type =  ?, Class_ID = ? , Rarity_ID = ?'
      }
      break;
    case 'Gun':
      if (RI == 'Any' && DT != 'Any' && GT != 'Any'){
       sql = 'SELECT * FROM weapon WHERE Weapon_Type ==  ?, Weapon_Dmg_Type == ?'
      }else if(RI != 'Any' && DT == 'Any' && GT != 'Any'){
       sql = 'SELECT * FROM weapon WHERE Weapon_Type ==  ?, Rarity_ID == ?'
      }else if (RI != 'Any' && DT != 'Any' && GT == 'Any'){
       sql = 'SELECT * FROM weapon WHERE Weapon_Dmg_Type == ? , Rarity_ID == ?'
      }else if (RI == 'Any' && DT == 'Any' && GT != 'Any'){
       sql = 'SELECT * FROM weapon WHERE Weapon_Type ==  ?'
      }else if (RI != 'Any' && DT == 'Any' && GT == 'Any'){
       sql = 'SELECT * FROM weapon WHERE Rarity_ID == ?' 
      }else if (RI == 'Any' && DT != 'Any' && GT == 'Any'){
       sql = 'SELECT * FROM weapon WHERE Weapon_Dmg_Type == ?'
      }else if(RI == 'Any' && DT == 'Any' && GT == 'Any'){
       sql = 'SELECT * FROM weapon'
      }else{
       sql = 'SELECT * FROM weapon WHERE Weapon_Type ==  ?, Weapon_Dmg_Type == ? , Rarity_ID == ?'

      }
      break;
    case 'Ghost':
      if (RI == 'Any'){
      sql = 'SELECT * FROM ghost'
      }
      else{
       sql = 'SELECT * FROM ghost WHERE Rarity_ID == ?'
      }
      break;
    default:
       checkemp = true;
      break;
  }
  let query = db.query(sql, data, (err, result) => {
  console.log(CB)
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

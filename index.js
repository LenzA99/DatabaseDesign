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

let sql;
let data;
let query;

// Searches from the database and outputs results with a text box
app.post("/readsearch", (req, res) => {
   sql = `SELECT * FROM itemnames WHERE Name ='${req.body.xsearch}'`;
  query = db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.render("readData", {data: result });
  });
});

// Searches from the database and outputs results through checkbox and drop down menu
app.post("/readcheckbox", (req, res) => { 
const GT = req.body.GunType;
const DT = req.body.DMGType;
const AC = req.body.ArmorClass;
const AT = req.body.ArmorType;
const AR = req.body.ArmorRarity;
const GOR = req.body.GhostRarity;
const GUR = req.body.WeaponRarity;
const CB = req.body.chk;
const data2 = 'AND';
let data3;

  switch (CB){
      case 'Armor':
        if (AR == 'Any' && AT != 'Any' && AC != 'Any'){
         sql = `SELECT * FROM armor WHERE Type = '${req.body.ArmorType}' AND Class_ID ='${req.body.ArmorClass}'`
        }else if(AR != 'Any' && AT == 'Any' && AC != 'Any'){
         sql = `SELECT * FROM armor WHERE Rarity_ID = '${req.body.ArmorRarity}' AND Class_ID ='${req.body.ArmorClass}'`
        }else if (AR != 'Any' && AT != 'Any' && AC == 'Any'){
         sql = `SELECT * FROM armor WHERE Rarity_ID = '${req.body.ArmorRarity}' AND Type ='${req.body.ArmorType}'`
        }else if (AR == 'Any' && AT == 'Any' && AC != 'Any'){
         sql = `SELECT * FROM armor WHERE Class_ID ='${req.body.ArmorClass}'`
        }else if (AR != 'Any' && AT == 'Any' && AC == 'Any'){
         sql = `SELECT * FROM armor WHERE Rarity_ID = '${req.body.ArmorRarity}'`
        }else if (AR == 'Any' && AT != 'Any' && AC == 'Any'){
         sql = `SELECT * FROM armor WHERE Type = '${req.body.Armor_Type}'` 
        }else if(AR == 'Any' && AT == 'Any' && AC == 'Any'){
         sql = 'SELECT * FROM armor;'
        }else{
          sql = `SELECT * FROM armor WHERE Rarity_ID = '${req.body.ArmorRarity}' AND Type ='${req.body.ArmorType}' AND Class_ID = '${req.body.ArmorClass}'`
        }
        break;
    case 'Gun':
      if (GUR == 'Any' && DT != 'Any' && GT != 'Any'){
       sql = `SELECT * FROM weapon WHERE Type = '${req.body.DMGType}' AND Class_ID = '${req.body.GunType}' `
      }else if(GUR != 'Any' && DT == 'Any' && GT != 'Any'){
       sql = `SELECT * FROM weapon WHERE Rarity_ID = '${req.body.WeaponRarity}' AND Class_ID = '${req.body.GunType}'`
       
      }else if (GUR != 'Any' && DT != 'Any' && GT == 'Any'){
       sql = `SELECT * FROM weapon WHERE Rarity_ID = '${req.body.WeaponRarity}'AND Type = '${req.body.DMGType}'`
       
      }else if (GUR == 'Any' && DT == 'Any' && GT != 'Any'){
       sql = `SELECT * FROM weapon WHERE Class_ID = '${req.body.GunType}'`
       
      }else if (GUR != 'Any' && DT == 'Any' && GT == 'Any'){
       sql = `SELECT * FROM weapon WHERE Rarity_ID = '${req.body.WeaponRarity}'`
       
      }else if (GUR == 'Any' && DT != 'Any' && GT == 'Any'){
       sql = `SELECT * FROM weapon WHERE Type = '${req.body.DMGType}'`
       
      }else if(GUR == 'Any' && DT == 'Any' && GT == 'Any'){
       sql = 'SELECT * FROM weapon'
      }else{
       sql = `SELECT * FROM weapon WHERE Type = '${req.body.DMGType}' AND Rarity_ID = '${req.body.WeaponRarity}' AND Class_ID = '${req.body.GunType}'`
       
      }
      break;
    case 'Ghost':
      if (GOR == 'Any'){
       sql = 'SELECT * FROM ghost'
      }
      else{
       sql = `SELECT * FROM ghost WHERE Rarity_ID = '${req.body.GhostRarity}'`
      }
      break;
    default:
       checkemp = true;
      break;
  }
  if (data == ''){
    query = db.query(sql, (err, result) => {
      console.log(CB)
      if (err) {
        throw err;
      }
      res.render("readData", {data: result });
    });
  } else {
  query = db.query(sql, data, (err, result) => {
  console.log(CB)
  if (err) {
    throw err;
  }
  res.render("readData", {data: result });
});}
});

//Inserts a new item into database
app.post("/insertnewitem", (req, res) => {
  const CB2 = req.body.chk2;
  switch(CB2){
    case 'Armor':
     sql = `insert into armor set Name = '${req.body.IArmorName}', Power = '${req.body.IArmorPower}', Type = '${req.body.IArmorType}', Class_ID = '${req.body.IArmorClass}', Rarity_ID = '${req.body.IArmorRarity}'`;
    break;
    case 'Gun':
      sql = `insert into weapon set Name = '${req.body.IGunName}', Power = '${req.body.IGunPower}', Type = '${req.body.IGunType}', Class_ID = '${req.body.IGunClass}', Rarity_ID = '${req.body.IGunRarity}'`;
    break;
    case 'Ghost':
      sql = `insert into ghost set Name = '${req.body.IGhostName}', Rarity_ID = '${req.body.IGhostRarity}'`;
    break;
    default:
      checkemp = true;
    break;
  }
 query = db.query(sql, (err, result) => {
   if (err) {
     throw err;
   }
   res.send(`Item entry was added in the db...`);
 });
});

//updates a specific column in the database
app.post("/updateitem", (req, res) => {
  sql = `UPDATE itemnames SET Power = '${req.body.UpdatePower}' WHERE Name = '${req.body.UpdateName}'`
 query = db.query(sql, (err, result) => {
   if (err) {
     throw err;
   }
   res.send(`Item entry was updated in the db...`);
 });
});

//deletes an item from the database
app.post("/deleteitem", (req, res) => {
  sql = `DELETE FROM itemnames WHERE Name = '${req.body.DeleteItem}'`
 query = db.query(sql, (err, result) => {
   if (err) {
     throw err;
   }
   res.send(`Item entry was deleted in the db...`);
 });
});


// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
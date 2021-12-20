
// Ne fonctionne pas , cause : le "type"="module"
const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser= require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds=10;
dotenv.config({ path: "./.env" });

const jwt = require('jsonwebtoken');



//Créer la connection
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

// Connection

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql connected ...");
});

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(cors({
  origin:["http://localhost:3000"],
  methods:["GET","POST"],
  credentials:true,
})) ;

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(
  session({
    key:"userId",
    secret:"subscribe",
    resave: false,
    saveUninitialized: false,
    cookie:{
      expires: 60*60*24,
    }
  })
)

// Créer la base de donnée

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE travel";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created ...");
  });
});

// Créer les tables
app.get("/createuserstable", (req, res) => {
  let sql =
    "CREATE TABLE users(id int AUTO_INCREMENT, username VARCHAR(100), password VARCHAR(255),email VARCHAR(100), firstname VARCHAR(100), lastname VARCHAR(100),gender VARCHAR(10), address VARCHAR(10), birthdate DATE , tel VARCHAR(100), PRIMARY KEY (id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Users Table created...");
  });

  app.get("/createhistorytable", (req, res) => {
    let sql =
      "CREATE TABLE history(id int AUTO_INCREMENT, purchase_date DATE, begin_date DATE, end_date DATE, previous VARCHAR(100), next VARCHAR(100), PRIMARY KEY (id))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("History Table created...");
    });
  })

  app.get("/createtravelstable", (req, res) => {
    let sql =
      "CREATE TABLE travels(voyagesid int AUTO_INCREMENT, prices INT(100) , PRIMARY KEY (voyagesid))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Travels Table created...");
    });
  })

  app.get("/createtripstable", (req, res) => {
    let sql =
      "CREATE TABLE trips(number int AUTO_INCREMENT, places VARCHAR(500) , PRIMARY KEY (number))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Trips Table created...");
    });
  })

  app.get("/createdetailstable", (req, res) => {
    let sql =
      "CREATE TABLE details(id int AUTO_INCREMENT, descriptions VARCHAR(500) ,name VARCHAR(100), languages VARCHAR(500), PRIMARY KEY (id))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Details Table created...");
    });
  })
});

// Insérer les données
app.get("/adduser1", (req, res) => {
  let user = {
    username: "kobalt",
    password: "1234",
    email: "kobalt18@gmail.com",
    firstname: "albert",
    lastname: "dupontel",
    gender: "homme",
    address: "5 via Leonardo Davinci 90450,Quartu ",
    birthdate: "1986-05-12",
    tel: "+3965874584",
  };
  let sql = "INSERT INTO users SET ?";
  let query = db.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("user 1 added");
  });
});

app.get("/adduser2", (req, res) => {
  let user = {
    username: "toto",
    password: "69325",
    email: "totozigotto@gmail.com",
    firstname: "jean",
    lastname: "jean",
    gender: "homme",
    address: "1 avenue de la blague ",
    birthdate: "1990-10-09",
    tel: "+32478960223",
  };
  let sql = "INSERT INTO users SET ?";
  let query = db.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("user 2 added");
  });
});

// Lire les données

app.get("/getusers", (req, res) => {
  let sql = "SELECT * FROM users";
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("users fetched");
  });
});

// Lire une seule données
app.get("/getuser/:id", (req, res) => {
  let sql = `SELECT * FROM users WHERE id=${req.params.id}`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send("user fetched");
  });
});

// Mettre à jour les données
app.get("/updateuser/:id", (req, res) => {
  let newUser = "Updated User";
  let sql = `UPDATE users SET username = '${newUser}' WHERE id=${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("user updated");
  });
});

// Supprimer les données

app.get("/deleteuser/:id", (req, res) => {
  let sql = ` DELETE FROM users WHERE id=${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("user deleted");
  });
});

// inserer les donnees du front

app.post("/signup", (req, res) => {
    const username= req.body.username;
    const name= req.body.name;
    const firstname= req.body.firstname;
    const gender= req.body.gender;
    const birthdate= req.body.birthdate;
    const address= req.body.address;
    const email= req.body.email;
    const tel= req.body.tel;
    const password= req.body.password;

    bcrypt.hash(password,10, (err, hash)=>{
      if (err) {
        console.log(err);
      }
      db.query ="INSERT INTO users (username, lastname, firstname,gender,birthdate,address,email,tel, password) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        username,
        name,
        firstname,
        gender,
        birthdate,
        address,
        email,
        tel,
        password,
      ],
      (err, result) => {
        console.log(err);
      };
  });
});
     

const verifyJWT = (req,res,next) =>{
  const token = req.headers["x-access-token"]

  if (!token) {
    res.send("We need a token, please give it to us next time!")
  }else{
    jwt.verify(token, "jwtSecret",(err,decoded)=>{
      if (err) {
        res.json({auth:false, message:"you failed to authenticated"})
      }else{
        req.userId = decoded.id;
        next();
      }
    });
  }
};

app.get('/isUserAuth', verifyJWT , (req,res)=>{
  res.send("You are authenticated");
}) // verification du web token

app.get("/signin",(req,res)=>{
  if(req.session.user){
    res.send({ loggedIn: true, user: req.session.user });
  }else{
    res.send({ loggedIn:false });
  }
});

app.post("/signin",(req,res)=>{
  console.log(req.body);
    const username= req.body.username;
    const password= req.body.password;
    (db.query =
    "SELECT * FROM  users WHERE username = ?;"),
    username,
    (err,result)=>{
      if (err) {
          res.send({err: err});
      }
      if (result.length > 0) {
        bcrypt.compare(password,result[0].password,(error,response)=>{
          console.log(response);
          if (response) {
            const id = result[0].id
            const token = jwt.sign({id}, "jwtSecret", {
              expiresIn: 300, //correspond a 5 minutes
             })
             req.session.user = result;
  
             res.json({auth: true, token: token, result: result});
           } else{
             res.json({auth: false, message:"Wrong username or password combination"});
           }
         });
       }else{
         res.json({auth: false, message:"User doesn't exist"});
       }
       
    }


    
})

app.listen("8080", () => {
  console.log("Server started on port 8080");
});

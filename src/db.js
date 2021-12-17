const express = require('express');
const mysql = require('mysql');

//Créer la connection 
const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password :'',
    database:'website'
    
    
});

// Connection

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('MySql connected ...');
});


const app = express();

// Créer la base de donnée 

app.get('/createdb',(req,res)=> {
    let sql ='CREATE DATABASE website';
    db.query(sql,(err, result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Database created ...');
    });
});

// Créer les tables
app.get('/createutilisateurtable',(req,res)=>{
    let sql = 'CREATE TABLE utilisateur(userid int AUTO_INCREMENT, pseudo VARCHAR(50), mdp VARCHAR(20),coordonnee VARCHAR(500), voyages VARCHAR(500), infouser VARCHAR(500),PRIMARY KEY (userid))';
    db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Utilisateur Table created...');

    });
   


});

// Insérer les données
app.get('/adduser1', (req,res)=>{
    let user = {pseudo :'kobalt', mdp :'1234', coordonnee:'123 rue du code', voyages :'Oristano', infouser:'+3245698745'};
    let sql = 'INSERT INTO utilisateur SET ?';
    let query = db.query(sql, user,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('user 1 added');
    });
});

app.get('/adduser2', (req,res)=>{
    //req.query.pseudo
    let user = {pseudo :'toto', mdp :'69325',coordonnee: '1 avenue de la blague', voyages: 'Ogliastra', infouser : '+5698745620'};
    let sql = 'INSERT INTO utilisateur SET ?';
    let query = db.query(sql, user,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('user 2 added');
    });
});

// Lire les données

app.get('/getutilisateur', (req,res)=>{
    let sql = 'SELECT * FROM utilisateur';
    let query = db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('user fetched');
    });
});

// Lire une seule données
app.get('/getutilisateur/:userid', (req,res)=>{
    let sql = `SELECT * FROM utilisateur WHERE userid=${req.params.userid}`;
    let query = db.query(sql,(err,results)=> {
        if(err) throw err;
        console.log(results);
        res.send('user fetched');
    });
});

// Mettre à jour les données
app.get('/updateutilisateur/:userid', (req,res)=>{
    let newUser='Updated User';
    let sql =`UPDATE utilisateur SET pseudo = '${newUser}' WHERE userid=${req.params.userid}`;
    let query = db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('user updated');
    });
});

// Supprimer les données

app.get('/deleteutilisateur/:userid', (req,res)=>{
    let sql =` DELETE FROM utilisateur WHERE userid=${req.params.userid}`;
    let query = db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('user deleted');
    });
});

app.listen('3000', () =>{
    console.log('Server started on port 3000');
});

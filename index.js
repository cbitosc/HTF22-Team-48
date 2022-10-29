var mysql = require('mysql');
const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const { name } = require('ejs');
const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "/public")));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/dashboard.html")
});

app.post('/login',function(req,res){
  var v=req.body.d
 
  console.log(v);
  if(v == "login")
  { 
    res.sendFile("D:/test/login.html")
  }
  else if(v == "signup")
  {
    res.sendFile("D:/test/signup.html")
  }
 
 
})

app.post("/sub_login",function(req,res){
  var username=req.body.email
  var password=req.body.password
 
  con.query('SELECT * FROM users  WHERE email = ? AND pass = ?', [username, password], function (error, results, fields) {
    if(error) throw error;
    if(results.length>0)
    {
      console.log('correct');
    }
    else {
      console.log('incorrect');
    }

  }

)});

app.post('/sub_register',function(req,res){
  var n=req.body.name 
  var e=req.body.email
  var c=req.body.phno
  var p=req.body.pass
  console.log("hie")
  con.query("INSERT INTO users(name,contact,pass,email) VALUES (?,?,?,?);",[n,c,e,p], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  
 
})

app.listen(8080,function(req,res){
  console.log('working');
});



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2708",
  database:"mydb",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
});
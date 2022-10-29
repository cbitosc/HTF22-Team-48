var mysql = require('mysql');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.render(__dirname+"/src/components/home.ejs")
});

app.post('/login',function(req,res){

  var name=req.body.name
  


  con.query("INSERT INTO login(name) VALUES (?);",[name], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  res.redirect("/");
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
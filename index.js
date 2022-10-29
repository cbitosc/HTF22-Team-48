var mysql = require('mysql');
const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const { name } = require('ejs');
const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "/public")));

var username=''
app.get("/",function(req,res){
  res.sendFile(__dirname+"/dashboard.html")
});

d=
[
  {
    "name": "Mawlynnong",
    "place": "Meghalaya",
    "description": "Mawlynnong is a village in the East Khasi Hills district of the Meghalaya state in North East India.",
    "price": {}
  },
  {
    "name": "Pipili",
    "place": "Odisha",
    "description": "Pipili is a town and a NAC under jurisdiction of Puri district in the Indian state of Odisha. It is famous for designing beautiful Applique handicrafts.",
    "price": {}
  },
  {
    "name": "Hodka",
    "place": "Gujarat",
    "description": "Hodka Village is one of the growing rural tourism spots that attracts visitors for its rich art and crafts and strong cultural backgrounds.",
    "price": {}
  },
  {
    "name": "Lachen Lachung",
    "place": "Gangtok",
    "description": "Gangtok, Lachen Lachung is complete tour itinerary as it is the good combination of education,tourism and business.",
    "price": {}
  },
  {
    "name": "Bishnoi Village",
    "place": "Rajasthan",
    "description": "Bishnoi village of Jodhpur, Rajasthan is scenic beauty marked with Khejri trees and deer. Also in the village is the Guda Bishnoi Lake.",
    "price": {}
  },
  {
    "name": "Munsiyari",
    "place": "Uttarakhand",
    "description": "Mawlynnong is a village in the East Khasi Hills district of the Meghalaya state in North East India.",
    "price": {}
  },
  {
    "name": "Dah Hanu",
    "place": "Ladakh",
    "description": "Dah (also known as Dha) and Hanu are two villages of the Brokpa of theLeh District of the Indian union territory of Ladakh.",
    "price": {}
  },
  {
    "name": "Majuli",
    "place": "Assam",
    "description": "Mājuli or Majuli (mazuli) is a river island in the Brahmaputra River, Assam and in 2016 it became the first island to be made a district in India.",
    "price": {}
  },
  {
    "name": "Qila Raipur",
    "place": "Punjab",
    "description": "Qila Raipur (also spelled as Kila Raipur) is a noted village of Ludhiana district in Punjab, India, as it hosts the annual Qila Raipur Sports Festival, known as the Rural Olympics.",
    "price": {}
  },
  {
    "name": "Karaikudi",
    "place": "Tamilnadu",
    "description": "Karaikudi is a Greater municipality in Sivagangai district in the Indian state of Tamil Nadu. It is the 21st largest urban agglomeration of Tamil Nadu based on 2011 census data.",
    "price": {}
  }
]

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
  username=req.body.email
  var password=req.body.password
 
  con.query('SELECT * FROM users  WHERE email = ? AND pass = ?', [username, password], function (error, results, fields) {
    if(error) throw error;
    if(results.length>0)
    {
      console.log('correct');
      res.render(__dirname+'/src/components/places_cards.ejs',{d:d})
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
  
  res.render(__dirname+'/src/components/places_cards.ejs',{d:d})
 
})

app.get("/book/:id",function(req,res){
  var id=req.params.id
  con.query("SELECT * FROM places WHERE place_id=(?)",[id],function(err,result){
    var m = JSON.parse(JSON.stringify(result))
    res.render(__dirname + '/src/components/location.ejs', { n: m })
  })
  
});



app.post("/cart",function(req,res){

  var sd=req.body.sd
  var ed=req.body.ed
  var v=req.body.b
  var l=1
  con.query("INSERT INTO booking(place_id,start_date,end_date,email) VALUES (?,?,?,?);",[v,sd,ed,username],function(err,result)
  { if(err) throw err;
    console.log('inserted');

  })

})

app.get("/display",function(req,res){
  
  
  con.query("SELECT * FROM places INNER JOIN booking ON places.place_id=booking.place_id WHERE booking.email=?",[username],function (error, result){
    
		var l = JSON.parse(JSON.stringify(result))
   

		res.render(__dirname + '/views/emp_leave.ejs', { d: l })
  })
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
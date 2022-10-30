var mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { name } = require('ejs');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

var username = ''
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dashboard.html")
});

d =
  [

    {
      name: "Mawlynnong",
      place: "Meghalaya",
      description: "Mawlynnong is a village in the East Khasi Hills district of the Meghalaya state in North East India.",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5S91mZmVspLVWwJkYF-EPfCv_USKHDgjRv1Ar4xlMQNB0g&s",
      guide_name: "Ram",
      guide_contact:"9378872822"
    },
    {
      name: "Pipili",
      place: "Odisha",
      description: "Pipili is a town and a NAC under jurisdiction of Puri district in the Indian state of Odisha. It is famous for designing beautiful Applique handicrafts.",
      price: 3000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXagxr63PjtRAZJtwHKbQM-W4-KJWw07vcHJkpf5e4v15Rxkk&s",
      guide_name: "Surya",
      guide_contact:"9387288273"
    },
    {
      name: "Hodka",
      place: "Gujarat",
      description: "Hodka Village is one of the growing rural tourism spots that attracts visitors for its rich art and crafts and strong cultural backgrounds.",
      price: 4000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjlJg_DeAkaGTPYdgaebh39Fe5ZhSvbQIs9wsq1WjRyIG7my8&s",
      guide_name: "Raju",
      guide_contact:"8372882732"
    },
    {
      name: "Lachen Lachung",
      place: "Gangtok",
      description: "Gangtok, Lachen Lachung is complete tour itinerary as it is the good combination of education,tourism and business.",
      price: 4000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZusrt8vSMuB4lA8eVJDrxDEIhdwtYYH7caRRjQeh6q2E3vltD&s",
      guide_name: "Laxman",
      guide_contact:"9263873239"
    },



    {
      name: "Munsiyari",
      place: "Uttarakhand",
      description: "Mawlynnong is a village in the East Khasi Hills district of the Meghalaya state in North East India.",
      price: 2888,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXk1kvlba-DH2haVZLCLf2cfB6FtsqLQxDk_94HYUdtgbUH1g&s",
      guide_name: "Balaji",
      guide_contact:"7273187322"
    },
    {
      name: "Dah Hanu",
      place: "Ladakh",
      description: "Dah (also known as Dha) and Hanu are two villages of the Brokpa of theLeh District of the Indian union territory of Ladakh.",
      price: 7000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqVymvxapp_2rkUd7-h9FwM4cyFZcgqt-M6-5C8neddbNCMP3&s",
      guide_name: "Manoj",
      guide_contact:"9237187832"
    },
    {
      name: "Majuli",
      place: "Assam",
      description: "Mājuli or Majuli (mazuli) is a river island in the Brahmaputra River, Assam and in 2016 it became the first island to be made a district in India.",
      price: 4000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYIAwqaz5HKZULDgK9E4pM2tKfCIG1SbfG4DA3xQCHdvaOaqZ&s",
      guide_name: "Saketh",
      guide_contact:"8738263728"
    },
    {
      name: "Qila Raipur",
      place: "Punjab",
      description: "Qila Raipur (also spelled as Kila Raipur) is a noted village of Ludhiana district in Punjab, India, as it hosts the annual Qila Raipur Sports Festival, known as the Rural Olympics.",
      price: 6000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRlJHQVv9aC8Q2Ldlt06LFV37CspYstzHiQbvX_RlSKP_rPhV&s",
      guide_name: "Kiran",
      guide_contact:"7238173138"
    },
    {
      name: "Karaikudi",
      place: "Tamilnadu",
      description: "Karaikudi is a Greater municipality in Sivagangai district in the Indian state of Tamil Nadu. It is the 21st largest urban agglomeration of Tamil Nadu based on 2011 census data.",
      price: 5000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-hui477new5soi7F-9Z2qHrQbBkIZz2lHEq2l3RwpzqzIa4&s",
      guide_name: "Tanish",
      guide_contact:"9283177318"
    },
    {
      name: "Kumbalangi",
      place: "Kerala",
      description: "Kumbalangi, a small and beautiful island village off Kochi in Kerala, is the first Model Tourism Village in India. The age-old cultural heritage of the people and the simple livelihood would fascinate you apart from the indigenous fishing experiences, country boat cruises and crab farming experiences.",
      price: 4000,
      image: "https://im.hunt.in/cg/iol/About/Tourism/KumbalangiKerala.jpg",
      guide_name: "Ramesh",
      guide_contact:"9283177326"
    },
    {
      name: "Pochampally",
      place: "Andhra Pradesh",
      description: "50 kilometres away from Hyderabad, Pochampally, known as the ‘weavers’ town’ is one of the most interesting rural tourism destinations in India. If you are an ardent fan of silk ‘Ikat’, this place is a must-visit site for you. ",
      price: 2500,
      image: "https://im.hunt.in/cg/iol/About/Tourism/Pochampally.jpeg",
      guide_name: "Vinay",
      guide_contact:"8283377318"
    },
    {
      name: "Kibber",
      place: "Himachal Pradesh",
      description: "Kibber is a village in the Spiti Valley of Himachal Pradesh, located at an altitude of a little over 4000 meters",
      price: 2500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBc3LMwWTF6yD3sCSuEfreIVAUPtFwVinaOwD5e4h42HXE7EIQ&s",
      guide_name: "Santhosh",
      guide_contact:"9384239238"
    }
  ]





  

app.post('/login', function (req, res) {
  var v = req.body.d

  console.log(v);
  if (v == "login") {
    res.sendFile("D:/test/login.html")
  }
  else if (v == "signup") {
    res.sendFile("D:/test/signup.html")
  }


})

app.post("/sub_login", function (req, res) {
  username = req.body.email
  var password = req.body.password

  con.query('SELECT * FROM users  WHERE email = ? AND pass = ?', [username, password], function (error, results, fields) {
    if (error) throw error;
    if (results.length > 0) {
      console.log('correct');
      res.render(__dirname + '/src/components/test1.ejs', { d: d })
    }
    else {
      console.log('incorrect');
    }

  }

  )
});

app.post('/sub_register', function (req, res) {
  var n = req.body.name
  var e = req.body.email
  var c = req.body.phno
  var p = req.body.pass
  console.log("hie")
  con.query("INSERT INTO users(name,contact,pass,email) VALUES (?,?,?,?);", [n, c, e, p], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  res.render(__dirname + '/src/components/test1.ejs', { d: d })

})

app.get("/book/:id", function (req, res) {
  var id = req.params.id
  con.query("SELECT * FROM places WHERE place_id=(?)", [id], function (err, result) {
    var m = JSON.parse(JSON.stringify(result))
    res.render(__dirname + '/src/components/location.ejs', { n: m })
  })

});



app.post("/cart", function (req, res) {

  var sd = req.body.sd
  var ed = req.body.ed
  var v = req.body.b
  var l = 1
  con.query("INSERT INTO display(place_id,start_date,end_date,email) VALUES (?,?,?,?);", [v, sd, ed, username], function (err, result) {
    if (err) throw err;
    console.log('inserted');
    res.redirect("/display");

  })

})

app.get("/display", function (req, res) {

  console.log('entered');
  console.log(username);

  con.query("SELECT * FROM places INNER JOIN display ON places.place_id=display.place_id WHERE display.email=?", [username], function (error, result) {
    if (error) throw error;
    var l = JSON.parse(JSON.stringify(result))
    console.log(l)


    res.render(__dirname + '/src/components/card2.ejs', { k: l,g:d})
  })
})

app.listen(8080, function (req, res) {
  console.log('working');
});



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2708",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

});
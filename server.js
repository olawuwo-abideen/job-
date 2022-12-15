//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));




mongoose.connect("mongodb://localhost:27017/formDB", {useNewUrlParser: true});

const formSchema = {
  
  Title: String,
  Fname: String,
  Lname: String,
  Email: String,
  Tel : String,
  Dob : String,
  Gender : String,
  Mstatus : String,
  Languages : String,
  Nationality : String,
  Institution : String,
  Year  : String,
  Course  : String,
  Award  : String,
  Kname  : String,
  Relationship  : String,
  Kphone  : String,
  kAddress : String
};

const Form = new mongoose.model("Form", formSchema);



app.post("/home", function(req, res){

    const newForm = new Form({
     Title : req.body.title,
     Fname : req.body.fname,
     Lname : req.body.lname,
     Email : req.body.email,
     Tel : req.body.tel,
     Dob: req.body.dob,
     Gender : req.body.gender,
     Mstatus : req.body.marital,
     Languages : req.body.languages,
     Nationality : req.body.nationality,
     Institution : req.body.institution,
     Year  : req.body.year,
     Course  : req.body.course,
     Award  : req.body.award,
     Kname  : req.body.kname,
     Relationship  : req.body.relationship,
     Kphone  : req.body.kphone,
     kAddress : req.body.kaddress,

});

newForm.save(function(err){
  if (err) {
    console.log(err);
  } else {
    res.render('thanks')
  }
})

})


app.get("/", function(req, res){
  res.render("home");
});

app.listen(3000, function(){
    console.log("server is running on port 3000")
})


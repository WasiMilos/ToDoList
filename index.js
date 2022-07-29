//jshint esversion:6

const express = require("express");

const bpdyParser = require("body-parser");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();

var items = ["Buy Food","Cook Food","Eat Food"];
var workList = [];
app.set("view engine", "ejs" );

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));



app.get("/", function(req, res){

    const day = date.date();

    res.render("index", {listTitle: day, newListItem: items});
});

app.post("/",function(req, res){
   
    let item = req.body.Item;

 

    if(req.body.list   === "Work"){
        workList.push(item);
        res.redirect("/work");
    }else  {
        items.push(item);
        res.redirect("/");
    }
 

});


app.get("/work", function(req,res){
    res.render("index", {listTitle: "Work List", newListItem: workList});
})

app.listen(3000, function(){
    console.log("server started at port 3000");
});
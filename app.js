const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 80;
const path = require("path");

//Use mongoose in express 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/copy');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
let formate = new mongoose.Schema({
    name:String,
    email:String,
    message:String,
});
let data = mongoose.model("text",formate);

//

app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set("views","demo");

// get request's 
app.get("/",(req,res)=>{
    res.status(200).render("home.pug");
});
app.get("/about",(req,res)=>{
    res.status(200).render("about.pug");
});
app.get("/services",(req,res)=>{
    res.status(200).render("services.pug");
});
app.get("/contact",(req,res)=>{
    res.status(200).render("contact.pug");
});
// post request's 
app.post("/",(req,res)=>{

    res.status(200).render("contact.pug");
    let d1 = req.body
    g1 = new data(d1)
    g1.save()
    console.log(d1)
}) ;
//host 
app.listen(port,()=>{
    console.log(`This is working on port ${port}`)
})


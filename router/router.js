const express=require('express');
const app=express();
//req server ayu ka imanaa 
//res
//home get
app.get('/users',(req,res)=>{
   console.log(req.body)
   res.render('users',{
    data:[]
   })
})
app.post("/users", (req, res) => {
  console.log(req.body);
  res.redirect('/users')
});
app.get("/home", (req, res) => {
  console.log("return home");
  res.render("home", {
    data: [],
  });
});
app.get("/department", (req, res) => {
  console.log("return department");
  res.render("department", {
    data: [],
  });
});
app.get("/doctor", (req, res) => {
  console.log("return doctor");
  res.render("doctor", {
    data: [],
  });
});
app.get("/booking", (req, res) => {
  console.log("return booking");
  res.render("booking", {
    data: [],
  });
});
app.get("/login", (req, res) => {
  console.log("return login");
  res.render("login", {
    data: [],
  });
});
app.get("/sidebar", (req, res) => {
  console.log("return login");
  res.render("side_bar", {
    data: [],
  });
});
module.exports=app
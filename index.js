const express =require('express');
const ejs=require ('ejs')
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine","html");
app.engine("html",ejs.renderFile)
app.use(express.static('./public'))
app.use('/',require('./router/router'))
app.listen(9001)
console.log(9001)
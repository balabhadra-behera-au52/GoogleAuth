const express = require("express");
const expressSession = require("express-session");
const passport = require("passport");
const auth = require ("./auth");

const app = express();
 app.use(expressSession({
    secret: 'mysecretapp',
    resave:true,
    saveUninitialized:true
 }));
 app.use(passport.initialize());
 app.use(passport.session());


app.get("/login/google",passport.authenticate('google',{scope:['profile email']}));


app.get("/google",passport.authenticate('google'),(req,res)=>{
    res.redirect("/");
});
app.get("/",(req,res)=>{
     res.status(400).send('no logged in,login with google');
})

app.get("/logout",(req,res)=>{
    
    res.send("log out");
})



app.listen(5000,()=>{
    console.log("app is running 5000");
})
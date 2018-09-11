const express = require("express");
const path = require("path");

const app = express();


const publicPath = path.join(__dirname, "/");

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("/man",(req,res,next)=>{
    res.sendFile(path.join(__dirname , "/man.html"));
});
app.get("/woman",(req,res,next)=>{
    res.sendFile(path.join(__dirname , "/woman.html"));
});
app.get("/history",(req,res,next)=>{
    res.sendFile(path.join(__dirname , "/history.html"));
});
app.get("/expertise",(req,res,next)=>{
    res.sendFile(path.join(__dirname , "/expertise.html"));
});
app.get("/shops",(req,res,next)=>{
    res.sendFile(path.join(__dirname , "/shop.html"));
});
app.get("/concordia",(req,res,next)=>{
    res.sendFile(path.join(__dirname , "/concordia.html"));
});


app.listen(port, () =>{
    console.log("Portal open on post 3000");
});

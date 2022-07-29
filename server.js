var express=require("express");
var app=express();

app.get("/",(req,res)=>

{
res.send(
    "<h1> Testing< /h1>"
    +"<hr/>"
)
});
var server=app.listen(9000);
console.log("Testing online")
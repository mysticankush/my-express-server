const express=require("express");

 const app = express();
 // TEMP: request -> provide an input into this callback function
 // TEMP: response.send -> provided input is sent back to us when callback function is triggered
app.get("/",function(request,response){
  response.send("<h1>Hello World</h1>");
});
app.get("/contact",function(request,response){
  response.send("Contact me at:ankush@gmail.com");
})
app.get("/about",function(request,response){
  response.send("Hello me Yashasvi hai. Mein nahata kam hu.Mere roommates merse bahut tang hai es vajah se");
})
app.get("/hobbies",function(request,response){
  response.send("<ul><li>Sleep</li><li>Code</li><li>Marvel Movies</li>")
})
app.listen(3000,function(){
  console.log("Server started on port 3000");
});

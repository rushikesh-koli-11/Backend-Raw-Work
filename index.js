const express=require("express");
const app = express();

let port=8080;

app.listen(port,()=>{
    console.log("hello on ",port);
})

// app.use((req,res)=>{
    
//     console.log("request received");
//     res.send("<h1>hello</h1><ul><li>apple</li><li>orange</li>");
// })

app.get("/",(req,res)=>{
    res.send("root path");
})
app.get("/apple",(req,res)=>{
    res.send("apple path");
})
app.get("/orange",(req,res)=>{
    res.send("orange path");
})


app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    console.log(req.params);
    res.send(`welcome ${username} your id is ${id}`);
})

app.get("/search",(req,res) =>{
    let {q}= req.query;
    res.send(`this are search results for ${q}`);
})
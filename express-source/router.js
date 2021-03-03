const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send("你访问了/")
})

app.post('/jack',(req,res)=>{
    res.send("你访问了/jack")
})

app.delete('/tom',(req,res)=>{
    res.send("你访问了/tom")
})

app.put('/tony',(req,res)=>{
    res.send("你访问了/tony")
})

app.listen(3000,()=>{
    console.log("我正在监听....")
})
 

const http=require('http');

let port=3000;

const server=http.createServer(function(req,res){
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end("我是http创建的")
});

server.listen(port,function(req,res){
    console.log(`Example app listening at http://localhost:${port}`)
})


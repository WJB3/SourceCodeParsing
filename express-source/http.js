 

const http=require('http');

let port=3000;

const server=http.createServer(function(req,res){
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    //请求的 URL 字符串
    if(req.url==='/'){
        res.end("我是http创建的");
    }else{
        res.writeHead(404)
        res.end('cat get / ');
    }
    
});

server.listen(port,function(req,res){
    console.log(`Example app listening at http://localhost:${port}`)
})


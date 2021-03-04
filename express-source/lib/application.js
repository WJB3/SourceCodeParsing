const http=require('http');

function Application(){
    
    this._router=[{
        path:"*",
        method:"*",
        callback:function(req,res){
            res
                .writeHead(404)
                .end(`Cannot ${req.method} ${req.url}`)
        }
    }];
}

for(let i=0;i<http.METHODS.length;i++){
    //http.METHODS定义了所有的http方法，需要转化为小写，别问为什么是大写，问就是规范
    Application.prototype[http.METHODS[i].toLowerCase()]=function(path,callback){
        this._router.push({
            path,
            method:http.METHODS[i],
            callback
        })
    }
} 

Application.prototype.listen=function(){
    const self=this;
    let server=http.createServer(function(req,res){  
        const { method,url }=req; 
        for(let i=1;i<self._router.length;i++){
            const { path,method:RouterMethod,callback }=self._router[i];
            if(path===url && RouterMethod===method){
                return callback(req,res);
            } 
        }
        return self._router[0].callback(req,res);
    })
 
    server.listen(...arguments);
    
}

module.exports=Application;
var http = require("http")
var fs = require("fs")
var url = require("url")
http.createServer(function(req,res)
{

    var q = url.parse(req.url,true)
    // console.log(q.pathname)
    if(q.pathname==="/")
    {
    fs.readFile("helloworld.html",function(err,data)
    {
        res.writeHead(200,{"content-Type":"text/html"})
        res.write(data)
        res.end()
    })
} else if(q.pathname==="/samplelogin")
{
    fs.readFile("samplelogin.html",function(err,data)
    {
        res.writeHead(200,{"content-Type":"text/html"})
        res.write(data)
        res.end()
    })
}
else if(q.pathname==="/sampleloginaction")
{
    res.writeHead(200,{"content-Type":"text/html"})  
    console.log(q.query.uname)
    res.write("<h1>"+q.query.uname+"</h2>")
    res.end()
}
else
{
    res.writeHead(200,{"content-Type":"text/html"})
    res.write("error")
    res.end()
}
}).listen(100,()=>console.log("server started"))
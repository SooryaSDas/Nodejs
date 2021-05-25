var http = require("http")
http.createServer(function(req,res)
{
    res.write("Hello sandra")
    res.end()
}).listen(7000)
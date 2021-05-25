var hello = function(data)
{
    console.log("Data : "+data)
}

var hey = function(callback)
{
    callback("hello world")
}

hey(hello)
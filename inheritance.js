class sample
{
    sampleHello()
    {
        console.log("This is a sample hello")
    }
}
class Demo extends sample
{
    constructor(num1,num2) {
        super()
        this.num1 = num1
        this.num2 = num2
    }
    hello()
    {
        console.log("Hello friends :"+(this.num1+this.num2))
    }
}
let key = new Demo(20,20)
key.hello()
key.sampleHello()
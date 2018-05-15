/*
var arr = [0,1,2,3,4,5,6,7,8,9]
var min = arr[0]
var max = arr.length
var k
function binaryFind(arr ,x){
    for(var i = 0; i < arr.length; i++)
    {
        k=Math.floor((min+max)/2);
        if(x === arr[k]) 
            return k
        else if(x < arr[k])
            max = k - 1;
        else
            min
    }
}
*/
/*
var str = 'Deus\n'
console.log(str.length)
console.log(str.charAt(1))
str[1]
console.log(str)
console.log(str.toLowerCase())
sconsole.log(str.toUpperCase())
console.log(str.slice(1, 3))
console.log(str.substr(1, 3))
*/
/*
var str = 
`
x
xx
xxx
xxxx
xxxxx
`
console.log(str)
*/
/*
var arr = ['a','b','c','d','e']
var newArr = [], index;
for (i = arr.length; i > 0; i--) {
    index = arr.length - i;
    newArr[i] = arr[index];
}
console.log(newArr)
*/
/*
var arr = ['a','b','c','d','e']
var newArr = arr.reverse()
console.log(newArr)
*/
/*
var str = "yellow green orrange red blue"
var arr = str.split(' ')
var i = 0
arr.forEach((item,i,arr)=>{
    arr[i]=item.toUpperCase()
    arr[i] = item + " length is " + item.length
    i++
});
console.log(arr)
*/
/*
var arr = []
for (var i = 0; i <= 2017; i++) 
{
    arr[i] = i + 1
}
function name(params) {
    
}
*/
/*
var str = 'xxxxxxxxxx'
for(var i = 0; i < str.length; i++) 
{
	for(var j = 0; j <= i; j++)
		console.log(str[j]); 
	console.log(''); 
};
*/
/*
var obj1 = {}
var obj2 = {
    name:'Alisher',
    age: 22,
    "age-age": 23,
    spec: 'programmist'
}
obj2.age = 23
obj2["age-age"] = 22
var json = JSON.stringify(obj2)
console.log(json)
var obj = JSON.parse(json)
console.log(obj)
*/
/*
function Fib(n){
    if(n == 0)
        return 0
    else if(n == 1) 
        return 1
    return Fib(n - 1) + Fib(n - 2)
}
console.log(Fib(10))
*/
/*
function fibonacci(n) {
        var result = [0, 1]
            for (var i = 1; result[i] < n; i++) {
                result.push(result[i] + result[i - 1])
            }
        console.log(result);
    }
    fibonacci(10)
    */
   /*
var user = {
    name: 'Alisher',
    log: function(){
        console.log(this.name)
    },
    toString: function(){
        return `Name is ${this.name}`
    }
}
user.log()
*/

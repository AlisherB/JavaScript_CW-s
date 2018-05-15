//1.Вывод чисел от 1 до 20
/*
var arr=[];
for (var i = 1; i <= 20; i++) {
    arr[i] = i;
    console.log(arr[i]);
}*/
//2. Вывод четных чисел
/*
for (var i = 1; i <= 100; i++) {
    if(i%2==0) console.log(i);
}*/
//3.Факториал числа
/*
function Factorial(x){
    if(x == 0 || x == 1) return 1;
    else return (x * Factorial(x - 1))
}
console.log(Factorial(5));
*/

/*
var arr=["Яблоко","Апельсин","Груша"];
arr.forEach(function(item, i, arr){
    console.log(i + ": " + item + "(массив:" + arr + ")")
})
*/
//callback
/*
function getNum(cb, value) {
    cb(value)
}
/*
function log(value) {
    console.log(value);
}
getNum(log, 1337);
*
/*
getNum(function(value) {
    console.log(value)},1337);
*/
/*
function add(value) {
    var adder = value;
    return function(value1)
    {
        return adder + value1
    }
}
var plusFive = add(5);
console.log(plusFive(8));
*/
/*
var arr = [1,2,3,4,5];
arr.forEach(function(index, i, arr){
    arr.push(i)
})
console.log(arr)
*/
/*
var arr = [1,-1,2,-2,3]
var positiveArr = arr.filter(function(number){
    return number > 0
})
console.log(positiveArr)
*/
/*
var arr = [];
for (var i = 0; i < 20; i++) {
    arr[i] = i;    
}
var arr3 = arr.filter(function(i){
    return i % 3 ==0
})
console.log(arr3)
*/
/*
var names = ["HTML","CSS","Javascript"]
var nameLength = names.map(function(name){
    return name.length
})
console.log(nameLength)//4,3,10
*/
/*
var arr = [1,2,3]
function isPositive(number){
    return number > 0
}
arr.every(isPositive)
arr.some(isPositive)
*/
/*
var arr = [1,2,3,4,5]
var value = arr.reduce(function(current, item, i, arr){
    console.log("current", current)
return current
}, 2)
console.log(value)
*/
/*
var arr = [1,2,3,4,5]
arr.reduce(function(current, item, i, arr)
{
    arr[i] = current
    return current * arr[++i]
}, arr[0])
console.log(arr)
*/
console.log("1")
setTimeout(function(){
    console.log("2")
}, 1000)
console.log("3")

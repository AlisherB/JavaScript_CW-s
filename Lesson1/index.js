/*console.log("Hello world");
var a = 1 + 1;
var b = 5 + 2;
var c = 2 * 2;
var d = 4 / 2;
var e = 9 % 2;
a+=1;
b-=1;
c*=10;
d/=2;
e++;e--;++e;--e;
console.log(a,b,c,d,e);
var animalType = "fish"
var fish = 0;
var bird = 0;
var humans = 0;
switch(animalType)
{
    case "fish":
    fish++; break;
    case "bird":
    birds++; break;
    default: humans++;
}
console.log(fish, bird, humans);

var names=["John","Augusta","Alisher"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
names[2]='Stanis'
names[4]='Бугагашеньки'
console.log(names);
names.pop();
console.log(names);
names.push(names.shift());
console.log(names);
names.shift();
console.log(names);
names.unshift();
console.log(names);
console.log(names.length);
*/
/*
var arr=[1,2,3,4,5];
function GetLastElement(arr)
{
    return arr[arr.length-1]
}
console.log(GetLastElement(arr))

function GetPrelastElement(arr)
{
    return arr[arr.length-2]
}
console.log(GetPrelastElement(arr))
function MyPush(last)
{
    return arr[arr.length] = last;
}
console.log(MyPush(6));
console.log(arr);
*/
/*
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
...
FizzBuzz
*/
for(var i = 1; i < 51; i++)
{
    if(i % 15 == 0) console.log("FizzBuzz");
    else if(i % 3 == 0) console.log("Fizz");
    else if(i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
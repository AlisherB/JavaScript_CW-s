/*var elem = document.getElementById('content');
elem.style.background = "red";
alert(elem == content); //true
content.style.background = ""; //один и тот же элемент"
*/
/*
var divs = document.getElementsByTagName('div')
console.log(divs)
*/
//var divs = document.querySelector("#content")
/*
var names = document.getElementsByTagName('li')
for (let i = 0; i < names.length; i++) 
{
    if(names[i].innerText[0] == "C")
        names[i].style.color = "red"
}
*/
/*
var div=document.createElement('div')
div.innerHTML='asd'
document.body.appendChild(div)
*/
function AddText(){
    var text = document.getElementsByName("textField")
    var div = document.getElementById("added")
    div.innerHTML=text[0].value
    document.body.appendChild(div)
}
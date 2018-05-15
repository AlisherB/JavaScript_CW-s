var div=document.getElementsByTagName("div")
var btn=document.getElementsByTagName("button")
function ClickDiv(){
    console.log(this)
    alert("Hi DIV")
}
function ClickBtn(){
    console.log(this)
    event.stopPropagation()
    alert("Hi BTN")
}
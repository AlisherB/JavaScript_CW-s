var divs = document.querySelectorAll("div")
var arr=[...divs]
array.forEach(item => {
    item.addEventListener('click', ChangeColor, false)
    item.addEventListener('click', ChangeColor, true)
});
function ChangeColor(){
    this.style.background="black";
}
/*
function add(a,b){
    console.log(this)
    return a*b
}
var user = {name: 'Vasya'}
var add2 = add.bind(user)
add2(1,1)
*/
/*
function getName(){
    let promise=new Promise((res, rej) => {
        res("success")
    })
    return promise
}
 var promise = getName()
 promise
        .then(a => a + " is true")   
        .then(b => b + " next to...") 
        .then(c => console.log(c))
        .catch(a => console.log(a)) 
*/
/*
class Human {
    constructor(men, women) {
      this.men = men;
      this.women = women;
    }  
    Meeting(){
        let promise = new Promise((resolve, reject) => {

        })
    }
    Wedding(){

    }
    Children(){
        
    }
}
*/

/*DOM, BOM и JS*/
//console.log("Connection to html is success!")
//console.log(document.body.childNodes)
//var table = document.body.children[0];
//table.rows[0].cells[0].innerHTML;

var table = document.body.children[0]
for (let i = 0; i < table.rows.length; i++) {
    var tr = table.rows[i]
    for (let j = 0; j < tr.cells.length; j++) {
        
        if(i == j)
            table.rows[i].cells[j].innerHTML = 1
        else if(i + j == table.rows.length - 1)
        table.rows[i].cells[j].innerHTML = 1
    }
}





var add_btn = document.getElementsByName('add_btn');
var parent_div = document.createElement('div');
var child_div = document.createElement('div');
var edit_btn = document.createElement('button');
edit_btn.innerText='Edit';
var remove_btn = document.createElement('button');
remove_btn.innerText='Remove';
var save_btn=document.createElement('button');
save_btn.innerText='Save';
var input=document.createElement('input');
input.setAttribute("type", "text");

function Add_Task(){
    var main_input = document.getElementById("main_input").value
    child_div.innerText = main_input;
    document.body.appendChild(parent_div);
    parent_div.appendChild(child_div);
    parent_div.appendChild(edit_btn);
    parent_div.appendChild(remove_btn);
}

function Edit_Task(){
    var div=this.parentElement;
    var textDiv=div.querySelector('div');
    input.value=textDiv.value;
    var newDiv=div;
    newDiv.replaceChild(input, textDiv);
    newDiv.replaceChild(save_btn, edit_btn);
    document.body.replaceChild(newDiv, div);
}

function Save_Edited_Task(){
    var div = this.parentElement;
    var input = div.querySelector('input')
    child_div.innerText = input.value;
    var newDiv = div;
    newDiv.replaceChild(child_div, input);
    newDiv.replaceChild(edit_btn, save_btn);
    document.body.replaceChild(newDiv, div);
}

function Remove_Task(){
    var div=this.parentElement;
    var newDiv=div;
    newDiv.appendChild(child_div);
    newDiv.appendChild(edit_btn);
    document.body.removeChild(div);
}

//add_btn.onclick = Add_Task;
save_btn.onclick = Save_Edited_Task;
edit_btn.onclick = Edit_Task;    
remove_btn.onclick = Remove_Task;
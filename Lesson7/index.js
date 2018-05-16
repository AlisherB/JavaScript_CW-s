function AddTask(){
    //P
    var text = document.getElementsByName("textField")
    var countP = 0
    var p = document.createElement("p")
    p.innerHTML = text[0].value
    p.setAttribute("id", countP++)
    p.style.margin="3px 0px"
    var id_P = p.getAttribute("id")

    //Edit
    var countEdit = 0
    var edit = document.createElement("button")
    edit.innerHTML = "Edit"
    edit.setAttribute("id", countEdit++)
    var id_Edit = edit.getAttribute("id")
    edit.onclick = function()
    {
        //debugger
        p = this.parentElement
        var editTask = document.getElementsByTagName("p").value
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        //input.value = editTask.value
        var newP = p
        newP.replaceChild(input, editTask)
        var save = document.createElement("button")
        save.innerHTML = "Save"
        newP.replaceChild(save, edit)
        document.body.replaceChild(newP, p1)
    }

    //Remove
    var countRemove = 0
    var remove = document.createElement("button")
    remove.innerHTML = "Remove"
    remove.setAttribute("id", countRemove++)
    var id_Remove = remove.getAttribute("id")
    remove.onclick = function()
    {
        var removeTask = document.getElementById(id_P)
        document.body.removeChild(removeTask)
        var removeE = document.getElementById(id_Edit)
        document.body.removeChild(removeE)
        var removeR = document.getElementById(id_Remove)
        document.body.removeChild(removeR)
    }
    var div = document.getElementById("div")
    div.appendChild(p)
    div.appendChild(edit)
    div.appendChild(remove)
}
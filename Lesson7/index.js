function AddTask(){
    //P
    var text = document.getElementsByName("textField")
    var countP = 0
    var p = document.createElement("p")
    p.innerHTML = text[0].value
    p.setAttribute("id", countP++)
    var id_P = p.getAttribute("id")

    //Edit
    var countEdit = 0
    var edit = document.createElement("button")
    edit.innerHTML = "Edit"
    edit.setAttribute("id", countEdit++)
    var id_Edit = edit.getAttribute("id")
    edit.onclick = function()
    {
        var editTask = document.getElementsByTagName("p")
        
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
    
    document.body.appendChild(p)
    document.body.appendChild(edit)
    document.body.appendChild(remove)
}
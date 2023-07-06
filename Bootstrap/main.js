//Inputs
let nombre = document.getElementById("exampleFormControlInput1")
let descripcion = document.getElementById("exampleFormControlTextarea1")
//Botones
let añadir = document.getElementById("añadir")
let eliminar = document.getElementById("eliminar")
//Tabla
let tabla = document.getElementById("tbl")
//Id
let id = 0;
//Span
let spanNombre = document.getElementById("span1")
let spanDescripcion = document.getElementById("span2")


añadir.addEventListener("click", addTodo)


function removeTodo(id) {
    document.getElementById(id).remove()
    
}

eliminar.addEventListener("click", function() {
    nombre.value = ""
    descripcion.value = ""
    spanDescripcion.style.display = "none"
    spanNombre.style.display = "none"
})

function addTodo() {
    if(nombre.value === "" || descripcion.value === "") {
        spanNombre.style.display = "inline"
        spanDescripcion.style.display = "inline"
        spanNombre.style.color = "red"
        spanDescripcion.style.color = "red"
    } else {
        spanDescripcion.style.display = "none"
        spanNombre.style.display = "none"
        let row = tabla.insertRow()
        row.setAttribute("id", id++)
        row.innerHTML = `
        <td>${id}</td>
        <td>${nombre.value}</td>
        <td>${descripcion.value}</td>
        <td></td>
        `
        const removeBtn = document.createElement("button")
        removeBtn.classList.add("btn");
        removeBtn.innerHTML = '<img src="basurero.png" width=15px height=15px>'
        removeBtn.onclick = function(e) {
            removeTodo(row.getAttribute('id'))
            id--
        }
        row.children[3].appendChild(removeBtn)
    }

}


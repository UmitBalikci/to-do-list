let headerDOM = document.querySelector("#header")
let input1Dom = document.querySelector("#input1")
let ekleDOM = document.querySelector("#button-addon2")
var listDOM = document.querySelector("#list")

let arrayList = localStorage.getItem("item") ? JSON.parse(localStorage.getItem("item")) : [];

for (i = 0; i < arrayList.length; i++) {

    addItem(arrayList[i])
}
ekleDOM.addEventListener("click", event => {
    event.preventDefault()

    if (input1Dom.value === "" || input1Dom.value.replace(/^\s+|\s+$/g, "").length == 0) {
        alert("boş ekleme yapamazsınız")
        input1Dom.value = ""
    }
    else {
        addItem(input1Dom.value)
        arrayList.push(input1Dom.value)
        localStorage.setItem("item", JSON.stringify(arrayList))
        input1Dom.value = ""
    }
}, false)

function addItem(icerik) {
    var liDOM = document.createElement("li")

    liDOM.innerHTML = icerik
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")

    liDOM.addEventListener("click", event => {
        if (event.target.tagName == "LI") {
            event.target.classList.toggle("checked")
        }
    })


    let spanDOM = document.createElement("span")
    spanDOM.innerHTML = "X"
    spanDOM.classList.add("btn", "btn-outline-danger", "closebtn")

    spanDOM.onclick = function (event) {
        spanDOM.parentElement.remove()
        //  localStorage.setItem("item", JSON.stringify(arrayList))
    }

    liDOM.appendChild(spanDOM)
    listDOM.appendChild(liDOM)

}

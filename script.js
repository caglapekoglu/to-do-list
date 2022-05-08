function newElement() {
    var yapilacaklar = document.getElementById("task").value;
    if (yapilacaklar == "") {
        alert("Boş değer eklenemez!");
    }
    else {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(yapilacaklar));
        ul.appendChild(li);
        li.createElement(GamepadButton);
    }


}
function liRemove() {
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        li.append(closeButton);
        li.append(li);
        inputElement.value = ("");

   
}
var container = document.getElementById("container");
var button = document.getElementById("button");
var input = document.getElementById("input");

button.addEventListener("click") = () => {
    var newDiv = container.createElement("div")
    newDiv.style.width = "60"+"%";
    newDiv.style.height = "30"+"%";
    newDiv.style.backgroundColor = "blue"
    var newText = newDiv.createElement("p")
    newText.value = "ok"
    document.container.appendChild(newDiv);
    document.newDiv.appendChild(newText);
}

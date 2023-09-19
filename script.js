var container = document.getElementById("container");
var button = document.getElementById("button");
var input = document.getElementById("input");

button.addEventListener("click", () => {
  var newDiv = document.createElement("div");
  newDiv.style.width = "30" + "%";
  newDiv.style.height = "10" + "%";
  newDiv.style.borderRadius = "20" + "%";
  newDiv.style.backgroundColor = "blue";
  var newText = document.createElement("p");
  newText.innerText = input.value;
  container.appendChild(newDiv);
  newDiv.appendChild(newText);
  input.value = "";
});

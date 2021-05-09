




function printMousePos(event) {
  document.getElementById('dades').innerHTML = "clientX: " + event.clientX + " - clientY: " + event.clientY;
  document.addEventListener("click", printMousePos);

}

function myFunction1() {
	prompt("Enter something!", "Text");

}

function myFunction2() {
	alert("asdfasdfsaf! I am an alert box!");
}
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function createDeleteButton(){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.classList.add("deleteli");
	addDaleteFunction(button);
	ul.appendChild(button);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		createDeleteButton();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		createDeleteButton();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

var allListItemsArray = document.querySelectorAll("li");

function doneToggle(event){
	event.target.classList.toggle("done");
}

allListItemsArray.forEach((item, i) => {
	allListItemsArray[i].addEventListener("click", doneToggle);
});

function getAllDeleteButtons(){
	return document.getElementsByClassName("deleteli");
}

function allDeleteButtonsArray(){
		return Array.prototype.slice.call( getAllDeleteButtons() );
}

function deleteRelativeLi(){
	event.target.previousSibling.remove();
	event.target.remove();
}

function addDaleteFunction(element){
	element.addEventListener('click', deleteRelativeLi);
}

var liArray = allDeleteButtonsArray();
console.log(liArray);
liArray.forEach((item, i) => {
		liArray[i].addEventListener('click', deleteRelativeLi)
});

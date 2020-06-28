const addToDoByClick = document.getElementById("push");
const input = document.getElementById("inputToDo");
const toDoList = document.querySelector("#container #toDoList");



function inputLength() {
	return input.value.length;
}
function createListElement() {
		const div = document.createElement("div");
		div.classList.add("list");
		div.appendChild(document.createTextNode(input.value));
		toDoList.appendChild(div);
		input.value = "";
		const btn = document.createElement("button");
		btn.classList.add("done");
		btn.appendChild(document.createTextNode("Done"));
		toDoList.appendChild(btn);
		const btn2 = document.createElement("button");
		btn2.classList.add("delete");
		btn2.appendChild(document.createTextNode("Delete"));
		toDoList.appendChild(btn2);
}
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
function addListAfterPressEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement()
	}
}

toDoList.addEventListener('click',function(e){
  if(e.target.className == 'delete'){

    const done = e.target.previousElementSibling;
    const div = e.target.previousElementSibling.previousElementSibling;
    const remove = e.target;
     toDoList.removeChild(done);
     toDoList.removeChild(div);
     toDoList.removeChild(remove);

}  
})

toDoList.addEventListener('click',function(e){
  if(e.target.className == 'done'){
    e.target.previousElementSibling.classList.toggle("complete");
}
    else if (e.target.className == 'done complete'){
    	  e.target.previousElementSibling.classList.toggle("complete");
    }
  
})

addToDoByClick.addEventListener("click", addListAfterClick);
input.addEventListener("keypress",addListAfterPressEnter);
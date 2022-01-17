var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
    console.log("Added new item.");
};

buttonEl.addEventListener("click", createTaskHandler); 

/* Interacting With The DOM:
1.) document.getElementByID("text-header"); 
    = Searches document for specific element on the page by 
    passing it through it's id. This code looks for an element
    id that is equal to "text-header".

2.) document.createElement("div") = Creates a new element to insert 
    into the page. Executing this statement will create a new
    "div" element.

3.) document.body.appendChild(newTextElement);
    var newTextElement = document.createElement("p");
     = Insert a newly created element into the
    DOM. This code assigns a new paragraph element then appends
    it to the body of the document then inserts it into the DOM.
*/


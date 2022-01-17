var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var TaskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
     // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";    
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list 
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", TaskFormHandler); 




// "Haven" was such a chill game because they used Lo-fi study
// beats as their background music, naturally enhancing the
// relaxing effect.

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

